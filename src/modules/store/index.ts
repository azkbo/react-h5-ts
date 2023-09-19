/**
 * Author: Meng
 * Date: 2023-09-01
 * Modify: 2023-09-01
 * Desc: 数据存储
 * 
 */

import IStorage from "./IStorage";
import LocalStorage from "./local";

const storage: IStorage = new LocalStorage();

// 存储
export function setUserInfo(data: unknown) {
  storage.setUserInfo(data);
}
// 获取
export function getUserInfo() {
  return storage.getUserInfo();
}

// 存储
export function setStorage(key: string, data: unknown) {
  storage.setStorage(key, data);
}
// 获取
export function getStorage(key: string) {
  return storage.getStorage(key);
}
// 移除
export function removeStorage(key: string) {
  storage.removeStorage(key);
}
// 清空
export function clearStorage() {
  storage.clearStorage();
}
