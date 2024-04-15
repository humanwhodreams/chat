import * as React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthenticationLayout = (props: Props) => {
  return <div>{props.children}</div>;
};

export default AuthenticationLayout;
