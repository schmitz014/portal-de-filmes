export default function Login({ isLogged, handleLogin }) {

    return (
        <div className="flex gap-2 items-center mr-5">
            {isLogged && <p className="text-2xl font-nexa">Olá, usuário</p>}
            <button
                onClick={handleLogin}
                className={`${isLogged ? "bg-white text-gray-custom3" : "bg-dark-green text-light-color"}  font-nexa w-24 h-16 text-xl hover:bg-light-green hover:font-bold hover:text-gray-custom3 transition-all rounded`}>
                {isLogged ? "Logout" : "Login"}
            </button>
        </div>
    )
}