/**
 * Author: Meng
 * Date: 2023-09-13
 * Modify: 2023-09-13
 * Desc:
 */
import React, { useEffect } from "react";

import { observer } from "mobx-react-lite";

// class AppComponent {
//   constructor(props: Readonly<PageProps<Store>>) {}
// }

type Distory = {
  onMount?: () => void;
  onDistory?: () => void;
  // onNavigate?: () => void;
  // goBack?: () => void;
};

interface PageProps<Store> {
  store: Store & Distory;
  render: (store: Store) => React.DetailedHTMLProps<any, any>;
}

function AppComponent<Store>(props: Readonly<PageProps<Store>>) {
  useEffect(() => {
    if (props.store.onMount) {
      props.store.onMount();
    }

    return () => {
      if (props.store.onDistory) {
        props.store.onDistory();
      }
    };
  }, []);
  const PageView = observer(({ store }: any) => props.render(store));
  return <PageView store={props.store} />;
}

export default AppComponent;
