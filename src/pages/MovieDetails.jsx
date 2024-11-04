import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetails() {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);
    const [credits, setCredits] = useState([]);
    const [trailer, setTrailer] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            setIsLoading(true);
            setError(null);
            try {
                // Fetch movie details
                const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`);
                if (!movieResponse.ok) throw new Error('Erro ao buscar os dados do filme.');
                const movieData = await movieResponse.json();

                // Fetch credits
                const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`);
                if (!creditsResponse.ok) throw new Error('Erro ao buscar os dados do elenco.');
                const creditsData = await creditsResponse.json();

                // Fetch trailer
                const trailerResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`);
                if (!trailerResponse.ok) throw new Error('Erro ao buscar o trailer.');
                const trailerData = await trailerResponse.json();
                const officialTrailer = trailerData.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');

                setMovie(movieData);
                setCredits(creditsData.cast.slice(0, 5)); // Exibe os primeiros 5 membros do elenco
                setTrailer(officialTrailer);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (isLoading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;

    return (
        <>
            {movie?.backdrop_path && (
                <img
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie?.title}
                    className="w-full"
                />
            )}
            <div className="p-10 text-wrap">
                <h1 className="font-evers text-4xl">{movie?.title || 'Título indisponível'}</h1>
                <p className="font-nexa text-2xl">{movie?.overview || 'Descrição indisponível'}</p>
                <p className="font-nexa text-xl">Avaliação: {movie?.vote_average || 'N/A'}</p>
                <p className="font-nexa text-xl">Data de lançamento: {movie?.release_date || 'Indisponível'}</p>

                <h2 className="font-evers text-3xl mt-6">Elenco</h2>
                <ul>
                    {credits.map(actor => (
                        <li key={actor.id} className="font-nexa text-xl">
                            {actor.name} como {actor.character}
                        </li>
                    ))}
                </ul>

                {trailer && (
                    <div className="mt-6">
                        <h2 className="font-evers text-3xl">Trailer Oficial</h2>
                        <iframe
                            width="100%"
                            height="400"
                            src={`https://www.youtube.com/embed/${trailer.key}`}
                            title="Trailer Oficial"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div>
        </>
    );
}
