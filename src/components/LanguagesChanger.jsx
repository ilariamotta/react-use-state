import { languages } from "../data/languages"

export default function LanguagesChanger() {
    return (
        <div className="container">
            <h1>Scegli il linguaggio!</h1>
            <div className="flex">
                {languages.map(({ title, id }) =>
                (<button key={id}>{title}</button>

                ))}
            </div>
            <div className="text-box">Ciao</div>
        </div>

    )
}