import useSwrFetch from "../../utils/useSwrFetch/useSwrFetch";

//Render Props & passing data to props.childen
export default function MainDataProvider({ children }: any) {
  const url = "https://api.github.com/repos/rowyio/rowy";
  const { data, error } = useSwrFetch(url);
  if (error) return <>"An Error has occured" </>;
  if (!data) return <>"loading"</>;
  return <>{children({ data })}</>;
}
