import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Avatar from "boring-avatars";
import MessageCardActions from "./message-card-actions";

interface Props {
  name: string;
  date: string;
  message: string;
}

const MessageCard = (props: Partial<Props>) => {
  return (
    <Card className="border-t-0 border-l-0 border-r-0 rounded-none shadow-none hover:bg-secondary">
      <CardHeader className="relative p-2 group">
        <div className="flex items-center">
          <Avatar
            size={50}
            name={props.name}
            variant="bauhaus"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
          <div className="flex flex-col w-full ml-4">
            <div className="flex items-center justify-between">
              <CardTitle className="truncate max-w-[200px] font-medium" title={props.name}>
                {props.name}
              </CardTitle>
              <span className="text-xs font-medium text-muted-foreground">
                {props.date}
              </span>
            </div>
            <CardDescription
              className="truncate max-w-[200px]"
              title={props.message}
            >
              {props.message}
            </CardDescription>
          </div>
        </div>
        <div className="absolute bottom-2 right-4">
          <MessageCardActions />
        </div>
      </CardHeader>
    </Card>
  );
};

export default MessageCard;
