import Content from "@/components/message-engine/panel-two/content";
import Footer from "@/components/message-engine/panel-two/footer";
import Header from "@/components/message-engine/panel-two/header";

const Wizard = () => {
  return (
    <section
      style={{
        flexGrow: 3,
      }}
      role="panel-two"
      className="flex flex-row items-start w-full min-h-screen"
    >
      <section
        role="container"
        className="flex flex-col items-center flex-grow max-h-screen"
      >
        <Header />
        <Content />
        <Footer />
      </section>
    </section>
  );
};

export default Wizard;
