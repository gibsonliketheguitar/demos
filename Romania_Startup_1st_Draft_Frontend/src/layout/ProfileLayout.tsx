interface IProfileLayout {
    top: JSX.Element,
    left: JSX.Element,
    right: JSX.Element,
}

export default function ProfileLayout({ top, left, right }: IProfileLayout) {
    return (
        <div className='flex flex-col items-center'>
            <header>{top}</header>
            <div className='flex flex-row justify-between items-start w-full'>
                <main>{left}</main>
                <section>{right}</section>
            </div>
        </div>
    )
}