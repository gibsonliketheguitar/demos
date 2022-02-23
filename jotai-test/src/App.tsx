import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import RenderCheck, { Stats, SvgRoot } from "./components/SvgDots";

function App() {
  return (
    <div className="App">
      <span>Render check Root Level {RenderCheck()}</span>
      <Counter1 />
      <Counter2 />
      <SvgRoot />
      <Stats />
    </div>
  );
}

export default App;
