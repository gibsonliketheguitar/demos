import { ILayout } from "./ILayout";

export default function Home({ children }: ILayout) {
  return (
    <div className="flex flex-row w-full justify-center bg-gray-200">
      <section className="basis-1/4">{children}</section>
    </div>
  );
}
