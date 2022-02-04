import useSwrFetch from "../../utils/useSwrFetch/useSwrFetch";

export default function DataProvider4(prop: any) {
  const { data, error } = useSwrFetch(prop.url);
  if (error) return <>"An Error has occured" </>;
  if (!data) return <>"loading"</>;
  return prop.render({ data });
}
