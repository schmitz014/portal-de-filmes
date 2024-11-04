import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext({
    favorites: [],
    handleFavorite: () => {},
    isFavorite: () => false,
});

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const loadFavorites = () => {
            try {
                const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
                setFavorites(storedFavorites);
            } catch (error) {
                console.error("Erro ao carregar favoritos do localStorage:", error);
                setFavorites([]);
            }
        };

        loadFavorites();
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const handleFavorite = (movie) => {
        setFavorites((prevFavorites) => {
            const isFavorite = prevFavorites.some(fav => fav.id === movie.id);
            if (isFavorite) {
                return prevFavorites.filter(fav => fav.id !== movie.id);
            } else {
                return [...prevFavorites, movie];
            }
        });
    };

    const isFavorite = (movieId) => favorites.some(fav => fav.id === movieId);

    return (
        <FavoritesContext.Provider value={{ favorites, handleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};
