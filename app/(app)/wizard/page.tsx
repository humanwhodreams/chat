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
    >
      <section
        role="container"
        className="flex flex-col items-center max-h-screen p-2"
      >
        <Header />
        <Content />
        <Footer />
      </section>
    </section>
  );
};

export default Wizard;
