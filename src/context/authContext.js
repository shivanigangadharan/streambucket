import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [encodedToken, setEncodedToken] = useState();

    const SignupUser = async (email, password) => {
        try {
            const res = await axios.post(`/api/auth/signup`, {
                firstName: "Shivani",
                lastName: "Gangadharan",
                email: "shivani@gmail.com",
                password: "shivani123",
            });
            setUser(res.data.createdUser);
            setEncodedToken(res.data.encodedToken);
            return user;
        }
        catch (e) {
            console.log(e);
        }
    }

    const LoginUser = async (email, password) => {
        try {
            const res = await axios.post(`/api/auth/login`, {
                email: "shivani@gmail.com",
                password: "shivani123",
            });
            console.log(res)
            setUser(res.data.foundUser);
            setEncodedToken(res.data.encodedToken);
            return true;
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <AuthContext.Provider value={{ user, setUser, encodedToken, setEncodedToken, SignupUser, LoginUser }}>
            {children}
        </AuthContext.Provider>
    )
}