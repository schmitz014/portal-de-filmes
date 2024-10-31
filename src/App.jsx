import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="gap-5">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}