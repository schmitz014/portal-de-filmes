import { Link } from "react-router-dom";

export default function MovieCard({ id, title, poster_path, backdrop_path }) {
    return (
        <div className="relative w-72 p-2 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all">
            <img
                src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
                alt={`${title} backdrop`}
                className="absolute top-0 left-0 w-full h-full object-cover z-0 filter brightness-50"
            />
            
            <img
                src={`https://image.tmdb.org/t/p/w154${poster_path}`}
                alt={`${title} poster`}
                className="relative z-10 w-56 mx-auto my-4 rounded-lg shadow-md"
            />
            
            <div className="relative z-20 text-center text-wrap text-light-color">
                <h1 className="font-evers text-2xl">{title}</h1>
                <div className="mt-10">
                    <Link to={`/movies/${id}`} className="font-nexa text-2xl"><h3 className="hover:scale-105 hover:font-bold hover:text-sky-400 transition-all">Saber mais</h3></Link>
                </div>
            </div>
        </div>
    );
}
