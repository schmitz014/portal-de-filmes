import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header>
                <div className="flex item-center justify-center gap-5 mb-20 hover:scale-110 transition-all">
                    <img className="w-16" src="/movie.svg" alt="icon movie" />
                    <NavLink to="/"><h1 className="font-evers text-2xl hover:text-gray-500">Portal Filmes</h1></NavLink>
                </div>
                <nav className="text-center justify-center items-center flex">
                    <ul className="font-nexa text-4xl">
                        <li className="hover:scale-110 hover:text-gray-500 transition-all m-10"><NavLink to="/">Home</NavLink></li>
                        <li className="hover:scale-110 hover:text-gray-500 transition-all m-10"><NavLink to="/">Filmes</NavLink></li>
                        <li className="hover:scale-110 hover:text-gray-500 transition-all m-10"><NavLink to="/">Gênero</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}