import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";

export default function Home() {
    const [filmesPopulares, setFilmesPopulares] = useState([]);
    const [filmesTrending, setFilmesTrending] = useState([]);
    const [filmesUpcoming, setFilmesUpcoming] = useState([]);

    const fetchMovies = async () => {
        try {
            // Juntando todos os fetches
            const [respostaPopulares, respostaTrending, respostaUpcoming] = await Promise.all([
                fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`),
                fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`),
                fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`)
            ]);

            // Convertendo em JSON
            const popularData = await respostaPopulares.json();
            const trendingData = await respostaTrending.json();
            const upcomingData = await respostaUpcoming.json();

            // Atualizar o estado apenas se os dados tiverem a estrutura correta
            setFilmesPopulares(popularData.results || []);
            setFilmesTrending(trendingData.results || []);
            setFilmesUpcoming(upcomingData.results || []);
        } catch (error) {
            console.error("Failed to fetch movies:", error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div className="space-y-5">
            <CardContainer title="Populares">
              {
                filmesPopulares?.map(filme => (
                    <MovieCard key={filme.id} {...filme}/>
                ))
              }
            </CardContainer>

            <CardContainer title="Trending">
                {
                    filmesTrending?.map(filme => (
                        <MovieCard key={filme.id} {...filme} />
                    ))
                }
            </CardContainer>

            <CardContainer title="Próximos Lançamentos">
                {
                    filmesUpcoming?.map(filme => (
                        <MovieCard key={filme.id} {...filme} />
                    ))
                }
            </CardContainer>
        </div>
    );
}
