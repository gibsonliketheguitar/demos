import type { NextPage } from "next";

import Button from "@/core/Button/_Button";
import { default as Layout } from "@/layout/Home";
import Table from "src/components/Table";

const Home: NextPage = () => {

  return (
    <Layout>
      <Table />
    </Layout>
  );
};

export default Home;
