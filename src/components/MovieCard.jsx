import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import classNames from 'classnames';

export default function MovieCard({ id, title, poster_path, backdrop_path }) {
    const { handleFavorite, isFavorite } = useContext(FavoritesContext);
    const { isLogged } = useAuth();
    const favoriteStatus = isFavorite(id);

    return (
        <div className="relative w-80 h-96 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all">
            <img
                src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
                alt={`${title} backdrop`}
                className="absolute top-0 left-0 w-full h-full object-cover z-0 filter brightness-50"
            />

            <img
                src={`https://image.tmdb.org/t/p/w154${poster_path}`}
                alt={`${title} poster`}
                className="relative z-10 w-36 mx-auto my-4 rounded-lg shadow-md"
            />

            <div className="relative z-20 text-center text-light-color">
                <h1 className="font-evers text-xl">{title}</h1>

                {isLogged && (
                    <button 
                        onClick={() => handleFavorite({ id, title, poster_path, backdrop_path })}
                        className={classNames(
                            "font-nexa text-md px-4 py-2 rounded-full transition-all",
                            {
                                'bg-red-600 text-white': favoriteStatus,
                                'bg-gray-300 text-black': !favoriteStatus,
                            }
                        )}
                    >
                        {favoriteStatus ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
                    </button>
                )}

                <div className="mt-4">
                    <Link to={`/movie/${id}`} className="font-nexa text-md">
                        <h3 className="hover:scale-105 hover:font-bold hover:text-light-green transition-all">
                            Saber mais
                        </h3>
                    </Link>
                </div>
            </div>
        </div>
    );
}
