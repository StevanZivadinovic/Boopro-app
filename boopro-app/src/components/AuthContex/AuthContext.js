import {createContext, useContext, useEffect, useState} from 'react';
// @ts-ignore
import {auth, db} from '../../config/Firebase.js';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

import {doc, setDoc} from 'firebase/firestore'


export const AuthContext = createContext({signUp:{}, 
    user:{}, logIn:{}, logOut:{}});

export function AuthContextProvider({children}){

    const [user, setUser] = useState({});

    function signUp(email,password){
         createUserWithEmailAndPassword(auth, email, password);
         setDoc(doc(db, 'users', email),{
            savedShows:[]
         })
    }
    function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logOut(){
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })
        return(()=>{
            unsubscribe();
        })
    }, [])
    

   return <AuthContext.Provider value={{signUp, logIn, logOut, user}}>{children}</AuthContext.Provider>
}

export function User() {
      
    return useContext(AuthContext);
  }

// function defaultValue(defaultValue, IContext) {
//     throw new Error('Function not implemented.');
// }