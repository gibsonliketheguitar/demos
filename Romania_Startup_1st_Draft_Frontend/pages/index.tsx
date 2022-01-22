import type { NextPage } from "next";
import HomeLayout from "../src/layout/HomeLayout";
import { default as Main } from "../src/components/home-dash/Main";
import { default as SideBar } from "../src/components/home-dash/SideBar";

const Home: NextPage = () => {
  return <HomeLayout left={<SideBar />} right={<Main />} />;
};

export default Home;
