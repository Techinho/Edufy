import React, { createContext, useContext } from 'react'
import { courses } from '../assets/assets'

export const AppContext=createContext()
const AppContextProvidor = (props) => {
    const value={
        courses
    }
  return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
    
  )
}

export default AppContextProvidor