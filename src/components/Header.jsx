import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="flex justify-between bg-gradient-custom2 items-center">
                <div className="flex items-center pl-8 gap-10 hover:scale-110 transition-all">
                    <img className="w-16" src="/movie.svg" alt="icon movie" />
                    <NavLink to="/"><h1 className="font-evers text-5xl text-gray-custom3">Portal Filmes</h1></NavLink>
                </div>
                <nav>
                    <ul className="font-nexa text-4xl flex">
                        <li className="hover:scale-110 hover:font-bold text-gray-custom3 transition-all m-10"><NavLink to="/">Home</NavLink></li>
                        <li className="hover:scale-110 hover:font-bold text-gray-custom3 transition-all m-10"><NavLink to="/movies">Filmes</NavLink></li>
                        <li className="hover:scale-110 hover:font-bold text-gray-custom3 transition-all m-10"><NavLink to="/genres">Gênero</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}