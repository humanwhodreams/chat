import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, ArrowRightCircle, File, Image, Link } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

type Props = {};

const SharedMedia = (props: Props) => {
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
          <ArrowRightCircle className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
        </AccordionTrigger>
        <AccordionContent className="pb-0 border-l-2 ">
          <Button variant={"ghost"} className="w-full justify-between">
            <span className="flex items-center">
              <Image className="size-4 mr-2" />
              Media
            </span>

            <ArrowRight className="size-4" />
          </Button>
          <Button variant={"ghost"} className="w-full justify-between">
            <span className="flex items-center">
              <File className="size-4 mr-2" />
              Documents
            </span>
            <ArrowRight className="size-4" />
          </Button>
          <Button variant={"ghost"} className="w-full justify-between">
            <span className="flex items-center">
              <Link className="size-4 mr-2" />
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
