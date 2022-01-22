import Button from "./Button";

export default function TopNav() {
  return (
    <div className="border-b-2 py-3 w-full flex flex-row h-16 justify-between items-center bg-white">
      <HomeAction />
      <Authentication />
    </div>
  );
}

const HomeAction = () => {
  return (
    <div className="ml-4 flex space-x-4">
      <span className="h-8 w-8">Logo</span>
      <span>MULTIDOM</span>
      <span>Mesteri</span>
    </div>
  );
};

const Authentication = () => {
  return (
    <div className="mr-8 flex space-x-6">
      <Button title="Autentificare" variant="text" />
      <Button title="Inregistrare" />
    </div>
  );
};
