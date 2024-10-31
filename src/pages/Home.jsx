import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function Home() {
    const [filmesPopulares, setFilmesPopulares] = useState([]);
    const [filmesTrending, setFilmesTrending] = useState([]);
    const [filmesUpcoming, setFilmesUpcoming] = useState([]);
    const [currentSlidePopulares, setCurrentSlidePopulares] = useState(0);
    const [currentSlideTrending, setCurrentSlideTrending] = useState(0);
    const [currentSlideUpcoming, setCurrentSlideUpcoming] = useState(0);

    const itemsPerPage = 4; // Número de filmes visíveis por slide

    const fetchMovies = async () => {
        try {
            const [respostaPopulares, respostaTrending, respostaUpcoming] = await Promise.all([
                fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`),
                fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`),
                fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`)
            ]);

            const popularData = await respostaPopulares.json();
            const trendingData = await respostaTrending.json();
            const upcomingData = await respostaUpcoming.json();

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

    const handleNext = (setCurrentSlide, currentSlide, movies) => {
        if (currentSlide < Math.ceil(movies.length / itemsPerPage) - 1) {
            setCurrentSlide((prev) => prev + 1);
        }
    };

    const handlePrev = (setCurrentSlide, currentSlide) => {
        if (currentSlide > 0) {
            setCurrentSlide((prev) => prev - 1);
        }
    };

    return (
        <div className="space-y-5">
            {/* Carrossel Populares */}
            <CardContainer title="Populares">
                <div className="relative">
                    <button 
                        onClick={() => handlePrev(setCurrentSlidePopulares, currentSlidePopulares)} 
                        className="text-3xl hover:-translate-x-5 bg-medium-green hover:bg-green-300 hover:scale-95 transition-all absolute left-10 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full z-10"
                        disabled={currentSlidePopulares === 0}
                        aria-label="Slide anterior"
                    >
                        <FaArrowAltCircleLeft />
                    </button>
                    <div className="flex justify-center w-screen">
                        <div 
                            className="flex transition-transform duration-300"
                            style={{ transform: `translateX(-${currentSlidePopulares * itemsPerPage * 1}%)` }}
                        >
                            {filmesPopulares
                                .slice(currentSlidePopulares * itemsPerPage, (currentSlidePopulares + 1) * itemsPerPage)
                                .map(filme => (
                                    <div className="mx-2 gap-10" key={filme.id}>
                                        <MovieCard {...filme} />
                                    </div>
                                ))}
                        </div>
                    </div>
                    <button 
                        onClick={() => handleNext(setCurrentSlidePopulares, currentSlidePopulares, filmesPopulares)} 
                        className="text-3xl hover:translate-x-5 bg-medium-green hover:bg-green-300 hover:scale-95 transition-all absolute right-10 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full z-10"
                        disabled={currentSlidePopulares >= Math.ceil(filmesPopulares.length / itemsPerPage) - 1}
                        aria-label="Próximo slide"
                    >
                        <FaArrowAltCircleRight />
                    </button>
                </div>
            </CardContainer>

            {/* Carrossel Trending */}
            <CardContainer title="Trending">
                <div className="relative">
                    <button 
                        onClick={() => handlePrev(setCurrentSlideTrending, currentSlideTrending)} 
                        className="text-3xl hover:-translate-x-5 bg-medium-green hover:bg-green-300 hover:scale-95 transition-all absolute left-10 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full z-10"
                        disabled={currentSlideTrending === 0}
                        aria-label="Slide anterior"
                    >
                        <FaArrowAltCircleLeft />
                    </button>
                    <div className="flex justify-center w-screen">
                        <div 
                            className="flex transition-transform duration-300"
                            style={{ transform: `translateX(-${currentSlideTrending * itemsPerPage * 1}%)` }}
                        >
                            {filmesTrending
                                .slice(currentSlideTrending * itemsPerPage, (currentSlideTrending + 1) * itemsPerPage)
                                .map(filme => (
                                    <div className="mx-2 gap-10" key={filme.id}>
                                        <MovieCard {...filme} />
                                    </div>
                                ))}
                        </div>
                    </div>
                    <button 
                        onClick={() => handleNext(setCurrentSlideTrending, currentSlideTrending, filmesTrending)} 
                        className="text-3xl hover:translate-x-5 bg-medium-green hover:bg-green-300 hover:scale-95 transition-all absolute right-10 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full z-10"
                        disabled={currentSlideTrending >= Math.ceil(filmesTrending.length / itemsPerPage) - 1}
                        aria-label="Próximo slide"
                    >
                        <FaArrowAltCircleRight />
                    </button>
                </div>
            </CardContainer>

            {/* Carrossel Próximos Lançamentos */}
            <CardContainer title="Próximos Lançamentos">
                <div className="relative">
                    <button 
                        onClick={() => handlePrev(setCurrentSlideUpcoming, currentSlideUpcoming)} 
                        className="text-3xl hover:-translate-x-5 bg-medium-green hover:bg-green-300 hover:scale-95 transition-all absolute left-10 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full z-10"
                        disabled={currentSlideUpcoming === 0}
                        aria-label="Slide anterior"
                    >
                        <FaArrowAltCircleLeft />
                    </button>
                    <div className="flex justify-center w-screen">
                        <div 
                            className="flex transition-transform duration-300"
                            style={{ transform: `translateX(-${currentSlideUpcoming * itemsPerPage * 1}%)` }}
                        >
                            {filmesUpcoming
                                .slice(currentSlideUpcoming * itemsPerPage, (currentSlideUpcoming + 1) * itemsPerPage)
                                .map(filme => (
                                    <div className="mx-2 gap-10" key={filme.id}>
                                        <MovieCard {...filme} />
                                    </div>
                                ))}
                        </div>
                    </div>
                    <button 
                        onClick={() => handleNext(setCurrentSlideUpcoming, currentSlideUpcoming, filmesUpcoming)} 
                        className="text-3xl hover:translate-x-5 bg-medium-green hover:bg-green-300 hover:scale-95 transition-all absolute right-10 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full z-10"
                        disabled={currentSlideUpcoming >= Math.ceil(filmesUpcoming.length / itemsPerPage) - 1}
                        aria-label="Próximo slide"
                    >
                        <FaArrowAltCircleRight />
                    </button>
                </div>
            </CardContainer>

        </div>
    );
}
