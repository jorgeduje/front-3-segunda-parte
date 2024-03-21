import { useProductStates } from "../../Context/ProductContext";

export const Favorites = () => {
  const { state, dispatch } = useProductStates();

  return (
    <div>
      {state.favs.map((favorite) => {
        return (
          <div key={favorite.id}>
            <h1>{favorite.title}</h1>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_BY_ID", payload: favorite.id })
              }
            >
              Quitar de favoritos
            </button>
          </div>
        );
      })}
      <h1>Favorites</h1>
      <button onClick={() => dispatch({ type: "REMOVE_ALL" })}>
        Limpiar todos los favoritos
      </button>
    </div>
  );
};
