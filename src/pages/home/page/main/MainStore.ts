/**
 * Author: Meng
 * Date: 2023-09-13
 * Modify: 2023-09-13
 * Desc:
 */

import { makeAutoObservable } from "mobx";
import { NavigateFunction } from "react-router-dom";

import { navigate } from "../../../routes";

export type TabItem = {
  name: string;
  path: string;
  icon: string;
  selectIcon: string;
  selected?: boolean;
};
const appTabs: TabItem[] = [
  { name: "首页", path: "/tab1", icon: "", selectIcon: "", selected: true },
  { name: "产品", path: "/tab2", icon: "", selectIcon: "" },
  { name: "我的", path: "/tab3", icon: "", selectIcon: "" },
];

export default class MainStore {
  // private navigate: NavigateFunction;
  private curTab = "/tab1";
  public tabList = appTabs;

  constructor(props: any) {
    makeAutoObservable(this);

    // this.navigate = navigate;
  }

  public onChangeTab = (path: string) => {
    if (this.curTab !== path) {
      this.curTab = path;
      const list = this.tabList;
      list.forEach((e) => (e.selected = e.path == path));
      this.tabList = [...list];
      navigate(path);
    }
  };

  onMount() {
    navigate(this.curTab);
  }

  onDistory() {}
}
