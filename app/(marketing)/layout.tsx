import * as React from "react";

import { Header } from "@/components/layouts/header";

type Props = {
  children: React.ReactNode;
};

const MarketingLayout = (props: Props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default MarketingLayout;
