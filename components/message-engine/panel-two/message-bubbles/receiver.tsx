import { CheckCheck } from "lucide-react";
import React from "react";

type Props = {};

const Receiver = (props: Props) => {
  return (
    <div className="flex max-w-lg gap-x-2 sm:gap-x-4 me-11">
      <span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
        <span className="text-sm font-medium leading-none text-white">EE</span>
      </span>

      <div>
        <div className="p-4 space-y-3 border bg-background border-border rounded-2xl">
          <p className="max-w-xl text-sm text-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatem repellendus asperiores laudantium nisi blanditiis corporis eaque, accusantium voluptatum delectus, incidunt sequi nihil natus, totam ab! Aut iste magni dolorum!</p>
        </div>

        <span className="mt-1.5 flex items-center gap-x-1 text-xs text-muted-foreground">
          <CheckCheck className="flex-shrink-0 size-3" />
          Sent
        </span>
      </div>
    </div>
  );
};

export { Receiver };
