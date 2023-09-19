/**
 * Author: Meng
 * Date: 2023-08-31
 * Modify: 2023-08-31
 * Desc: 
 */
import React, { useState } from "react";

import AppComponent from "../../../../libs/mobx/AppComponent";
import LoginStore from "./LoginStore";

function LoginPage(props: any) {
  const [store] = useState(() => new LoginStore(props));
  return <AppComponent store={store} render={render} />;
}

function render(store: LoginStore) {
  return (
    <div className="login">
      <h1>这是一个页面</h1>
      <span>{store.lastTime}</span>
      <button onClick={store.onClick}>点击</button>
    </div>
  );
}
export default LoginPage;
