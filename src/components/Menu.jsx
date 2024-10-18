import Footer from "./Footer.jsx"
import Header from "./Header.jsx"

export default function Menu() {
    return (
        <>
            <main className="bg-gray-custom3 flex flex-col p-5 w-64 gap-60 text-light-color ">
                <Header />
                <Footer />
            </main>
        </>
    )
}