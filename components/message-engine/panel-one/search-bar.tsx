import { ListFilter, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <form>
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="flex flex-row items-center w-full">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            id="simple-search"
            type="search"
            placeholder="Search user and messages..."
            className="w-full pl-8"
          />
        </div>
        <Button
          type="button"
          variant={"ghost"}
          size={"icon"}
          className="ml-2"
          disabled
        >
          <ListFilter size={20} />
          <span className="sr-only">filter chat list</span>
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
