import React from "react";
import styles from "./PropertyPage.module.css";
import { useParams } from "react-router-dom";
import { useData } from "../../context/ContextProvider";
import Card from "../../components/card/Card";

const PropertyPage = () => {
  const { state, dispatch } = useData();
  const { ID } = useParams();
  const specificCar = state?.data?.find((C) => Number(C.id) == Number(ID));
  console.log(specificCar);
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "rgb(228, 228, 242)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card car={specificCar} />
    </div>
  );
};

export default PropertyPage;
