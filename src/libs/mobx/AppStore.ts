/**
 * Author: Meng
 * Date: 2023-09-13
 * Modify: 2023-09-13
 * Desc:
 */

import { makeAutoObservable } from "mobx";

export default class AppStore {

  constructor(overrides?: any, options?: any) {
    makeAutoObservable(this, overrides, options);
  }
  
}
