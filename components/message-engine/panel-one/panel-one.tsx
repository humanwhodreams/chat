import Header from "./header";
import VirtualList from "./virtual-list";

type Props = {};

export default function PANELONE({}: Props) {
  return (
    <aside className="flex-col gap-y-2 w-[570px] max-h-screen border-r border-border hidden lg:flex">
      <Header />
      <VirtualList />
    </aside>
  );
}
