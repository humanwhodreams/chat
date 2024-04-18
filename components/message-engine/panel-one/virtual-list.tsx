import { Lock } from "lucide-react";
import MessageCard from "./message-card/message-card";
import { ScrollArea } from "@/components/ui/scroll-area";

const VirtualList = () => {
  return (
    <ScrollArea className="h-screen scroll-m-10">
      {[
        {
          name: "Enoabasi Essien",
          date: "14/2/2024",
          message: "Hello, we met at the gym earlier. Nice to meet you.",
        },
        // {
        //   name: "Jonathan Amigo",
        //   date: "28/10/2023",
        //   message: "Yo, you forgot your bag at my place. You can come take it tomorrow I am not at home at the moment.",
        // },
        {
          name: "Faith - Back Seat Bandit, 3am Throat Goat",
          date: "Yesterday",
          message: "Heyyy essien, what you up to?",
        },
        // {
        //   name: "Brandon Felipe",
        //   date: "Today",
        //   message: "Bro there is football today you should pull up.",
        // },
      ].map((item, i) => (
        <MessageCard
          key={i}
          name={item.name}
          date={item.date}
          message={item.message}
        />
      ))}
      <Status />
    </ScrollArea>
  );
};

function Status() {
  return (
    <p className="flex items-center justify-center w-full py-2 text-xs font-medium text-muted-foreground">
      <Lock className="mr-2 size-4" />
      messages are<span className="ml-1 text-green-500">end&ndash;to&ndash;end encrypted</span>
    </p>
  );
}

export default VirtualList;
