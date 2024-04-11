import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <section role="panel-one-search">
      <form>
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search user and messages..."
            className="w-full pl-8 bg-background"
          />
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
