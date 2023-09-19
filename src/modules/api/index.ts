/**
 * Author: Meng
 * Date: 2023-08-31
 * Modify: 2023-08-31
 * Desc: 
 */
import { ResultData } from "request-no";
import { request } from "../network/index";

// 接口示例
export function test(params = { user: "123", memo: "12314" }): Promise<any> {
  return request<any>({
    url: "/test/demo",
    method: "GET",
    params,
    headers: { token: "123123121" },
  });
}

// 
export function queryHomeData(params = { user: "123", memo: "12314" }): Promise<ResultData<any>> {
  return request<any>({
    url: "/test/demo",
    method: "GET",
    params,
    headers: { token: "123123121" },
  });
}