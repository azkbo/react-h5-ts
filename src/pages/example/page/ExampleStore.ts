/**
 * Author: Meng
 * Date: 2023-09-14
 * Modify: 2023-09-14
 * Desc: 
 */

import { makeAutoObservable } from "mobx";

export default class ExampleStore {
  public lastTime = 0;

  constructor(props: any) {
    makeAutoObservable(this);
  }

  // 页面加载调用
  onMount() {}

  // 页面销毁调用
  onDistory() {}

  // 更新时间
  public onUpdateTime = () => {
    this.lastTime = Date.now();
  }
}