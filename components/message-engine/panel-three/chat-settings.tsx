import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRightCircle, Bell } from "lucide-react";

import { Switch } from "@/components/ui/switch";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {};

const ChatSettings = (props: Props) => {
  return (
    <Accordion type="multiple">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger
          className={cn(
            "hover:no-underline",
            buttonVariants({
              variant: "ghost",
              className: "w-full justify-between",
            })
          )}
        >
          Chat settings
          <ArrowRightCircle className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          <div className="flex items-center justify-between px-4">
            <p className="flex items-center">
              <Bell className="size-4 mr-2" />
              Mute notifications
            </p>
            <Switch />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ChatSettings;
