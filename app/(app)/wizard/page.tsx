import Content from "@/components/message-engine/panel-two/content";
import Footer from "@/components/message-engine/panel-two/footer";
import Header from "@/components/message-engine/panel-two/header";
import PANELTHREE from "@/components/message-engine/panel-three/panel-three";

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
        className="flex flex-col items-center flex-grow max-h-screen p-2"
      >
        <Header />
        <Content />
        <Footer />
      </section>
      <PANELTHREE className="w-96 hidden"/>
    </section>
  );
};

export default Wizard;
