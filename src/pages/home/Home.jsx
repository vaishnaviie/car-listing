import React from "react";
import styles from "./Home.module.css";
import ProductListing from "../../components/productListing/ProductListing";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div className={styles.Home}>
      <Navbar />
      <ProductListing />
    </div>
  );
};

export default Home;
