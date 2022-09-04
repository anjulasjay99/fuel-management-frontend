import React, { useState, useEffect } from "react";
import PageTitle from "../PageTitle";
import styles from "../../styles/fuelStation.module.css";
import common from "../../styles/common.module.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import StationSettings from "./StationSettings";
import AccountSettings from "./AccountSettings";
import Unregister from "./Unregister";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();
  const [tabIndex, settabIndex] = useState(0);
  const [user, setuser] = useState();
  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("fsUser"));
    if (userData == null || userData === undefined || userData === "") {
      navigate("/fuel-station-login");
    } else {
      setuser(userData);
    }
  }, []);

  if (user !== undefined) {
    return (
      <div className={styles.settingsWrapper}>
        <PageTitle pageTitle="Settings" />
        <div className={styles.settingsDiv}>
          <div className={styles.tabs}>
            <div
              className={tabIndex === 0 ? styles.tabSelected : styles.tab}
              onClick={() => settabIndex(0)}
            >
              Station
            </div>
            <div
              className={tabIndex === 1 ? styles.tabSelected : styles.tab}
              onClick={() => settabIndex(1)}
            >
              Account
            </div>
            <div
              className={tabIndex === 2 ? styles.tabSelected : styles.tab}
              onClick={() => settabIndex(2)}
            >
              Unregister
            </div>
          </div>
          <div className={styles.tabContent}>
            {tabIndex === 0 ? (
              <StationSettings user={user} />
            ) : tabIndex === 1 ? (
              <AccountSettings user={user} />
            ) : (
              <Unregister user={user} />
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Settings;
