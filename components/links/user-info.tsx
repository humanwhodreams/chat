import { Button } from "@/components/ui/button";
import * as React from "react";
import { User } from "lucide-react";
import { type ClassValue } from "clsx";
import { cn } from "@/lib/utils";

type Props = {
  className?: ClassValue;
};

const UserInfoLink = (props: Props) => {
  return (
    <>
      <Button variant={"outline"} size={"icon"} className={cn(props.className)}>
        <User />
      </Button>
    </>
  );
};

export default UserInfoLink;
