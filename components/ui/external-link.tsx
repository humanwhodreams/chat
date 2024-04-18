import * as React from "react";

import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const ExternaLink = (props: Props) => {
  return (
    <a
      href={props.href}
      rel="noreferrer"
      target="_blank"
      className={cn(props.className)}
    >
      {props.children}
    </a>
  );
};

export default ExternaLink
