/**
 * Author: Meng
 * Date: 2023-09-14
 * Modify: 2023-09-14
 * Desc:
 */

import React, { useState, useEffect } from "react";

import AppComponent from "../../../libs/mobx/AppComponent";
import ExampleStore from "./ExampleStore";
import "./example.scss";

function ExamplePage(props: any) {
  const [store] = useState(() => new ExampleStore(props));
  return <AppComponent store={store} render={render} />;
}

function render(store: ExampleStore) {
  return (
    <div className="example">
      <h1>这是一个模版页面</h1>
      <span>{store.lastTime}</span>
      <button onClick={store.onUpdateTime}>点击</button>
    </div>
  );
}

export default ExamplePage;
