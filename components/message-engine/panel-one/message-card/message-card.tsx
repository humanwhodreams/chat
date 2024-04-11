import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import MessageCardActions from "./message-card-actions";
import React from "react";
import UserInfoLink from "@/components/links/user-info";

type Props = {};

const MessageCard = (props: Props) => {
  return (
    <Card className="my-1 rounded-md shadow-none">
      <CardHeader className="relative p-4 group">
        <div className="flex items-start gap-4">
          <UserInfoLink className={"flex-shrink-0"} />
          <div className="flex flex-col space-y-1.5 w-full">
            <div className="flex items-center justify-between">
              <CardTitle>Jane Doe</CardTitle>
              <span className="text-sm text-muted-foreground">4/11/2024</span>
            </div>
            <CardDescription className="truncate max-w-[200px]">
              Hello, how are you doing? It&apos;s veronica from yoga class.
            </CardDescription>
          </div>
        </div>
        <div className="absolute transition-transform scale-0 bottom-4 right-4 group-hover:scale-100">
          <MessageCardActions />
        </div>
      </CardHeader>
    </Card>
  );
};

export default MessageCard;
