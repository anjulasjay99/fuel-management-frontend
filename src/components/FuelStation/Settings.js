import React, { useState } from "react";
import PageTitle from "../PageTitle";
import styles from "../../styles/fuelStation.module.css";
import common from "../../styles/common.module.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import StationSettings from "./StationSettings";
import AccountSettings from "./AccountSettings";
import Unregister from "./Unregister";

function Settings() {
  const [tabIndex, settabIndex] = useState(0);
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
            <StationSettings />
          ) : tabIndex === 1 ? (
            <AccountSettings />
          ) : (
            <Unregister />
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;
