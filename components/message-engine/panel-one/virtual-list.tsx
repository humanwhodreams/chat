import { Lock } from "lucide-react";
import MessageCard from "./message-card/message-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

type Props = {};

const VirtualList = (props: Props) => {
  return (
    <ScrollArea className="h-screen px-2 scroll-m-10">
      <MessageCard />
      <EncrptyionStatus />
    </ScrollArea>
  );
};

function EncrptyionStatus() {
  return (
    <div className="flex flex-col items-center w-full px-4 py-2 space-y-4">
      <Separator className="mt-4" />
      <p className="flex items-center pb-4 text-xs font-medium text-center text-muted-foreground">
        <Lock className="flex-shrink-0 mr-2 size-4" />
        Your personal messages are end&ndash;to&ndash;end encrypted
      </p>
    </div>
  );
}

export default VirtualList;
