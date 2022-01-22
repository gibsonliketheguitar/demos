import Button from "../../core/Button";
import DisplayStats from "./Main.DisplayStats";
import Header from "./Main.Header";
import ProfileList from "./Main.ProfileList";

export default function Main() {
  let profiles = [
    {
      src: "https://picsum.photos/200",
      name: "Mihai Emilian Stoica",
      title: "Zugrav",
      city: "Bucuresti, Sector 2",
      tags: [
        "Gresie si faianta",
        "Reparatii instalatii",
        "Zugravel",
        "Parchet",
        "Instalatii",
      ],
    },
    {
      src: "https://picsum.photos/200",
      name: "Mihai Emilian Stoica",
      title: "Zugrav",
      city: "Bucuresti, Sector 2",
      tags: [
        "Gresie si faianta",
        "Reparatii instalatii",
        "Zugravel",
        "Parchet",
        "Instalatii",
      ],
    },
    {
      src: "https://picsum.photos/200",
      name: "Mihai Emilian Stoica",
      title: "Zugrav",
      city: "Bucuresti, Sector 2",
      tags: [
        "Gresie si faianta",
        "Reparatii instalatii",
        "Zugravel",
        "Parchet",
        "Instalatii",
      ],
    },
    {
      src: "https://picsum.photos/200",
      name: "Mihai Emilian Stoica",
      title: "Zugrav",
      city: "Bucuresti, Sector 2",
      tags: [
        "Gresie si faianta",
        "Reparatii instalatii",
        "Zugravel",
        "Parchet",
        "Instalatii",
      ],
    },
    {
      src: "https://picsum.photos/200",
      name: "Mihai Emilian Stoica",
      title: "Zugrav",
      city: "Bucuresti, Sector 2",
      tags: [
        "Gresie si faianta",
        "Reparatii instalatii",
        "Zugravel",
        "Parchet",
        "Instalatii",
      ],
    },
    {
      src: "https://picsum.photos/200",
      name: "Mihai Emilian Stoica",
      title: "Zugrav",
      city: "Bucuresti, Sector 2",
      tags: [
        "Gresie si faianta",
        "Reparatii instalatii",
        "Zugravel",
        "Parchet",
        "Instalatii",
      ],
    },
  ];

  const profileCount = profiles.length;
  const totalProfile = 432;
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <Header count={profileCount} />
        <ProfileList data={profiles} />
        <DisplayStats count={totalProfile} />
        <Button
          title="Încarcă încă 20 de meșteri"
          variant="outlined"
          width="w-64"
        />
      </div>
    </main>
  );
}
