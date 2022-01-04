import type { NextPage } from "next";
import List from "./stock/components/List";

const links = [
  {
    link: "/stock",
    h1: "Stock Search & Portofilo Creator",
    p: "Uses Behavior Subject and useObservable Hook",
  },
  {
    link: "/alarm",
    h1: "Alarm Clock with 2 implementation",
    p: "Custom Hook vs Subject",
  },
  {
    link: '/multiapicall',
    h1: "Calling multi APi"
  }
];

const Home: NextPage = () => {
  return (
    <main>
      <div>Experiements with RxJS and React</div>;<ul></ul>
      {links.map((l: any, index: number) => (
        <List key={index} link={l.link} h1={l.h1} p={l.p} />
      ))}
    </main>
  );
};

export default Home;
