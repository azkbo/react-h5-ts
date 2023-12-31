/**
 * Author: Meng
 * Date: 2023-09-14
 * Modify: 2023-09-14
 * Desc:
 */

import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  // baseURL: '',
  timeout: 30000, // 毫秒
  headers: { "Content-Type": "application/json; charset=utf-8" },
});

const headers = { "Content-Type": "multipart/form-data" };
// 上传
export function upload() {
  return new Promise((resolve, reject) => {
    const data = new FormData()
    instance
      .request({ url: "", data, headers })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// 下载
export function download(url: string) {
  return new Promise((resolve, reject) => {
    instance
      .request({ url })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
