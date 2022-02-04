import useSwrFetch from "../../utils/useSwrFetch/useSwrFetch";

//using HOC pattern & render Props
export default function DataProvider2(Wrapped: any) {
  return function New(props: any) {
    const { data, error } = useSwrFetch(props.url);
    if (error) return <>"An Error has occured" </>;
    if (!data) return <>"loading"</>;
    const newProps = { ...props, data };
    return <Wrapped {...newProps} />;
  };
}
