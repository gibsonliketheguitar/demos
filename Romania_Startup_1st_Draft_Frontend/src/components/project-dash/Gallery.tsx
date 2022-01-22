import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft } from "@/assets/icons/ChevronLeft";
import { ChevronRight } from "@/assets/icons/ChevronRight";
import { CloseCircle } from "@/assets/icons/CloseCircle";
import { ZoomIn } from "@/assets/icons/ZoomIn";
import { ZoomOut } from "@/assets/icons/ZoomOut";

export default function Gallery() {
    return (
        <div className='mt-4 mx-4 flex flex-col items-center h-screen'>
            <GalleryNav />
            <div className='w-full flex flex-row items-center my-2.5'>
                <span className='grow flex items-start'>
                    <ActionBtn type='left' />
                </span>
                {/* { TODO loook for the design pattern to fill back ground} */}
                <Image
                    className="mt-1.5"
                    src={"https://picsum.photos/200"}
                    height={400}
                    width={320}
                    layout="fixed"
                />
                <span className='grow flex flex-row justify-end'>
                    <ActionBtn type='right' />
                </span>
            </div>
        </div>
    )
}


interface IActionBtn {
    type: 'left' | 'right',
    handleClick?: () => void
}

const GalleryNav = () => {
    return (
        <div className='w-full flex flex-row justify-between'>
            <div className='flex flex-row items-center space-x-2.5'>
                <Link href='/profile'>
                    <CloseCircle />
                </Link>
                <div>LOGO</div>
            </div>
            <div className='flex flex-row space-x-4'>
                <ZoomIn />
                <ZoomOut />
            </div>
        </div>
    )
}
const ActionBtn = ({ type, handleClick }: IActionBtn) => {
    return (
        <div className='h-8 w-8 flex justify-center items-center bg-gray-500 rounded-full hover:bg-gray-700' onClick={handleClick}>
            {type === 'left' ? <ChevronLeft /> : <ChevronRight />}
        </div>
    )
}
