import React, { useState } from "react";
import PageTitle from "../PageTitle";
import styles from "../../styles/fuelStation.module.css";
import common from "../../styles/common.module.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

function StationSettings() {
  return (
    <div className={styles.stationSettingsDiv}>
      <Form className={styles.form}>
        <div className={styles.section}>
          <Label className={styles.subTitle}>Station Information</Label>
          <FormGroup>
            <Label for="stationName">Name of the Station*</Label>
            <Input
              id="stationName"
              className={styles.input}
              name="stationName"
              placeholder="joe mama"
              type="text"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="type">Type*</Label>
            <Input id="type" name="type" type="select" value="ioc">
              <option value="ioc">Lanka IOC</option>
              <option value="ceypetco">Ceypetco</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="address">Address*</Label>
            <Input
              id="address"
              className={styles.input}
              name="address"
              placeholder="joe mama"
              type="text"
              required
            />
          </FormGroup>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: "20px",
            }}
          >
            <FormGroup>
              <Label for="city">City*</Label>
              <Input
                id="city"
                className={styles.inputSm}
                name="city"
                placeholder="joe mama"
                type="text"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="province">Province*</Label>
              <Input
                id="province"
                className={styles.inputSm}
                name="province"
                placeholder="joe mama"
                type="text"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="zipcode">Zip Code*</Label>
              <Input
                id="zipcode"
                className={styles.inputSm}
                name="zipcode"
                placeholder="joe mama"
                type="text"
                required
              />
            </FormGroup>
          </div>
          <FormGroup>
            <Label for="contactNo">Contact No.*</Label>
            <Input
              id="contactNo"
              className={styles.input}
              name="contactNo"
              placeholder="joe mama"
              type="phone"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              className={styles.input}
              name="email"
              placeholder="joe@gmail.com"
              type="email"
              required
              disabled
            />
          </FormGroup>
        </div>
        <div className={styles.section}>
          <Label className={styles.subTitle}>
            Property Owner's Information
          </Label>
          <FormGroup>
            <Label for="fullname">Full Name*</Label>
            <Input
              id="fullname"
              className={styles.input}
              name="fullname"
              placeholder="joe@gmail.com"
              type="text"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="nic">NIC*</Label>
            <Input
              id="nic"
              className={styles.input}
              name="nic"
              placeholder="joe@gmail.com"
              type="text"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="personalContactNo">Personal Contact No.*</Label>
            <Input
              id="personalContactNo"
              className={styles.input}
              name="personalContactNo"
              placeholder="joe@gmail.com"
              type="text"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="personalEmail">Personal Email*</Label>
            <Input
              id="personalEmail"
              className={styles.input}
              name="personalEmail"
              placeholder="joe@gmail.com"
              type="email"
              required
            />
          </FormGroup>
        </div>
        <div className={styles.btnContainer}>
          <Button type="submit" className={common.btnPrimary}>
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default StationSettings;
