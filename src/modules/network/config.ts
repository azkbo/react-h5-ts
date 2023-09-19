/**
 * Author: Meng
 * Date: 2023-08-18
 * Modify: 2023-08-18
 * Desc:
 */

import AppConfig from "../config/index";

// 环境及服务器设置
export const env_hosts: any = {
  prod: {
    def: "http://def.demo.com",
    order: "http://order.demo.com",
  },
  test: {
    def: "http://def-test.demo.com",
    order: "http://order-test.demo.com",
  },
  dev: {
    def: "http://192.168.253.109:8087",
    order: "http://order.localhost:8087",
  },
};

// 获取网络host
export function getRequestHost(host: string, env?: string): string {
  console.log(host, env)
  return getHostFromTag(host || AppConfig.defHost, env || AppConfig.defEnv);
}

// 获取指定标签环境域名
export function getHostFromTag(tag: string, env: string): string {
  const envTag = env || "prod";
  const domain = tag || "def";
  return env_hosts[envTag][domain];
}

// 请求头及参数处理
export function interceptor(params: any, headers: any) {
  let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsInRpbWUiOjE2OTIzNTAyMzE0MTcsImlhdCI6MTY5MjM1MDIzMX0.TjSomiQuddxpOnHeKVccKW4ftIT-9AZMBYfKQdyaJzQ";
  let agent = "123agent45678";
  // params.agent = agent;
  headers.appAgent = agent;
  headers.token = token;
  return { params, headers };
}
