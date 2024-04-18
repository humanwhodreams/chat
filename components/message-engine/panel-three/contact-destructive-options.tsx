import { Ban, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";

const ContactDestructiveOptions = () => {
  return (
    <div
      role="contact-destructive-options"
      className="grid grid-cols-1 space-y-1"
    >
      <h2 className="text-lg font-semibold text-muted-foreground">
        Danger zone
      </h2>
      <Button variant={"destructive"} className="w-full">
        <Ban className="mr-2 size-4" />
        Block Basit 🔥🏀
      </Button>
      <Button variant={"ghost"} className="w-full">
        <Trash className="mr-2 size-4" />
        Delete chat
      </Button>
    </div>
  );
};

export default ContactDestructiveOptions;
