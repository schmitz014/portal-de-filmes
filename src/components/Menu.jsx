import Footer from "./Footer.jsx"
import Header from "./Header.jsx"

export default function Menu() {
    return (
        <>
            <main className="bg-gray-custom3 flex flex-col p-10 w-64 text-light-color ">
                <Header />
                <Footer />
            </main>
        </>
    )
}