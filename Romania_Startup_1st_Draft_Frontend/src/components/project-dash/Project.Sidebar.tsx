import Image from 'next/image'
import { DropPin } from "@/assets/icons/DropPin"
import Button from "@/core/Button"
import { EditPencil } from '@/assets/icons/EditPencil'
import { TrashCan } from '@/assets/icons/Trashcan'

const tempData = {
    title: 'title of the project max 160 characters',
    summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}

export default function Sidebar() {
    return (
        <div className='px-6 flex flex-col space-y-5 h-full bg-white'>
            <ActionButtons />
            <ProfileCard />
            <Summary title={tempData.title} summary={tempData.summary} />
        </div >
    )
}

const ActionButtons = () => {
    return (
        <div className='flex justify-end'>
            <Button variant='text' title='Sterge' icon={<TrashCan />} />
            <Button variant='text' title='Editeaza' icon={<EditPencil />} />
        </div>
    )
}

const ProfileCard = () => {
    return (
        <div className="pb-5 flex flex-row space-x-4 justify-start items-center bg-white rounded-sm text-center border-gray-200 border-b-2">
            <Image
                className="rounded-full "
                src={"https://picsum.photos/200"}
                height={48}
                width={48}
                layout="fixed"
            />
            <div className='flex flex-col items-start'>
                <div className="text-base">{'Name'}</div>
                <div className="text-sm">{'title'}</div>
                <ProfileCity city={'location'} />
            </div>
        </div>
    )
}

const ProfileCity = ({ city }: any) => {
    return (
        <div className="flex justify-center items-center">
            <DropPin />
            <div className="ml-2.5 text-sm">{city}</div>
        </div>
    );
};

const Summary = ({ title = '', summary = '' }) => {
    return (
        <div className="flex flex-col">
            <h2 className='mb-2 text-sm text-bold font-semibold'>{title}</h2>
            <p className='text-sm'>{summary}</p>
        </div>
    )
}