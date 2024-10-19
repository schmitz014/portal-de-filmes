import { TbError404Off } from "react-icons/tb"

export default function PageNotFound() {
    return (
        <>
        <div className="flex flex-col justify-center items-center ml-48 gap-10 text-4xl font-evers">
            <h1 className="text-9xl">
                <TbError404Off />
            </h1>
            <h1>
                Erro 404
            </h1>
            <h1>
                Página não encontrada
            </h1>
        </div>
        </>
    )
}