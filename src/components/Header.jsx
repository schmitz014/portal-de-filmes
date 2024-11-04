import { NavLink } from "react-router-dom";
import { useState } from "react";
import Login from "./Login.jsx";

export default function Header() {

    const [isLogged, setIsLogged] = useState(false)

    const handleLogin = () => {
        setIsLogged(!isLogged)
    }

    return (
        <>
            <header className="flex justify-around bg-gradient-custom2 items-center">
                <div className="flex items-center pl-8 gap-10 hover:scale-110 transition-all">
                    <img className="w-16" src="/movie.svg" alt="icon movie" />
                    <NavLink to="/"><h1 className="font-evers text-4xl text-gray-custom3">Portal Filmes</h1></NavLink>
                </div>
                <nav>
                    <ul className="font-nexa text-4xl flex">
                        <li className="hover:font-bold text-gray-custom3 transition-all m-10"><NavLink to="/">Home</NavLink></li>
                        <li className="hover:font-bold text-gray-custom3 transition-all m-10"><NavLink to="/movies">Filmes</NavLink></li>
                        <li className="hover:font-bold text-gray-custom3 transition-all m-10"><NavLink to="/genres">Gênero</NavLink></li>
                        {isLogged && <li className="hover:font-bold text-gray-custom3 transition-all m-10"><NavLink to="/favorites">Favoritos</NavLink></li>}
                    </ul>
                </nav>
                <Login isLogged={isLogged} handleLogin={handleLogin} />
            </header>
        </>
    )
}