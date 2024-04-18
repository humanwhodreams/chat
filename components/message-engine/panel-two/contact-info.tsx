import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import PANELTHREE from "../panel-three/panel-three";

const ContactInfo = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <MoreVertical size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent className="p-4 w-96">
          <PANELTHREE />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ContactInfo;
