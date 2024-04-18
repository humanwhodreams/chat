import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import UserProfilePanel from "./user-profile-panel";
import { X } from "lucide-react";

const UserProfile = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Avatar>
          <AvatarImage src="/avatar.jpg" className="hover:brightness-90" />
          <AvatarFallback>EE</AvatarFallback>
        </Avatar>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <div className="flex items-center justify-between w-full pb-4 mb-4 border-b">
          <h1 className="text-xl font-semibold text-muted-foreground">
            User Information
          </h1>
          <SheetClose>
            <X />
          </SheetClose>
        </div>
        <UserProfilePanel />
      </SheetContent>
    </Sheet>
  );
};

export default UserProfile;
