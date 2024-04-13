import { Receiver } from "./message-bubbles/receiver";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sender } from "./message-bubbles/sender";

type Props = {};

const Content = (props: Props) => {
  return (
    <ScrollArea role="message-core" className="w-full h-screen pt-2 pr-4 scroll-m-10">
      <Receiver />
      <Sender />
      <Receiver />
      <Sender />
      <Receiver />
      <Sender />
      <Receiver />
      <Sender />
      <Receiver />
      <Sender />
      <Receiver />
      <Sender />
    </ScrollArea>
  );
};

export default Content;
