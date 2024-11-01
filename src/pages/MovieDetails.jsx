import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetails() {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar os dados do filme.');
                }
                const data = await response.json();
                setMovie(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovie();
    }, [id]);

    if (isLoading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;

    return (
        <>
            {movie?.backdrop_path && (
                <img
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} // Alterado para w1280
                    alt={movie?.title}
                    className="w-full"
                />
            )}
            <div className="p-10 text-wrap bg-medium-green">
                <h1 className="font-evers text-4xl">{movie?.title || 'Título indisponível'}</h1>
                <p className="font-nexa text-2xl">{movie?.overview || 'Descrição indisponível'}</p>
            </div>
        </>
    );
}
