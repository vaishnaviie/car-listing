import React, { createContext, useContext, useReducer } from "react";
import { Reducer } from "../reducer/Reducer";
import { initialState } from "../constant/Constant";

const Context = createContext();
export const useData = () => useContext(Context);

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  console.log(state.data);
  const myCars =
    state?.search?.length > 0
      ? state?.data?.filter(({ carName }) =>
          carName.toLowerCase().includes(state.search.toLowerCase())
        )
      : state?.data;
  console.log(myCars);

  return (
    <div>
      <Context.Provider value={{ state, dispatch, myCars }}>
        {children}
      </Context.Provider>
    </div>
  );
};

export default ContextProvider;
