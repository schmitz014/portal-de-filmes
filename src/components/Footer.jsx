import { FaGithub } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

export default function Footer() { 
    return (
        <>
            <footer>
                <div className="flex item-center justify-center gap-2">
                    <img className="w-8" src="/movie.svg" alt="icon movie" />
                    <h1 className="font-evers text-lg text-nowrap">Portal Filmes</h1>
                </div>
                <div>
                    <p className="font-nexa text-center text-sm mt-2">Desenvolvido por <a href="https://github.com/schmitz014" target="_blank" rel="noreferrer" className="hover:text-gray-custom1">Pedro Sécio</a></p>
                    <div className="flex items-center justify-center gap-5 mt-1 text-2xl ">
                        <a href="https://github.com/schmitz014" className="hover:text-gray-custom1"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/pedro-schmitz014/" className="hover:text-gray-custom1"><FaLinkedinIn /></a>
                        <a href="https://www.instagram.com/madebyschmitz/" className="hover:text-gray-custom1"><FaInstagram /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}
