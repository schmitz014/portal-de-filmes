import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"

export default function MovieListPage() {

    const [search, setSearch] = useState("")
    const [filmes, setFilmes] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR&sort_by=popularity.desc&page=1`)
            .then(response => response.json())
            .then(data => setFilmes(data.results))
            .catch(error => console.error(error))
            .finally(() => setIsLoading(false));
    }, []);

    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }

    const filmesFiltrados = filmes.filter(filme => filme.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="">
            <h1 className="font-evers text-center m-5 text-4xl">Procure o filme que deseja</h1>
            <div className="m-10">
                <h2 className="font-evers text-2xl mb-4">Veja o catálogo completo de filmes</h2>
                <input
                    className="text-gray-custom3 rounded-lg pl-5 font-nexa font-bold text-3xl w-96 h-14 bg-white transition-all"
                    type="text"
                    placeholder="Digite aqui..."
                    id="search"
                    value={search}
                    onChange={handleSearch}
                />
                <section className="flex flex-wrap justify-between gap-5 m-10">
                    {
                        isLoading ? <p>Carregando...</p> :

                            filmesFiltrados.length > 0 ?

                                filmesFiltrados
                                    .map(filme => (
                                        <MovieCard key={filme.id} {...filme} />
                                    ))
                                :
                                <p> Filme não encontrado</p>
                    }
                </section>
            </div>
        </div>
    )
}
