import IProfileCard from "../../types/interface/ProfileCard";
import { ProfileCard } from "../profile-card/ProfileCard";

export default function ProfileList({ data }: any) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {data.map((profile: IProfileCard, index: number) => (
        <ProfileCard key={index} {...profile} />
      ))}
    </div>
  );
}
