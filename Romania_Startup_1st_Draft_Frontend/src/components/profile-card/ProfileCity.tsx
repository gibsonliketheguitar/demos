import { DropPin } from "@/assets/icons/DropPin";

interface ICity {
    city: string
}
export default function ProfileCity({ city }: ICity) {
    return (
        <div className="flex justify-center items-center">
            <DropPin />
            <div className="ml-2.5 text-sm">{city}</div>
        </div>
    );
};