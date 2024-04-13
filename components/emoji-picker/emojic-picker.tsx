"use client";

import * as React from "react";

import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { useTheme } from "next-themes";

type Props<T> = {
  onSelect: (value: T) => void;
};

const EmojiPicker = ({ onSelect }: Props<string>) => {
  const { theme } = useTheme();

  return (
    <Picker
      autoFocus
      data={data}
      theme={theme}
      showPreview={false}
      showSkinTones={false}
      onEmojiSelect={(emoji: any) => {
        if (!emoji?.native) return;

        onSelect(emoji.native);
      }}
    />
  );
};

export default EmojiPicker;
