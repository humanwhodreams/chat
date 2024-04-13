import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type ClassValue } from "clsx";
import { X } from "lucide-react";

type Props = {
  className?: ClassValue;
};

const PANELTHREE = (props: Props) => {
  return (
    <div className={cn(props.className, "min-h-screen")}>
      <div className="flex flex-col items-center justify-between h-screen gap-4 p-2">
        <header className="w-full px-4 py-3 rounded-md shadow-sm bg-background">
          <div className="flex flex-row items-center space-x-2">
            <Button variant={"ghost"} size={"icon"}>
              <X className="flex-shrink-0 text-muted-foreground" />
            </Button>
            <h1 className="font-semibold text-muted-foreground">
              Contact info
            </h1>
          </div>
        </header>
        <div className="flex-grow w-full p-4 rounded-md shadow-sm bg-background">
          Content
        </div>
        <footer className="w-full p-4 rounded-md shadow-sm bg-background">
          footer
        </footer>
      </div>
    </div>
  );
};

export default PANELTHREE;
