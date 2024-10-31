import { FaGithub } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

export default function Footer() { 
    return (
        <>
            <footer className="flex items-center mt-10 bg-gradient-custom2 p-10 justify-between">
                <div className="flex item-center gap-2 items-center">
                    <img className="w-24" src="/movie.svg" alt="icon movie" />
                    <h1 className="font-evers text-4xl">Portal Filmes</h1>
                </div>
                <div>
                    <p className="font-nexa text-4xl mt-2">Desenvolvido por <a href="https://github.com/schmitz014" target="_blank" rel="noreferrer" className="hover:font-bold transition-all">Pedro Sécio</a></p>
                    <div className="flex items-center justify-center gap-5 mt-5 text-4xl ">
                        <a href="https://github.com/schmitz014" className="hover:scale-110 transition-all"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/pedro-schmitz014/" className="hover:scale-110 transition-all"><FaLinkedinIn /></a>
                        <a href="https://www.instagram.com/madebyschmitz/" className="hover:scale-110 transition-all"><FaInstagram /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}
