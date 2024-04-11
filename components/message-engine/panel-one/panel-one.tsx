import Header from "./header";
import VirtualList from "./virtual-list";

type Props = {};

export default function PANELONE({}: Props) {
  return (
    <aside className="flex flex-col gap-y-2 w-[449px] max-w-[470px] max-h-screen">
      <Header />
      <VirtualList />
    </aside>
  );
}
