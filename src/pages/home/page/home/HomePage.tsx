/**
 * Author: Meng
 * Date: 2023-08-31
 * Modify: 2023-08-31
 * Desc:
 */
import React, {useState, useEffect } from "react";

import AppComponent from '../../../../libs/mobx/AppComponent';
import "./home.scss";
import HomeStore from "./HomeStore";
import Header from "../../../../components/header/header";
import useLogin from "../../../../modules/hooks/login";

function HomePage(props: any) {
  const [store] = useState(() => new HomeStore(props))
  return <AppComponent store={store} render={render}/>;
}

function render(store: HomeStore) {

  const {login} = useLogin();

  return(
    <div className="flex home">
      <h1>首页 {login ? '已登录':'未登录'}</h1>
      <span>{store.lastTime}</span>
      <Header title="否地方"/>
      <button onClick={store.onClickTime}>点击</button>
    </div>
  )
}

export default HomePage;
