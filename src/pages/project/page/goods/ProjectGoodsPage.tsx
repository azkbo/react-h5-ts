/**
 * Author: Meng
 * Date: 2023-08-31
 * Modify: 2023-08-31
 * Desc:
 */
import React, { useState } from "react";

import AppComponent from "../../../../libs/mobx/AppComponent";
import ProjectGoodsStore from "./ProjectGoodsStore";

function ProjectGoodsPage(props: any) {
  const [store] = useState(() => new ProjectGoodsStore(props));
  return <AppComponent store={store} render={render} />;
}

function render(store: ProjectGoodsStore) {
  return (
    <div className="login">
      <h1>这是一个页面</h1>
      <span>{store.lastTime}</span>
      <button onClick={store.onClick}>点击</button>
    </div>
  );
}
export default ProjectGoodsPage;
