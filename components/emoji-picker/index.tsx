"use client";

import * as React from "react";

import { Loader2Icon, Smile } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import dynamic from "next/dynamic";

const EmojiPicker = dynamic(() => import("./emojic-picker"), {
  loading: () => {
    return (
      <div className="w-[352px] h-[435px] flex flex-col items-center justify-center">
        <Loader2Icon className="animate-spin" />
        <p>Loading emoji picker</p>
      </div>
    );
  },
  ssr: false,
});

interface Props<T> {
  val: T;
  onChange: (val: T) => void;
}

export const EmojiInput = ({ val, onChange }: Props<string>) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="group"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {val ? (
            <p className="text-2xl">{val}</p>
          ) : (
            <Smile
              size={20}
              className="flex-shrink-0 text-muted-foreground group-hover:text-foreground"
            />
          )}
          <span className="sr-only">add emojicon</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-fit" align="start" sideOffset={14}>
        <div className="p-2">
          <p className="text-sm font-medium">Select an emoji</p>
          <div>
            <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
              <span className="w-2 h-2 bg-red-500 rounded-full me-1"></span>
              Bug
            </span>
            <span className="pt-2 ml-2 text-xs text-muted-foreground">
              Emojis are added to the end of text.
            </span>
          </div>
        </div>
        <Separator className="my-2" />
        <EmojiPicker
          onSelect={(val) => {
            onChange(val);
            setIsOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
};
