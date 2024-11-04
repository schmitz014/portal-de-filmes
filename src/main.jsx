import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import Home from './pages/Home.jsx'
import Movies from './pages/Movies.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import MovieDetails from './pages/MovieDetails.jsx'
import GenreList from './pages/Genre.jsx'
import GenreMovies from './pages/GenreMovies.jsx'
import Favorites from './pages/Favorites.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/movies', element: <Movies /> },
      { path: '/movie/:id', element: <MovieDetails /> },
      { path: '/genres/', element: <GenreList /> },
      { path: '/genre/:id', element: <GenreMovies /> },
      { path: '/favorites', element: <Favorites /> },
      { path: '*', element: <PageNotFound /> },
    ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)