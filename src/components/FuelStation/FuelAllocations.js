import React, { useEffect, useState } from "react";
import StationHeader from "../Common/StationHeader";
import PageTitle from "../PageTitle";
import styles from "../../styles/fuelStation.module.css";
import common from "../../styles/common.module.css";
import { FormGroup, Button, Input, Label, Table, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FuelAllocations() {
  const [allocations, setallocations] = useState([]);
  const [user, setuser] = useState();
  const [startDates, setstartDates] = useState([]);
  const [selectedStartDate, setselectedStartDate] = useState("");
  const navigate = useNavigate();

  const navigateToNewAllocation = () => {
    navigate("/allocate-fuel");
  };

  const setStartDates = (data) => {
    let first = true;
    data.map((d) => {
      if (!startDates.includes(d.startDate)) {
        startDates.push(d.startDate);
        if (first) {
          setselectedStartDate(d.startDate);
          first = false;
        }
      }
    });
  };

  const getAllocations = async (id) => {
    await axios
      .get(`http://localhost:8070/fuelAllocations/${id}`)
      .then((res) => {
        setallocations(res.data.data);
        setStartDates(res.data.data);
      })
      .catch((err) => {
        alert("Something went wrong");
      });
  };

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("fsUser"));
    if (userData == null || userData === undefined || userData === "") {
      navigate("/fuel-station-login");
    } else {
      setuser(userData);
      getAllocations(userData.stationId);
    }
  }, []);

  return (
    <div>
      <StationHeader />
      <PageTitle pageTitle={"Fuel Allocations"} />
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
            <Row>
              <Col xs={4}>
                <Label>Allocations for week starting from : </Label>
              </Col>
              <Col>
                <Input
                  id="search"
                  name="search"
                  className={common.searchInput}
                  type="select"
                  value={selectedStartDate}
                  onChange={(e) => setselectedStartDate(e.target.value)}
                  required
                >
                  {startDates.length > 0 ? (
                    startDates.map((date) => {
                      return <option value={date}>{date}</option>;
                    })
                  ) : (
                    <option>--No Dates--</option>
                  )}
                </Input>
              </Col>
            </Row>
          </div>
          <div>
            <Button
              className={common.btnPrimary}
              onClick={navigateToNewAllocation}
            >
              New Allocation
            </Button>
          </div>
        </div>

        <Table bordered striped className={common.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>CUSTOMER NAME</th>
              <th>AMOUNT (LITRES)</th>
              <th>EFFECTIVE TIME PERIOD</th>
            </tr>
          </thead>
          <tbody>
            {allocations.length > 0 ? (
              allocations
                .filter((data) => {
                  if (data.startDate === selectedStartDate) {
                    return data;
                  }
                })
                .map((order, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{order.customerName}</td>
                      <td>{order.allocatedAmount}</td>
                      <td>
                        {"From " + order.startDate + " to " + order.endDate}
                      </td>
                    </tr>
                  );
                })
            ) : (
              <Label>No data to be displayed.</Label>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default FuelAllocations;
