import { useContext, useEffect, useState } from 'react';
import { FavoritesContext } from '../components/FavoritesContext';
import MovieCard from '../components/MovieCard';

export default function Favorites() {
    const { favorites, handleFavorite, isFavorite } = useContext(FavoritesContext);
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFavoriteMovies = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const moviePromises = favorites.map(movie =>
                    fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`)
                        .then(response => {
                            if (!response.ok) throw new Error('Erro ao buscar detalhes do filme.');
                            return response.json();
                        })
                );

                const movies = await Promise.all(moviePromises);
                setFavoriteMovies(movies);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        if (favorites.length > 0) {
            fetchFavoriteMovies();
        } else {
            setFavoriteMovies([]);
            setIsLoading(false);
        }
    }, [favorites]);

    if (isLoading) return <p>Carregando favoritos...</p>;
    if (error) return <p>Erro: {error}</p>;
    if (favorites.length === 0) return <p>Você ainda não possui favoritos 😞</p>;

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-xl font-bold mb-4">Seus Favoritos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {favoriteMovies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        {...movie}
                        handleFavorite={handleFavorite}
                        isFavorite={isFavorite(movie.id)}
                    />
                ))}
            </div>
        </div>
    );
}
