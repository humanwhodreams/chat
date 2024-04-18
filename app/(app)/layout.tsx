import * as React from "react";

import PANELONE from "@/components/message-engine/panel-one/panel-one";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <main className="flex items-start min-h-dvh bg-background">
      <PANELONE />
      {props.children}
    </main>
  );
};

export default Layout;
