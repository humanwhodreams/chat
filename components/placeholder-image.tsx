import { cn } from "@/lib/utils";
import { type ClassValue } from "clsx";
import Image from "next/image";
import React from "react";

type Props = {
  className?: ClassValue;
};

const PlaceholderImage = (props: Props) => {
  return (
    <Image
      src={"/avatar.jpg"}
      alt="profile picture"
      fill
      className={cn("object-contain size-8", props.className)}
    />
  );
};

export default PlaceholderImage;
