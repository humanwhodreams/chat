import { ArrowRightCircle, Ban, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import ChatSettings from "./chat-settings";
import { PlaceHolderAvatar } from "@/components/icons/external";
import SharedMedia from "./shared-media";

type Props = {};

const Content = (props: Props) => {
  return (
    <div className="flex-grow w-full relative p-4 rounded-md shadow-sm bg-background">
      <div className="grid grid-cols-1 gap-4">
        <div role="contact-info" className="flex items-center gap-4">
          <span className="inline-block size-[62px] bg-gray-100 rounded-full overflow-hidden">
            <PlaceHolderAvatar className="size-full text-gray-300" />
          </span>
          <div className="leading-none">
            <p className="text-lg font-medium">Basit 🔥🏀</p>
            <span className="text-sm text-muted-foreground">
              @basit_legend_2002
            </span>
          </div>
        </div>
        <div role="contact-bio" className="grid grid-cols-1 space-y-1">
          <span className="text-sm">This is my awesome chatwire bio.</span>
        </div>
        <div role="contact-options" className="grid grid-cols-1 space-y-1">
          <ChatSettings />
          <SharedMedia />
        </div>
        <div role="contact-destructive-options" className="grid grid-cols-1 space-y-1">
          <Button variant={"destructive"} className="w-full">
            <Ban className="size-4 mr-2" />
            Block Basit 🔥🏀
          </Button>
          <Button variant={"ghost"} className="w-full">
            <Trash className="size-4 mr-2" />
            Delete chat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Content;
