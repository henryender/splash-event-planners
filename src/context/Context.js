import React from 'react'
import { createContext } from 'react'

export const SplashContext = createContext()
const Context = ({ children }) => {

    const[toggle, setToggle]= React.useState(false)

    const values={ toggle, setToggle}
    return (
        <SplashContext.Provider value={values}>
            {children}
        </SplashContext.Provider>

    )
}

export default Context
