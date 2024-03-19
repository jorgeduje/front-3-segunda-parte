import { createContext, useContext, useState } from "react";

const ProductStates = createContext()

const ProductContext = ({children}) => {
    //Estados globales
    const [favs, setFavs] = useState([])
    const [cart, setCart] = useState([])
    console.log(favs, cart)

    //Aca van las funciones globales
    return(
        <ProductStates.Provider value={{favs, setFavs, cart, setCart}}>
            {children}
        </ProductStates.Provider>
    )
}

export default ProductContext

export const useProductStates = () => useContext(ProductStates)