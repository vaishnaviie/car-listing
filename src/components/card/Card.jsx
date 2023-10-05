import React from "react";
import styles from "./Card.module.css";
import { BsSuitHeart } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { BsPlugin } from "react-icons/bs";
import { BsSpeedometer } from "react-icons/bs";
import { GiAbstract047 } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Card = ({ car }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/proprty/${car?.id}`)}
    >
      <img className={styles.carImg} src={car.carImg} alt="carImg" />
      <div
        style={{
          padding: "1rem 1.7rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "350px",
        }}
      >
        <div className={styles.carName_conatiner}>
          <h3 className={styles.carName}>{car.carName}</h3>
          <p className={styles.year}>{car.year}</p>
        </div>
        <div className={styles.box_conatiner}>
          <div className={styles.box1}>
            <p className={styles.small_box}>
              {" "}
              <BsPeople style={{ color: "rgb(70, 161, 214)" }} /> {car.people}
            </p>
            <p className={styles.small_box}>
              <BsPlugin style={{ color: "rgb(70, 161, 214)" }} />
              {car.carType}
            </p>
          </div>
          <div className={styles.box2}>
            <p className={styles.small_box}>
              <BsSpeedometer style={{ color: "rgb(70, 161, 214)" }} />
              {car.speed}
            </p>
            <p className={styles.small_box}>
              <GiAbstract047 style={{ color: "rgb(70, 161, 214)" }} />
              {car.automatic}
            </p>
          </div>
        </div>
        <hr />
        <div className={styles.car_cost_container}>
          <div>
            <span
              style={{
                fontSize: "1.5rem",
              }}
            >
              {car.cost}
            </span>
            &nbsp;/month
          </div>
          <div className={styles.btns_container}>
            <div className={styles.heart}>
              {" "}
              <BsSuitHeart style={{ color: "rgb(70, 161, 214)" }} />{" "}
            </div>
            <button className={styles.btn_rent}>Rent Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
