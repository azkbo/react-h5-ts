/**
 * Author: Meng
 * Date: 2023-08-31
 * Modify: 2023-08-31
 * Desc: 路由管理
 */
import React, { ReactNode } from "react";
import { createBrowserRouter, redirect } from "react-router-dom";

import {
  MainPage,
  HomePage,
  ProjectPage,
  ProjectGoodsPage,
  AccountPage,
  LoginPage,
} from "./index";
const ErrorPage = React.lazy(() => import("./unusual/ErrorPage"));

// 路由加载器
function routeLoader({ request, params }: any, title?: string) {
  const path = window.location.href;
  console.log(`-----> routeLoader form: ${path}, to: ${request.url}, params: ${params}`);

  document.title = title || "App";
  return request == null ? redirect("account/login") : { back: false };
}

// 处理action
function filterAction({ request, params }: any) {
  console.log("-----> filterAction", params);
  return null;
}

// 错误页面
function ErrorLazyPage() {
  return (
    <React.Suspense fallback={<>...</>}>
      <ErrorPage />
    </React.Suspense>
  );
}

// 懒加载
function lazyPage(
  path: string,
  element: ReactNode,
  title?: string,
  index?: boolean
) {
  return {
    path,
    index,
    action: filterAction,
    loader: (res: any) => routeLoader(res, title),
    element: <React.Suspense fallback={<>...</>}>{element}</React.Suspense>,
  };
}

// 路由
const routes = createBrowserRouter([
  {
    path: "/",
    // loader: routeLoader,
    // action: filterAction,
    element: <MainPage />,
    errorElement: <ErrorLazyPage />,
    children: [
      lazyPage("tab1", <HomePage />, "首页"),
      lazyPage("tab2", <ProjectPage />, "产品"),
      lazyPage("tab3", <AccountPage />, "我的"),
    ],
  },
  {
    path: "project",
    errorElement: <ErrorLazyPage />,
    children: [
      lazyPage("", <ProjectPage />, "产品", true),
      lazyPage("goods", <ProjectGoodsPage />),
    ],
  },
  {
    path: "account",
    errorElement: <ErrorLazyPage />,
    children: [
      lazyPage("", <AccountPage />, "账号", true),
      lazyPage("login", <LoginPage />),
    ],
  },
  {
    path: "*",
    async lazy() {
      let { NotFoundPage } = await import("./unusual/NotFound");
      return { Component: NotFoundPage };
    },
  },
]);

// routes.subscribe((res) => {
//   // this is called whenever new locations come in the action is POP, PUSH, or REPLACE
//   console.log(res)
// });

export function navigate(path: string, params?: any) {
  routes.navigate(path, params)
}

export default routes;
