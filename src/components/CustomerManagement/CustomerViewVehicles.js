import { useState , useEffect } from "react";
import Header from "../Common/Header";
import PageTitle from "../PageTitle";
import common from "../../styles/common.module.css";
import styles from "../../styles/customer.module.css";
import { Button } from "react-bootstrap";

function ViewVehicles() {
    return(
        <div>
          <Header/>
          <PageTitle pageTitle="View Vehicles" />
          <div className={styles.TableContainer}>

          <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Type</th>
                    <th scope="col">Chassis Number</th>
                    <th scope="col">Number Plate</th>
                    <th scope="col">Fuel Quota</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Car</td>
                    <td>NKE23432</td>
                    <td>CAP-5656</td>
                    <td>10 L</td>
                    <Button>Delete</Button>
                </tr>
            </tbody>
          </table>

          </div>
        </div>
    )
}

export default ViewVehicles;