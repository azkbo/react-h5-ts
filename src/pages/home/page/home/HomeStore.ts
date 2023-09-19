/**
 * Author: Meng
 * Date: 2023-09-13
 * Modify: 2023-09-13
 * Desc:
 */

import { makeAutoObservable } from "mobx";

import {navigate} from '../../../routes';
import { setUserInfo, getUserInfo } from "../../../../modules/store";

export default class HomeStore {

  public lastTime = 0;

  constructor(props: any) {
    makeAutoObservable(this);
  }

  public onClickTime = () => {
    // this.lastTime = Date.now();
    // navigate('/project', {userId: '321939'})
    setUserInfo(getUserInfo() ? null : {userId: 0, userName: '你好'});
  }

  onMount() {}

  onDistory() {}
}
