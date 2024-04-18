import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MessageSquarePlus, Users } from "lucide-react";

import { Button } from "../ui/button";

const NewMessage = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger title="New" asChild>
          <Button variant={"ghost"} size={"icon"} className="group">
            <MessageSquarePlus size={20} />
            <span className="sr-only">New message</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <MessageSquarePlus className="w-4 h-4 mr-2" />
            <span>New message</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Users className="w-4 h-4 mr-2" />
            <span>New group chat</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default NewMessage;
