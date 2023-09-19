/**
 * Author: Meng
 * Date: 2023-08-31
 * Modify: 2023-08-31
 * Desc: App入口
 * React.StrictMode：是帮助应用适应异步渲染的组件
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { systemInit } from "./modules/system/index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// 配置对象式路由用
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// 组件式路由用下面的
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

systemInit();
