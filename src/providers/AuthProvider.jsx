import React, { createContext, useState } from 'react'
import {createUserWithEmailAndPassword} from "firebase/auth"
import auth from "../firebase/firebase.config"

export const authContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [lodding, setLodding] = useState(true)

    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo =  {user, lodding, loginUser, createUser}
  return (
    <authContext.Provider value={authInfo}>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider