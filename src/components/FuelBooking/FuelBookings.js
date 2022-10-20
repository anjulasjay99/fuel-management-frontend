/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import StationHeader from "../Common/StationHeader";
import PageTitle from "../PageTitle";
import styles from "../../styles/fuelStation.module.css";
import common from "../../styles/common.module.css";
import { FormGroup, Button, Input, Label, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from '../Common/Header';

function FuelBookings() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [user, setuser] = useState({});
  var [email, setemail] = useState("");//g user.stationId --> email 
  const [refNo, setrefNo] = useState(true);
  const [type, settype] = useState(false);
  const [status, setstatus] = useState(false);
  const [search, setsearch] = useState("");

  const bkgSearch = (val) => {
    setsearch(val);

    if (val === "") {
      getOrders(email);
    } else {
      getBkgSeach(val);
    }

  };

  function updateBkg(booking){
    console.log(booking._id)
    navigate(`/updateBooking/${booking._id}`)
 }

  const deleteBkg = (booking) => {
    console.log(booking)
    axios.delete(`http://localhost:8070/fuelBookings/delete/${booking._id}`).then((data) => {
      console.log(data);
      window.location.reload();
      alert("Booking Successfully Deleted");
    }).catch((err) => {
      console.log(err);
      alert(err);
    })
  }

  const getBkgSeach = (val) => {
    axios
      .get(
        `http://localhost:8070/fuelBookings/${email}?val=${val}`
      )
      .then((res) => {
        setBookings(res.data.data);
      })
      .catch((e) => {
        alert(e);
      });
  };

  const getOrders = (id) => {
    axios
      .get(`http://localhost:8070/fuelBookings/${id}`)
      .then((res) => {
        setBookings(res.data.data);
        console.log(bookings);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const createNewBkg = () => {
    navigate("/createBooking");
  };

  useEffect(() => {
    var userData = sessionStorage.getItem("customer");
    if (userData == null) {
      navigate("/customer-login");
    }
    setuser(userData);
    setemail(userData);
    getOrders(userData);
  }, []);

  if (bookings.length === 0) {
    return (
      <div>
        <Header />
        <PageTitle pageTitle={"Fuel Bookings"} />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <PageTitle pageTitle={"Fuel Bookings"} />
        <div
          style={{
            width: "100%",
            marginTop: "50px",
            padding: "0px 100px 0px 100px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                marginBottom: "20px",
                width: "50%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                columnGap: "10px",
              }}
            >
              <Input
                id="search"
                name="search"
                className={common.searchInput}
                placeholder="Search"
                type="text"
                value={search}
                onChange={(e) => bkgSearch(e.target.value)}
              />
            </div>
            <div>
              <Button
                className={common.btnPrimary}
                onClick={createNewBkg} >
                Create Booking
              </Button>
            </div>
          </div>

          <Table bordered striped className={common.table}>
            <thead>
              <tr>
                <th>No</th>
                <th>Booking Reference</th>
                <th>Vehicle Type </th>
                <th>Vehicle No</th>
                <th>Booking Date</th>
                <th>Litres</th>
                <th>Status</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length > 0
                ? bookings.map((booking, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{booking.bookingId}</td>
                      <td>{booking.vehicleType}</td>
                      <td>{booking.vehicleNo}</td>
                      <td>{booking.bkgDate}</td>
                      <td>{booking.litres}</td>
                      <td>
                        <span
                          style={{
                            background:
                            booking.status === "Approved"
                                ? "#43a047"
                                : booking.status === "Rejected"
                                  ? "#e53935"
                                  : "#f9a825",
                          }}
                          className={styles.status}
                        >
                          {booking.status}
                        </span>
                      </td>
                      <td>
                        <i onClick={() => {
                          updateBkg(booking)
                        }} class="fa fa-pencil-square" aria-hidden="true" style={{ marginRight: "5px", size: "70px" }}
                        disabled={booking.status === "Approved" || booking.status === "Rejected"}></i>
                        <a onClick={() => {
                          deleteBkg(booking)
                        }}><i style={{ marginLeft: "20px" }} class="fa fa-trash" aria-hidden="true"
                        ></i></a>
                      </td>
                    </tr>
                  );
                })
                : "No data available"}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default FuelBookings;
