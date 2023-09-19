/**
 * Author: Meng
 * Date: 2023-09-14
 * Modify: 2023-09-14
 * Desc: 加载框
 * 挂载到 root 节点
 */
import React, { useState, useEffect, useCallback } from "react";

import { EventBus } from "request-no";

import "./loading.scss";

export default function Loading() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    onMount();
  }, []);

  const onMount = useCallback(() => {
    // const rootDiv = document.getElementById("root");

    // const layout = document.createElement('div');
    // layout.className = 'v-loading';
    // const view = document.createElement('div');
    // layout.className = 'v-loading-box';
    // layout.appendChild(view);
    // rootDiv?.appendChild(layout);

    EventBus.add({
      key: "app-loading-event",
      tag: "loading",
      callback: (show: boolean) => {
        setVisible(show);
        return false;
      },
    });
  }, []);

  if (visible) {
    return (
      <div className="v-loading">
        <div className="v-loading-box">
          <span>Loading ...</span>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
