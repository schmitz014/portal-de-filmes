import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import Home from './pages/Home.jsx'
import Movies from './pages/Movies.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import MovieDetails from './pages/MovieDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/movies', element: <Movies /> },
      { path: '/movies/:id', element: <MovieDetails /> },
      { path: '*', element: <PageNotFound /> },
    ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)