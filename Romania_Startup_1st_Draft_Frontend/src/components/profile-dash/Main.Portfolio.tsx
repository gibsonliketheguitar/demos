import Image from 'next/image'
import Link from 'next/link'

export default function Portfolio() {
    const arr = [1, 2, 3, 4, 5, 6,]
    return (
        <div className='flex flex-col divide-y'>
            <div className='pb-3 text-lg'>Portofoliu</div>
            <div className='pt-4 grid grid-cols-3 gap-6'>
                {arr.map((a: any, index: number) => <PortfolioImage key={index} />)}
            </div>
        </div>
    )
}

const PortfolioImage = () => {
    return (
        <Link href='/project'>
            <Image
                className='rounded'
                src='https://picsum.photos/200'
                height={169}
                width={169}
            />
        </Link>
    )
}