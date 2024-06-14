import AddNewUser from "../panel-two/add-new-user";
import NewMessage from "@/components/links/new-messages";
import SearchBar from "./search-bar";
import SettingsLink from "@/components/links/settings";
import UserProfile from "./user-profile";

const Header = () => {
  return (
    <header className="grid w-full grid-cols-1 border-b">
      <div className="flex items-center justify-between p-2 border-b">
        <UserProfile />
        <div className="ml-4">
          <AddNewUser />
          <NewMessage />
          <SettingsLink />
        </div>
      </div>
      <div className="p-2">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
