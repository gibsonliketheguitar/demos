import React from "react";
import useSwrFetch from "../../utils/useSwrFetch/useSwrFetch";
import Main from "./Main";

const Child = (prop: any) => {
  return prop.renderProp();
};

export default function DataProvider3(props: any) {
  const { data, error } = useSwrFetch(props.url);
  if (error) return <h1>"An Error has occured" </h1>;
  if (!data) return <h1>"loading"</h1>;
  return <Child renderProp={() => <Main data={data} />} />;
}
