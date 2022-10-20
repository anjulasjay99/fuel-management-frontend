import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "../../Css/styles-ttrm.css";

import {
  Label,
  Input,
  FormGroup,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";

import Header from "../Common/Header";
import PageTitle from "../PageTitle";
import { ReactSession } from "react-client-session";






function Dashboard() {
    const navigate = useNavigate();

  document.documentElement.classList.remove("nav-open");

  const clickMyCompalints = () => {
    navigate("/addcomplaint");
  };
 
  const clickCustomerManagement = () => {
    navigate("");
  };

  const clickBookingManagement = () => {
    navigate("/fuelBookings");
  };


//   useEffect(() => {
//     ReactSession.setStoreType("localStorage");
//     if (ReactSession.get("user") != null) {
//       document.body.classList.add("index");
//       document.getElementById("card1").classList.remove("card");
//       document.getElementById("card2").classList.remove("card");
//       document.getElementById("card3").classList.remove("card");
//       document.getElementById("card4").classList.remove("card");

//       return function cleanup() {
//         document.body.classList.remove("index");
//       };
//     } else {
//         navigate("");
//     }
//   }, []);
var email;
useEffect (() =>{
    console.log(sessionStorage.getItem("customer"));
       if(sessionStorage.getItem("customer") == null){
            navigate("/customer-login");
       }  
       email = sessionStorage.getItem("customer");
       console.log(email);
   },[])

  return (
    <>
      
      <Header/>
            <PageTitle pageTitle="Dashboard" />
      <div className="main">
        <div className="edit-booking-content">
          <br></br>
          <div className="dashboard-content">
            <Row>
              <Col>
                <Card
                  className="dashboard-card"
                  id="card1"
                  onClick={clickCustomerManagement}
                >
                  Customer Management
                  <label className="dashboard-card-subtitle">
                    View all the tour itineraries we offer.
                  </label>
                </Card>
              </Col>
              <Col>
                <Card
                  className="dashboard-card"
                  id="card1"
                  onClick={clickBookingManagement}
                >
                  Fuel Booking Management
                  <label className="dashboard-card-subtitle">
                    place bookings and view your bookings.
                  </label>
                </Card>
              </Col>
              <Col>
                <Card
                  className="dashboard-card"
                  id="card2"
                  onClick={clickMyCompalints}
                >
                  Manage Complaints
                  <label className="dashboard-card-subtitle">
                     Raise complaints, provide feedback.
                  </label>
                </Card>
              </Col>
            </Row>
            <br></br>
            <br></br>
            
          </div>
        </div>
     
      </div>
    </>
  );
}

export default Dashboard;