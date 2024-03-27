import { createContext, useContext, useEffect, useReducer } from "react";

const ProductStates = createContext();
const lsFavs = JSON.parse(localStorage.getItem('favs'))

let initialState = {
  favs: lsFavs || [], //
  cart: [],
  darkMode: false, // true // false // true // false
};

const productsReducer = (state, action) => {
  // {type: a}

  switch (action.type) {
    case "ADD_FAVORITES":
      return { ...state, favs: [...state.favs, action.payload] };
    case "REMOVE_BY_ID":
      let newArr = state.favs.filter((product) => product.id !== action.payload)
      return { ...state, favs: newArr };
    case "REMOVE_ALL":
      return { ...state, favs: [] };
    case "CHANGE_MODE":
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  //Estados globales
  const [state, dispatch] = useReducer(productsReducer, initialState);

  //Aca van las funciones globales
  let data = { state, dispatch };

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs])

  return (
    <ProductStates.Provider value={data}>{children}</ProductStates.Provider>
  );
};

export default ProductContext;

export const useProductStates = () => useContext(ProductStates);
