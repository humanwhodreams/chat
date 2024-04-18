import Avatar from "boring-avatars";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const UserProfilePanel = () => {
  return (
    <form className="grid grid-cols-1 gap-4">
      <div className="space-y-3">
        <Label>Profile picture</Label>
        <div className="flex items-center space-x-2">
          <Avatar
            size={80}
            name={"Enoabasi Essien"}
            variant="bauhaus"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
          <Button type="button" variant={"outline"}>
            change profile picture
          </Button>
        </div>
      </div>
      <div>
        <Label htmlFor="displayName">Display name</Label>
        <Input
          id="displayName"
          value={"0xEnoabasi"}
          placeholder="Enter display name..."
          className="w-full text-xl border-none"
        />
      </div>
      <div>
        <Label htmlFor="about">About</Label>
        <Textarea
          id="about"
          value={"Building user interfaces that contribute to society."}
          placeholder="Enter about..."
          className="w-full text-lg border-none"
        />
      </div>
      <div className="mt-6">
        <Button size={"sm"}>Save changes</Button>
      </div>
    </form>
  );
};

export default UserProfilePanel;
