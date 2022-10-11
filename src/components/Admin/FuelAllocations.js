import React, { useEffect, useState } from "react";
import StationHeader from "../Common/StationHeader";
import PageTitle from "../PageTitle";
import styles from "../../styles/fuelStation.module.css";
import common from "../../styles/common.module.css";
import {
  FormGroup,
  Button,
  Form,
  Label,
  Input,
  Table,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroupText,
  InputGroup,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminHeader from "../Common/AdminHeader";

function FuelAllocations() {
  const [allocations, setallocations] = useState();
  const [user, setuser] = useState();
  const [startDates, setstartDates] = useState([]);
  const [selectedStartDate, setselectedStartDate] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedVehicle, setselectedVehicle] = useState();
  const [pumpedAmount, setpumpedAmount] = useState(0);
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

  const getAllocations = async () => {
    await axios
      .get(`http://localhost:8070/fuelAllocations`)
      .then((res) => {
        setallocations(res.data.data);
        setselectedVehicle(res.data.data[0]);
        setStartDates(res.data.data);
      })
      .catch((err) => {
        alert("Something went wrong");
      });
  };

  const toggle = () => {
    setModal(!modal);
  };
  const show = (vehicle) => {
    setselectedVehicle(vehicle);
    setModal(true);
  };

  const reduceQuota = () => {
    const data = {
      customerId: selectedVehicle.customerId,
      vehicleNumber: selectedVehicle.vehicleNumber,
      pumpedAmount,
    };
    axios
      .post("http://localhost:8070/fuelAllocations/reduceQuota", data)
      .then((res) => {
        alert("success");
        getAllocations();
        setModal(false);
        setpumpedAmount(0);
      })
      .catch((err) => {
        alert("Error!");
      });
  };

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("adminUser"));
    if (userData == null || userData === undefined || userData === "") {
      navigate("/admin-login");
    } else {
      setuser(userData);
      getAllocations();
    }
  }, []);

  if (allocations === undefined) {
    <div>Loading...</div>;
  } else {
    return (
      <div>
        <AdminHeader />
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
                <th>VEHICLE NUMBER</th>
                <th>ALLOCATED AMOUNT (LITERS)</th>
                <th>AVAILABLE AMOUNT (LITERS)</th>
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
                        <td>{order.vehicleNumber}</td>
                        <td>{order.allocatedAmount}</td>
                        <td>{order.availableAmount}</td>
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
}

export default FuelAllocations;
