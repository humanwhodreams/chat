import { Info, MoreVertical, SquareLibrary } from "lucide-react";

import { Button } from "@/components/ui/button";
import React from "react";
import UserInfoLink from "@/components/links/user-info";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-full rounded-md shadow-sm bg-background">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-start space-x-2">
          <UserInfoLink />
          <div>
            <span className="font-semibold">John Doe</span>
            <p className="text-sm text-muted-foreground">
              This is my amazing bio
            </p>
          </div>
        </div>

        <div className="space-x-4">
          <Button variant={"outline"} size={"icon"}>
            <Info />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
