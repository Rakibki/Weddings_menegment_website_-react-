import React, { createContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import auth from "../firebase/firebase.config"

export const authContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [lodding, setLodding] = useState(true)

    const createUser = (email, password) => {
      setLodding(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
      setLodding(true)
      return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
      const dishConnect = onAuthStateChanged(auth, (rurrentUser) => {
        setUser(rurrentUser)
        console.log("user State change");
        setLodding(false)
      })
      return () => {
        dishConnect()
      }
    }, [])

    const logOut = () => {
      setLodding(true)
      return signOut(auth)
    }

    const authInfo =  {user, logOut, lodding, loginUser, createUser}
  return (
    <authContext.Provider value={authInfo}>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider