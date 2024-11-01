import { Link } from "react-router-dom";

export default function GenreCard({ id, name }) {
    return (
        <Link 
            className="w-auto font-nexa font-bold hover:scale-110 transition-all" 
            to={`/genre/${id}`} 
            aria-label={`Ver filmes do gênero ${name || 'indefinido'}`} // Adicionado aria-label para acessibilidade
        >
            <div className='bg-dark-green hover:bg-green-600 w-64 h-28 shadow-md rounded-md p-4 relative'>
                <h3 className='text-3xl text-white absolute bottom-4 right-4'>
                    {name || 'Gênero Indefinido'}  {/* Fallback para o nome */}
                </h3>
            </div>
        </Link>
    );
}
