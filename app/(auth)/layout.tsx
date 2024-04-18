import * as React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthenticationLayout = (props: Props) => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background">
      {props.children}
    </main>
  );
};

export default AuthenticationLayout;
