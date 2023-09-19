/**
 * Author: Meng
 * Date: 2023-09-06
 * Modify: 2023-09-06
 * Desc: 数据存储
 *
 * localStorage/sessionStorage区别:
 *    localStorage
 *      的数据可以长期保留
 *      一般5MB，各浏览器不同
 *      改变时能监听
 *      同一浏览器同源域名可以共享
 *
 *    sessionStorage
 *      当窗口或者标签页被关闭时会清除
 *      5MB
 *      改变时能监听
 *      同一浏览器(同一窗口/iframe)的同源域名可以共享
 */
import IStorage from "./IStorage";

export default class LocalStorage implements IStorage {

  public getUserInfo<T>(): T | null {
    const data = window.localStorage.getItem('app-user-info');
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }

  public setUserInfo<T>(data: T): void {
    window.localStorage.setItem('app-user-info', JSON.stringify(data));
    window.dispatchEvent(new Event("login-storage"));
  }

  // 获取存储数据
  public getStorage<T>(key: string): T {
    const data = window.localStorage.getItem(key);
    if (data && data.indexOf("{") == 0 && data.lastIndexOf("}") == (data.length - 1)) {
      return JSON.parse(data);
    } else {
      return data as T;
    }
  }
  // 存储数据
  public setStorage<T>(key: string, data: T): void {
    if (typeof data == "object") {
      window.localStorage.setItem(key, JSON.stringify(data));
    } else {
      window.localStorage.setItem(key, `${data}`);
    }
    window.dispatchEvent(new Event("storage"));
  }

  // 获取存储数据 -异步
  public getAsyncStorage<T>(key: string): T {
    const data = window.localStorage.getItem(key);
    if (data && data.indexOf("{") == 0 && data.lastIndexOf("}") == (data.length - 1)) {
      return JSON.parse(data);
    } else {
      return data as T;
    }
  }
  // 存储数据 -异步
  public setAsyncStorage<T>(key: string, data: T): void {
    if (typeof data == "object") {
      window.localStorage.setItem(key, JSON.stringify(data));
    } else {
      window.localStorage.setItem(key, `${data}`);
    }
    window.dispatchEvent(new Event("storage"));
  }
  // 移除指定的数据
  public removeStorage(key: string): void {
    window.localStorage.removeItem(key);
  }
  // 清空存储
  public clearStorage(): void {
    window.localStorage.clear();
  }
}
