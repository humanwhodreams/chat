import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";

const MessageCardActions = () => {
  return (
    <>
    {/* TODO Add functionalities for specifica chats */}
      <DropdownMenu>
        <DropdownMenuTrigger tabIndex={-1} className="transition-transform scale-0 group-hover:scale-100">
          <ChevronDown size={20} className="text-muted-foreground" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem>Mute notifications</DropdownMenuItem>
          <DropdownMenuItem>Delete chats</DropdownMenuItem>
          <DropdownMenuItem>Mark as read</DropdownMenuItem>
          <DropdownMenuItem>Block</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default MessageCardActions;
