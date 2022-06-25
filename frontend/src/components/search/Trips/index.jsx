import React, { useEffect, useState } from "react";
import SectionContainer from "../../landing/SectionContainer";
import Trips from "./Trips";
import styles from "./TripList.module.css";
import TripItem from "../../TripItem/TripItem";
import { Grid } from "../../Grid/Grid";

const TripList = ({ trips }) => {
  const [showed, setShowed] = useState(false);

  useEffect(() => {
    setShowed(false);
  }, [trips]);

  const onShowList = () => {
    setShowed((prev) => !prev);
  };

  const showedList = !showed ? [...trips].slice(0, 4) : [...trips];

  return (
    <SectionContainer>
      <div className={styles["trips-section"]}>
        <div className={styles["trips-title"]}>
          <div className={styles["title-wrapper"]}>
            <label className={styles.title}>Trips</label>
            <div className={styles["add-btn"]} onClick={onShowList}>
              <div className={styles["add-btn-title"]}>
                <span className={["add-btn-text"]}>
                  {showed ? "Collapse" : "Show all"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["trips_container"]}>
          {trips && trips.length !== 0 ? (
            <Grid>
              {showedList.map((trip) => (
                <TripItem listTrip={trip} key={trip.id} />
              ))}
            </Grid>
          ) : (
            "NOT FOUND"
          )}
        </div>
      </div>
    </SectionContainer>
  );
};

export default TripList;
