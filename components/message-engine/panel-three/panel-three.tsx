import { cn } from "@/lib/utils";
import { type ClassValue } from "clsx";
import Header from "./header";
import Content from "./content";

type Props = {
  className?: ClassValue;
};

const PANELTHREE = (props: Props) => {
  return (
    <div
      className={cn(
        props.className,
        "flex flex-col items-center justify-between h-screen"
      )}
    >
      <Header />
      <Content />
    </div>
  );
};

export default PANELTHREE;
