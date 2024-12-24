import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.init';
import axios from 'axios';
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const [isAuthenticated, setIsAuthenticated] = useState(false);



    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                axios.post(`${apiBaseUrl}/jwt`,
                    { email: currentUser.email },
                    { withCredentials: true }
                ).then((response) => {
                    console.log(response.data)
                }).catch((error) => {
                    console.log(error)
                })

                console.log(currentUser, "current user observer", apiBaseUrl)
                setLoading(false);
            } else {
                setUser(null);
                axios.post(`${apiBaseUrl}/logout`, {}, { withCredentials: true }).then((response) => {
                    console.log(response.data)
                }).catch((error) => {
                    console.log(error)
                })

                setLoading(true);
            }
        })

        //component unmount , clean up
        return () => {
            unSubscribe()
        }
    }, [user])

    const logoutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const checkAuth = () => {
        if (user) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
        return isAuthenticated;
    }

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        googleSignIn,
        checkAuth
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
