import { ArrowDown } from "@/assets/icons/ArrowDown";
import { ArrowUp } from "@/assets/icons/ArrowUp";
import { CloseSquare } from "@/assets/icons/CloseSquare";
import Input from "@/core/Input";
import { useState } from "react";
import Checkbox from "../../core/Checkbox";

export default function SideBar() {
  return (
    <div className="pt-8 px-4 flex flex-col bg-white h-full divide-y divide-solid">
      <Service />
      <Location />
      <SectionOne />
      <SectionTwo />
    </div>
  );
}

const Service = () => {
  const [filter, setFilter] = useState<string | undefined>("");
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <span className="text-base">Caută dupa serviciu</span>
        <ClearFilter />
      </div>
      <Input value={filter} setValue={setFilter} />
    </div>
  );
};

const ClearFilter = () => {
  const handleOnClick = () => console.log("clear filter");
  return (
    <div className="flex items-center" onClick={handleOnClick}>
      <CloseSquare />
      <span className="ml-1 text-cyan-700 text-base">Sterge filtre</span>
    </div>
  );
};

const Location = () => {
  const [location, setLocation] = useState<string | undefined>("");
  return (
    <div className="mt-10 flex flex-col">
      <span className='mt-4'>
        <Input title={'Location'} value={location} setValue={setLocation} />
      </span>
    </div>
  );
};

const SectionOne = () => {
  const [isVisible, setIsVisible] = useState<Boolean>(true);
  const checkboxs = ["Companie", "Persona Fizica"];
  return (
    <div className="mt-8 flex flex-col">
      <div className="mt-4 flex flex-row justify-between items-center">
        <span className="text-base bold">Entitate</span>
        <span onClick={() => setIsVisible((state: Boolean) => !state)}>
          {isVisible ? <ArrowUp /> : <ArrowDown />}
        </span>
      </div>
      <div
        className={`my-3 flex justify-between items-center ${isVisible ? "" : "hidden"
          }`}
      >
        {checkboxs.map((cb: string, index: number) => (
          <Checkbox key={index + cb} title={cb} />
        ))}
      </div>
    </div>
  );
};

const SectionTwo = () => {
  //Look at the react visibility render avance option thing
  const [isVisible, setIsVisible] = useState<Boolean>(true);
  const checkboxs = [
    "Montaj tigla metalica",
    "Montaj tigla cu roca",
    "Montaj tigla ceramica",
    "Montaj sistem pluvial",
  ];
  return (
    <div className="mt-8 flex flex-col">
      <div className="my-4 flex flex-row justify-between items-center">
        <span className="text-base">Entitate</span>
        <span onClick={() => setIsVisible((state: Boolean) => !state)}>
          {isVisible ? <ArrowUp /> : <ArrowDown />}
        </span>
      </div>
      <div
        className={`flex flex-col space-y-2.5 justify-center items-start ${isVisible ? "" : "hidden"
          } `}
      >
        {checkboxs.map((cb: string, index: number) => (
          <Checkbox key={index + cb} title={cb} />
        ))}
      </div>
    </div>
  );
};
