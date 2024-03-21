import { createContext, useContext, useReducer } from "react";

const ProductStates = createContext();

let initialState = {
  favs: [], //
  cart: [],
  darkMode: false, // true // false // true // false
};

const productsReducer = (state, action) => {
  // {type: a}

  switch (action.type) {
    case "ADD_FAVORITES":
      return { ...state, favs: [...state.favs, action.payload] };
    case "REMOVE_BY_ID":
      let newArr = state.favs.filter(
        (product) => product.id !== action.payload
      )
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
  return (
    <ProductStates.Provider value={data}>{children}</ProductStates.Provider>
  );
};

export default ProductContext;

export const useProductStates = () => useContext(ProductStates);
