import { Tag } from "../profile-card/Tag"

export default function Services() {
    const tags = ['Gresie si faianta', 'Gresie si faianta', 'Gresie si faianta', 'Gresie si faianta', 'Gresie si faianta']
    return (
        <div className='flex flex-col divide-y'>
            <div className='pb-3 text-lg'>Servicci ofertie</div>
            <div className='pt-4 flex flex-row flex-wrap'>
                {tags.map((tag: string, index: number) => <Tag key={index + tag} title={tag} />)}
            </div>
        </div>
    )
}
