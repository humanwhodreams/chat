import { ArrowLeft } from "lucide-react";
import Avatar from "boring-avatars";
import { Button } from "@/components/ui/button";
import ContactInfo from "./contact-info";

const Header = () => {
  return (
    <header className="grid w-full grid-cols-1 border-b bg-muted">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <div className="block lg:hidden ">
            <Button variant={"ghost"} size={"icon"} className="mr-4">
              <ArrowLeft size={20} />
            </Button>
          </div>

          <Avatar
            size={40}
            name={"Enoabasi Essien"}
            variant="bauhaus"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
          <p className="ml-4 font-medium">Enoabasi Essien</p>
        </div>

        <ContactInfo />
      </div>
    </header>
  );
};

export default Header;
