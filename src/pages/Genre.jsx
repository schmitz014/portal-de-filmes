import { useEffect, useState } from 'react';
import GenreCard from '../components/GenreCard';

export default function GenreList() {
    const [genres, setGenres] = useState([]); // Renomeando para genres
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar gêneros.');
                }
                const data = await response.json();
                setGenres(data.genres);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGenres();
    }, []);

    if (isLoading) return <p>Carregando gêneros...</p>;
    if (error) return <p>Erro: {error}</p>;

    return (
        <>
            <h2 className='col-span-4 text-6xl text-center my-10 font-evers'>Escolha um Gênero</h2>
            <main className='flex flex-wrap gap-10 justify-center'>
                {genres.map((genre) => (
                    <GenreCard key={genre.id} id={genre.id} name={genre.name} />
                ))}
            </main>
        </>
    );
}
