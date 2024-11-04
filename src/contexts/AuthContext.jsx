import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(() => {
        const storedIsLogged = localStorage.getItem('isLogged');
        return storedIsLogged === 'true';
    });

    useEffect(() => {
        localStorage.setItem('isLogged', isLogged);
    }, [isLogged]);

    const handleLogin = () => {
        setIsLogged((prev) => !prev);
    };

    return (
        <AuthContext.Provider value={{ isLogged, handleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
};
