import React, { useState } from "react";
import PageTitle from "../PageTitle";
import styles from "../../styles/fuelStation.module.css";
import common from "../../styles/common.module.css";
import { Button, Form, FormGroup, Label, Input, Alert, Col } from "reactstrap";
import axios from "axios";

function Unregister() {
  return (
    <div className={styles.stationSettingsDiv}>
      <Alert color="warning">
        When you unregister from the system, all your data will be permanently
        deleted!
      </Alert>
      <Form>
        <FormGroup row>
          <Label for="reason" sm={12}>
            Reason (Optional)
          </Label>
          <Col sm={12}>
            <Input
              id="reason"
              name="text"
              type="textarea"
              className={styles.textarea}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password" sm={12}>
            Password*
          </Label>
          <Col sm={12}>
            <Input
              id="password"
              name="password"
              placeholder="password placeholder"
              type="password"
            />
          </Col>
        </FormGroup>
        <div className={styles.btnContainer}>
          <Button type="submit" className={common.btnPrimary}>
            Unregister
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Unregister;
