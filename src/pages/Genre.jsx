import { useEffect, useState } from 'react';
import GenreCard from '../components/GenreCard';

export default function GenreList(){

    const [genre, setGenre] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
        .then(response => response.json())
        .then(data => {setGenre(data.genres)})
        .catch(err => console.error(err));
    }, []);

    return(
        <>
         <h2 className='col-span-4 text-6xl text-center my-10 font-evers'>Escolha um Gênero</h2>
         <main className='flex flex-wrap gap-10 justify-center'>
        {
            genre.map((genre) => (
                    <GenreCard key={genre.id} {...genre}/>
                )
            )
        }
        </main>
        </>
    )
}