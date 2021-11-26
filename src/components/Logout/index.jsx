import './styles.css';
import {useEffect, useState} from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

export const Logout = () => {

    const{user, setUser} = useState(null);

    useEffect(
        () => {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if(user) {
                    setUser(user);
                }else {
                    setUser(null);
                }
            })
        }, []
    )

    const logoutUser = () => {
        const auth = getAuth();
        try {
            await signOut(auth);
        }catch(error) {
            console.log(error)
        }
    }

    return (
        user && <button className="logout-btn" onClick={loginUser}>
            Logout
        </button>
    )
}