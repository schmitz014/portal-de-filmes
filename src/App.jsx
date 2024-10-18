import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <h1 className="text-6xl font-evers m-10 text-center">
        Portal de Filmes
      </h1>
      <Outlet />
    </>
  )
}