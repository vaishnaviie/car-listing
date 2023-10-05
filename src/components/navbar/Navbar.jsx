import React from "react";
import Styles from "./Navbar.module.css";
import { useData } from "../../context/ContextProvider";
import { ACTION } from "../../constant/Constant";

const Navbar = () => {
  const { state, dispatch } = useData();
  console.log(state.search);
  return (
    <div className={Styles.Navbar}>
      <input
        type="search"
        placeholder="Search..."
        onChange={(e) => {
          dispatch({ type: ACTION.SEARCH, payload: e.target.value });
        }}
      />
    </div>
  );
};

export default Navbar;
