import React, { useState } from "react";
import PageTitle from "../PageTitle";
import styles from "../../styles/fuelStation.module.css";
import common from "../../styles/common.module.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

function AccountSettings() {
  const [editemail, seteditemail] = useState(false);
  const [changepwd, setchangepwd] = useState(false);
  return (
    <div className={styles.stationSettingsDiv}>
      <Form style={{ width: "50%" }}>
        {!editemail ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Label for="email">Email : joe@gmail.com</Label>
            <a className={styles.edit} onClick={() => seteditemail(true)}>
              Edit
            </a>
          </div>
        ) : (
          <>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                className={styles.input}
                name="email"
                placeholder="joe@gmail.com"
                type="email"
                required
              />
            </FormGroup>
            <div className={styles.btnContainer}>
              <Button
                className={common.btnSecondary}
                onClick={() => seteditemail(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className={common.btnPrimary}>
                Update
              </Button>
            </div>
          </>
        )}
      </Form>
      <br />
      <Form style={{ width: "50%" }}>
        {!changepwd ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Label for="email">Password : ***********</Label>
            <a className={styles.edit} onClick={() => setchangepwd(true)}>
              Edit
            </a>
          </div>
        ) : (
          <>
            <FormGroup>
              <Label for="oldpassword">Old Password*</Label>
              <Input
                id="oldpassword"
                className={styles.input}
                name="oldpassword"
                placeholder="Enter a password"
                type="password"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">New Password*</Label>
              <Input
                id="password"
                className={styles.input}
                name="password"
                placeholder="Enter a password"
                type="password"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="confPassword">Confirm Password*</Label>
              <Input
                id="confPassword"
                className={styles.input}
                name="confpassword"
                placeholder="Re-enter your passowrd"
                type="password"
                required
              />
            </FormGroup>
            <div className={styles.btnContainer}>
              <Button
                className={common.btnSecondary}
                onClick={() => setchangepwd(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className={common.btnPrimary}>
                Update
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
}

export default AccountSettings;
