import NewMessagesLink from "@/components/links/new-messages";
import SearchBar from "./search-bar";
import SettingsLink from "@/components/links/settings";
import UserInfoLink from "@/components/links/user-info";

const Header = () => {
  return (
    <section role="panel-one-header" className="grid w-full grid-cols-1 gap-4 p-2">
      <div className="flex items-center justify-between">
        <UserInfoLink />
        <div className="ml-4 space-x-2">
          <NewMessagesLink />
          <SettingsLink />
        </div>
      </div>
      <SearchBar />
    </section>
  );
};

export default Header;
