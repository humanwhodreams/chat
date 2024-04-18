import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, ArrowRightCircle, File, Image, Link } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

const SharedMedia = () => {
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
          Shared media
          <ArrowRightCircle className="w-4 h-4 transition-transform duration-200 shrink-0 text-muted-foreground" />
        </AccordionTrigger>
        <AccordionContent className="pb-0">
          <Button variant={"ghost"} className="justify-between w-full">
            <span className="flex items-center">
              <Image className="mr-2 size-4" />
              Media
            </span>

            <ArrowRight className="size-4" />
          </Button>
          <Button variant={"ghost"} className="justify-between w-full">
            <span className="flex items-center">
              <File className="mr-2 size-4" />
              Documents
            </span>
            <ArrowRight className="size-4" />
          </Button>
          <Button variant={"ghost"} className="justify-between w-full">
            <span className="flex items-center">
              <Link className="mr-2 size-4" />
              Links
            </span>
            <ArrowRight className="size-4" />
          </Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SharedMedia;
