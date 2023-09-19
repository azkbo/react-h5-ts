/**
 * Author: Meng
 * Date: 2023-09-01
 * Modify: 2023-09-01
 * Desc: 上传
 */

const axios = require('axios');
const fs = require('fs');

// 上传地址
const uploadUrl = 'http://192.168.253.98:8087/file/upload';

const headers = {
  headers: {
    'Content-Type': 'multipart/form-data',
  }
}

// 上传
function uploadFile(path) {
  return new Promise((resolve) => {
    const file = fs.createReadStream(path);
    axios.post(uploadUrl, {
      step: { name: 'file' },
      file,
    }, headers).then(({ data }) => {
      console.log('---> upload response:', data);
      resolve(data);
    }).catch((err) => {
      console.log('---> upload error:', err);
    })
  });
};

module.exports = {
  uploadFile
};
