import { Clipboard } from "@/assets/icons/Clipboard"
import { Euro } from "@/assets/icons/Euro"
import { People } from "@/assets/icons/People"

export default function Information() {
    const arr = [
        { icon: <Clipboard />, title: 'experience', content: '5ani' },
        { icon: <People />, title: 'employee', content: '1-3 meseriasi' },
        { icon: <Euro />, title: 'Pret constare', content: 'Daa' }
    ]
    return (
        <div className='w-full flex flex-col divide-y'>
            <div className='pb-3 text-lg'>informatii</div>
            <div className='pt-4 flex flex-row justify-between'>
                {arr.map((info: any, index: number) => <InfoCard key={index} {...info} />)}
            </div>
        </div>
    )
}

interface IInfoCard {
    icon: JSX.Element,
    title: string,
    content: string,
}
const InfoCard = ({ icon, title, content }: IInfoCard) => {
    return (
        <div className='flex flex-row space-x-4 items-center'>
            {icon}
            <div className='flex flex-col space-y-1'
            >
                <div>{title}</div>
                <div>{content}</div>
            </div>
        </div>
    )
}