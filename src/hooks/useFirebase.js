import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init'

initializeAuthentication();

const useFirebase = () => {
    
    const [user, setUser ] = useState({});
    const [ loading, setLoading] = useState(true);
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const singInUsingGoogle = () => {
        setLoading(true);
        signInWithPopup(auth, googleProvider )
        .then( result => {
            setUser(user)
        })
        .finally(() => setLoading(false))
    }



    const logOut = () => {
        setLoading(true);
        signOut(auth)
        .then( () => {

        })
    }
    
    useEffect( () => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            } else {
                setUser({})
            }
            setLoading(false)
            return () => unsubscribed;
        })
    },[])

    return{
        user,
        loading,
        singInUsingGoogle,
        logOut
    }
}

export default useFirebase;