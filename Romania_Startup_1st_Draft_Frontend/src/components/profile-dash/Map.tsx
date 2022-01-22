import { DropPin } from "../../assets/icons/DropPin";
import ProfileCity from "../profile-card/ProfileCity";

export default function Map() {
    //https://cheatcode.co/tutorials/how-to-render-a-map-with-markers-using-google-maps-in-next-js
    return (
        <div className='mt-5 px-6 w-96 w-85 h-80 flex flex-col justify-start items-start space-y-6 bg-white outline outline-2 outline-gray-300 rounded-sm'>
            <div className='mt-6 text-lg'>State</div>
            <ProfileCity city='location' />
            <div>
                TODO insert google map
            </div>
        </div>
    )
}