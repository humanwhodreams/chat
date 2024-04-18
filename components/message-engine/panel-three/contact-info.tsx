import Avatar from "boring-avatars";

const ContactInfo = () => {
  return (
    <div className="flex flex-row items-center">
      <Avatar
        size={70}
        name={"Enoabasi Essien"}
        variant="bauhaus"
        colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
      />
      <div className="ml-4 leading-tight">
        <p className="font-medium">Enoabasi Essien</p>
        <span className="text-sm text-muted-foreground">@from_enoabasi</span>
      </div>
    </div>
  );
};

export default ContactInfo;
