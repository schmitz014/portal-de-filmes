import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";

export default function App() {
  return (
    <>
      <div className="flex h-lvh gap-5">
        <Menu />
        <Outlet />
      </div>
    </>
  )
}