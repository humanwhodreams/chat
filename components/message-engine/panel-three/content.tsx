import ChatSettings from "./chat-settings";
import ContactBio from "./contact-bio";
import ContactDestructiveOptions from "./contact-destructive-options";
import ContactInfo from "./contact-info";
import SharedMedia from "./shared-media";

const Content = () => {
  return (
    <div className="relative flex flex-col flex-1 w-full mt-4">
      <div className="grid grid-cols-1 gap-4">
        <ContactInfo />
        <ContactBio />
        <div role="contact-options" className="grid grid-cols-1 space-y-1">
          <h2 className="text-lg font-semibold text-muted-foreground">
            Options
          </h2>
          <ChatSettings />
          <SharedMedia />
        </div>
        <ContactDestructiveOptions />
      </div>
    </div>
  );
};

export default Content;
