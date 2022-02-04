interface IProjectLayout {
    left: JSX.Element,
    right: JSX.Element
}
export default function ProjectLayout({ left, right }: IProjectLayout) {
    return (
        <div className='grow flex flex-row w-full'>
            <section className="basis-3/4">{left}</section>
            <section className="basis-1/4">{right}</section>
        </div>
    )
}