import { useState } from "react"
import { languages } from "../data/languages"

export default function LanguagesChanger() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <div className="container">
            <h1>Scegli il linguaggio!</h1>
            <div className="flex">
                {languages.map(({ title}, index) =>
                (<button key={index} onClick={() => setSelectedIndex(index)} className={selectedIndex === index ? "active" : ""}>{title}</button>

                ))}
            </div>
            <div className="text-box">{languages[selectedIndex].description}</div>
        </div>

    )
}