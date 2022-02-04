import Main from "../../src/components/RenderProps/Main";
import DataProvider from "../../src/components/RenderProps/DataProvider";
import { default as ProvideData } from "../../src/components/RenderProps/DataProvider2";
import DataProvider3 from "../../src/components/RenderProps/DataProvider3";
import DataProvider4 from "../../src/components/RenderProps/DataProvider4";
import DataProvider5 from "../../src/components/RenderProps/DataProvider5";

export default function RenderProps() {
  const MainComponent2 = ProvideData(Main);
  const url = "https://api.github.com/repos/rowyio/rowy";
  return (
    <div>
      <DataProvider>{(data: any) => <Main {...data} />}</DataProvider>
      <MainComponent2 url={url} />
      <DataProvider3 url={url} />
      <DataProvider4 url={url} render={(data: any) => <Main {...data} />} />
      <DataProvider5 url={url} component={Main} />
    </div>
  );
}
