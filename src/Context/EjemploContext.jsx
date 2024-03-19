import { createContext, useContext, useState } from "react";

export const GlobalStates = createContext()

const EjemploContext = ({children}) => {
    const [salario, setSalario] = useState(150000)

    return (
        <GlobalStates.Provider value={{salario, setSalario}}>
            {children}
        </GlobalStates.Provider>
    )
}

export default EjemploContext

export const useGlobalStates = () => useContext(GlobalStates)
