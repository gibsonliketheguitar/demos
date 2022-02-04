import useSwrFetch from "../../utils/useSwrFetch/useSwrFetch";

export default function DataProvider5(props: any) {
  const { data, error } = useSwrFetch(props.url);
  if (error) return <>"An Error has occured" </>;
  if (!data) return <>"loading"</>;
  const C = props.component;
  return <C data={data} />;
}
