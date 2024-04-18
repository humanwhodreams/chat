"use client";

import * as React from "react";

import { Receiver } from "./message-bubbles/receiver";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sender } from "./message-bubbles/sender";

const Content = () => {
  const scrollToBottom = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollToBottom.current === null) return;

    scrollToBottom.current.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return (
    <ScrollArea
      role="message-core"
      className="relative w-full h-screen pt-2 pl-4 pr-4 scroll-m-10"
    >
      <Receiver />
      <Sender />
      <div ref={scrollToBottom} />
    </ScrollArea>
  );
};

export default Content;
