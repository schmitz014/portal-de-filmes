import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./contexts/AuthContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";

export default function App() {
  return (
    <AuthProvider> 
      <FavoritesProvider>
        <div className="flex flex-col min-h-screen gap-5">
          <Header />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </div>
      </FavoritesProvider>
    </AuthProvider>
  );
}
