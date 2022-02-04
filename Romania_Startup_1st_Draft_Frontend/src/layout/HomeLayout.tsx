interface IHomeLayout {
  left: JSX.Element;
  right: JSX.Element;
}

export default function HomeLayout({ left, right }: IHomeLayout) {
  return (
    <div className="flex flex-row w-full justify-center bg-gray-200">
      <section className="basis-1/4">{left}</section>
      <main className="basis-3/4">{right}</main>
    </div>
  );
}
