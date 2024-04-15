import { Button } from "@/components/ui/button";
import React from "react";
import { X } from "lucide-react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-full px-4 py-3 rounded-md shadow-sm bg-background">
      <div className="flex flex-row items-center space-x-2">
        <Button variant={"ghost"} size={"icon"}>
          <X className="flex-shrink-0 text-muted-foreground" />
        </Button>
        <h1 className="font-semibold text-muted-foreground">Contact info</h1>
      </div>
    </header>
  );
};

export default Header;
