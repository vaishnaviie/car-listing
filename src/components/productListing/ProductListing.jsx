import React, { useState } from "react";
import styles from "./ProductListing.module.css";
import Card from "../card/Card";
import { useData } from "../../context/ContextProvider";
import ReactPaginate from "react-paginate";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProductListing = () => {
  const { state, dispatch, myCars } = useData();
  const [pageNumber, setPageNumber] = useState(0);
  const carsPerPage = 6;
  const pageVisited = pageNumber * carsPerPage;

  const displayUsers = myCars
    .slice(pageVisited, pageVisited + carsPerPage)
    ?.map((car) => <Card car={car} key={car.id} />);

  const pageCount = Math.ceil(myCars.length / carsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className={styles.ProductListing}>{displayUsers}</div>
      <ReactPaginate
        previousLabel={<HiOutlineArrowSmLeft />}
        nextLabel={<HiOutlineArrowSmRight />}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={styles.pagination_buttons}
        previousLinkClassName={styles.btn_privious}
        nextLinkClassName={styles.btn_next}
        disabledClassName={styles.paginationDisabled}
        activeClassName={styles.paginationActive}
      />
    </>
  );
};

export default ProductListing;
