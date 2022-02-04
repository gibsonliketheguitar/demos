import { SetStateAction } from "react"

interface IInput {
    title?: string,
    value: string | undefined,
    setValue: (value: string | undefined) => void
}

//TODO FIX THE CHECKBOX
export default function Input({ title, value, setValue }: IInput) {
    const hasTitle = Boolean(typeof title === 'string' && title.length > 0)
    return (
        <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
                <label htmlFor="exampleFormControlInput1" className={`form-label inline-block mb-2 text-gray-700 ${hasTitle ? "" : "hidden"}`}>{title}</label>
                <input
                    type="text"
                    className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput1"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </div>
    )
}