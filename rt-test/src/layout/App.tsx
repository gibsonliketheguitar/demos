import { ILayout } from "./ILayout";

export default function AppLayout({ children }: ILayout) {
  return (
    <div className="flex flex-col h-full w-screen items-center bg-gray-200">
      {children}
    </div>
  );
}
