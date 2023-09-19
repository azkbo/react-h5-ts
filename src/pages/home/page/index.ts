/**
 * Author: Meng
 * Date: 2023-08-31
 * Modify: 2023-08-31
 * Desc: 模块页面目录
 */

import React from "react";

export { default as MainPage } from "./main/MainPage";
export const HomePage = React.lazy(() => import("./home/HomePage"));
