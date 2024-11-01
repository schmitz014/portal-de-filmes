import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function GenreMovies() {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMoviesByGenre = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${id}&language=pt-BR`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar filmes do gênero.');
                }
                const data = await response.json();
                setMovies(data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMoviesByGenre();
    }, [id]);

    if (isLoading) return <p>Carregando filmes...</p>;
    if (error) return <p>Erro: {error}</p>;

    return (
        <div>
            <h1 className="text-4xl font-evers my-4">Filmes do Gênero</h1>
            <div className="flex flex-wrap gap-10 justify-center">
                {movies.map(movie => (
                    <div key={movie.id} className="bg-green-600 p-6 rounded-md w-64 shadow-md hover:scale-105 transition-all">
                        <Link to={`/movie/${movie.id}`}>
                            {movie.poster_path ? (
                                <img 
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                    alt={movie.title} 
                                    className="rounded-md mb-2" 
                                />
                            ) : (                       
                                <div className="w-40 h-60 bg-green-600 rounded-md mb-2"></div>)}
                            <h2 className="font-nexa font-bold text-2xl">{movie.title || 'Título indisponível'}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
