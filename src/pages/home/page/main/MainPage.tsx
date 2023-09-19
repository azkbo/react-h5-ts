/**
 * Author: Meng
 * Date: 2023-08-31
 * Modify: 2023-08-31
 * Desc: 主页
 */
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import AppComponent from "../../../../libs/mobx/AppComponent";
import MainStore, { TabItem } from "./MainStore";

import "./main.scss";

function MainPage(props: any) {
  // const navigate = useNavigate();
  const [store] = useState(() => new MainStore(props));
  return <AppComponent store={store} render={render} />;
}

function render(store: MainStore) {

  function tabView(item: TabItem, index: number) {
    return (
      <div
        key={index}
        className={item.selected ? "main-tab-view2" : "main-tab-view"}
        onClick={() => store.onChangeTab(item.path)}
      >
        {/* <img /> */}
        <span>{item.name}</span>
      </div>
    );
  }

  return (
    <div className="main">
      <div className="flex main-tab-page">
        <Outlet />
      </div>
      <div className="main-tab-layout">{store.tabList.map(tabView)}</div>
    </div>
  );
}

export default MainPage;
