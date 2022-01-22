import Button from "../../core/Button";
import Description from "./Main.Description";
import Information from "./Main.Info";
import Portfolio from "./Main.Portfolio";
import Services from "./Main.Services";

export default function Main() {
  return (
    <div className="mt-5 p-10 w-155 flex flex-col space-y-12 items-center bg-white outline outline-2 outline-gray-300 rounded-sm">
      <Information />
      <Description />
      <Services />
      <Portfolio />
      <Button variant='outlined' title="Încarcă încă 6 lucrari" width="w-56" />
    </div>
  );
}
