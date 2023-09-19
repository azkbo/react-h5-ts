/**
 * Author: Meng
 * Date: 2023-09-13
 * Modify: 2023-09-13
 * Desc:
 */

import { makeAutoObservable } from "mobx";

import {navigate} from '../../../routes';

export default class ProjectGoodsStore {

  public lastTime = 0;

  constructor(props: any) {
    makeAutoObservable(this);
  }

  public onClick = () => {
  }

  onMount() {}

  onDistory() {}
}
