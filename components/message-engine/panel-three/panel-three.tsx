import { cn } from "@/lib/utils";
import { type ClassValue } from "clsx";
import Header from "./header";
import Content from "./content";

type Props = {
  className?: ClassValue;
};

const PANELTHREE = (props: Props) => {
  return (
    <div className={cn(props.className, "min-h-screen")}>
      <div className="flex flex-col items-center justify-between h-screen gap-4 p-2">
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default PANELTHREE;
