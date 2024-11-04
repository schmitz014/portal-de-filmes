import React, { createContext, useContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const handleFavorite = (movie) => {
        if (favorites.some((fav) => fav.id === movie.id)) {
            setFavorites(favorites.filter((fav) => fav.id !== movie.id));
        } else {
            setFavorites([...favorites, movie]);
        }
    };

    const isFavorite = (id) => {
        return favorites.some((movie) => movie.id === id);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, handleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};
