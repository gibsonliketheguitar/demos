import Image from 'next/image'
import Button from '@/core/Button'
import ProfileCity from '../profile-card/ProfileCity';
import { Phone } from '@/assets/icons/Phone';
import { ArrowLeft } from '@/assets/icons/ArrowLeft';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <GoHome />
      <div className="w-245 h-52 flex flex-row w-screen justify-start items-center bg-white outline outline-2 outline-gray-300 rounded-sm">
        <span className='ml-10 mr-8 flex flex-row justify-center'>
          <Image
            className='rounded-full'
            src='https://picsum.photos/200'
            height={124}
            width={124}
            layout='fixed'
          />
        </span>
        <div className="flex flex-col space-y-2">
          <div className="text-lg">Name</div>
          <div className="text-base">Title</div>
          <ProfileCity city={'location'} />
        </div>
        <div className="h-full pb-10 pr-10 grow flex flex-row space-x-5 justify-end items-end">
          <Button variant="outlined" title="Apeleaza" height="h-11" width='w-52' icon={<Phone />} />
          <Button title="Solicita oferta" height="h-11" width='w-52' />
        </div>
      </div>
    </>
  );
}

const GoHome = () => {
  return (
    <Link href='/'>
      <div className='flex my-7 space-x-4 items-center'>
        <ArrowLeft />
        <span className='text-base'>Înapoi</span>
      </div>
    </Link>
  )
}
