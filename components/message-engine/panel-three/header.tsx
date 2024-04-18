import { Button } from "@/components/ui/button";
import React from "react";
import { SheetClose } from "@/components/ui/sheet";
import { X } from "lucide-react";

const Header = () => {
  return (
    <header className="grid w-full grid-cols-1">
      <div className="flex flex-row items-center space-x-2">
        <SheetClose asChild>
          <Button variant={"ghost"} size={"icon"}>
            <X className="flex-shrink-0 text-muted-foreground" />
          </Button>
        </SheetClose>
        <h1 className="font-semibold text-muted-foreground">Contact info</h1>
      </div>
    </header>
  );
};

export default Header;
