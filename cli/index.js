#!/usr/bin/env node

/**
 * Author: Meng
 * Date: 2023-09-01
 * Modify: 2023-09-01
 * Desc: 构建发布版本
 */

const { Command } = require('commander');
const path = require('path');
const fs = require('fs');

const appInfo = require('../package.json');
const { uploadFile } = require('./upload');
const { updateVersion, generateZip } = require('./utils');

const manifestDir = path.resolve(__dirname, '../public/manifest.json');
if (!fs.existsSync(manifestDir)) {
  const publicDir = path.resolve(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  fs.writeFileSync(manifestDir, JSON.stringify({ name: null, version: null, env: null, date: null }, null, 2), 'utf-8');
}
const manifest = require(manifestDir); // 项目包配置

const sourcePath = path.resolve(__dirname, '../build'); // 文件路径
const program = new Command();

program.option('--env <env>', '发布环境');
program.parse(process.argv);

const options = program.opts();
if (options.env === '') {
  console.log('------> 请输入环境');
} else {
  deployApp(options.env || 'prod');
}

// 部署应用
function deployApp(env) {
  // console.log('<------------------- deploy app ------------------->');
  console.log(`<------------------ ${manifest.name}(${env}) start deploy ------------------>`);

  startDeploy(env);
}

// 开始部署
async function startDeploy(env) {

  const version = updateVersion(manifest[env] || appInfo.version);
  const fileName = manifest.name || appInfo.name;
  const filePath = await generateZip(sourcePath, fileName, version, env);
  if (filePath) {
    const res = await uploadFile(filePath);
    if (res) {
      manifest.version = version;
      console.log(`\n****** ${manifest.name}(${version}), ${env} ******\n`);
    }
  } else {
    console.log(`\n****** 部署失败 ******\n`);
  }
  console.log('<------------------ end deploy ------------------>');
}