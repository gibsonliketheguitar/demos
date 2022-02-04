import CopyRight from "@/core/CopyRight";
import TopNav from "@/core/TopNav";
import { IProps } from "@/types/interface/Props";

export default function AppLayout({ children }: IProps) {
  return (
    <div className="flex flex-col h-full w-screen items-center bg-gray-200">
      <TopNav />
      {children}
      <CopyRight />
    </div>
  );
}
