/**
 * Author: Meng
 * Date: 2023-08-31
 * Modify: 2023-08-31
 * Desc: App根组件
 */

import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

import { AppTheme } from "./components/index";
import useLaunch from "./modules/hooks/launch";

import routes from "./pages/routes";
import { LaunchPage } from "./pages/index";
import Loading from './components/loading/Loading';

import "./App.css";
import AppConfig from "./modules/config";

function App() {
  const { launch } = useLaunch();

  useEffect(() => {
    // 初始化一些事情
    // console.log(AppConfig);

    return () => {
      console.log("------> close");
    };
  }, []);

  if (launch) {
    return (
      <AppTheme>
        <div className="App">
          <Loading />
          <RouterProvider
            router={routes}
            fallbackElement={<p>Initial Load...</p>}
          />
        </div>
      </AppTheme>
    );
  } else {
    return <LaunchPage />;
  }
}

export default App;
