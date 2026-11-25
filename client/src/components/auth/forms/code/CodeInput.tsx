import type {Dispatch, SetStateAction} from "react";

export default function CodeInput({value, setValue}: {value: string, setValue: Dispatch<SetStateAction<string>>}) {
    return (
        <input value={value} onChange={(e) => setValue(e.target.value)}></input>
    )
}