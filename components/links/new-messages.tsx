import { Button } from "../ui/button";
import React from "react";
import { SquarePen } from "lucide-react";

type Props = {};

const NewMessagesLink = (props: Props) => {
  return (
    <>
      <Button variant={"outline"} size={"icon"} className="group">
        <SquarePen
          size={20}
          className="transition-colors text-muted-foreground group-hover:text-foreground"
        />
        <span className="sr-only">New message</span>
      </Button>
    </>
  );
};

export default NewMessagesLink;
