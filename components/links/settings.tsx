import { Button } from "../ui/button";
import React from "react";
import { Settings } from "lucide-react";

type Props = {};

const SettingsLink = (props: Props) => {
  return (
    <>
      <Button variant={"outline"} size={"icon"} className="group">
        <Settings
          size={20}
          className="transition-colors text-muted-foreground group-hover:text-foreground"
        />
        <span className="sr-only">Settings</span>
      </Button>
    </>
  );
};

export default SettingsLink;
