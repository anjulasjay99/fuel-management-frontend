import React, { useState, useEffect } from "react";
import PageTitle from "../PageTitle";
import axios from "axios";
import {
  Button,
  Table,
  Input,
  Label,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import common from "../../styles/common.module.css";
function ViewFuelStations() {
  const [data, setdata] = useState([]);
  const [modal, setModal] = useState(false);
  const [selecteStaion, setselecteStaion] = useState();

  const toggle = () => {
    setModal(!modal);
  };

  const show = (station) => {
    setselecteStaion(station);
    setModal(true);
  };
  useEffect(() => {}, []);

  const getStations = () => {
    axios
      .get("http://localhost:8070/fuelStations")
      .then((res) => {
        setdata(res.data.data);
      })
      .catch((e) => {
        alert(e);
      });
  };

  useEffect(() => {
    getStations();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: " center",
      }}
    >
      <PageTitle pageTitle="Fuel Stations" />
      <div style={{ width: "80%", marginTop: "50px" }}>
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
          />
          <FormGroup check>
            <Input type="checkbox" />
            <Label check>Organization</Label>
          </FormGroup>
          <FormGroup check>
            <Input type="checkbox" />
            <Label check>Type</Label>
          </FormGroup>
          <FormGroup check>
            <Input type="checkbox" />
            <Label check>Owner</Label>
          </FormGroup>
        </div>
        <Table bordered striped className={common.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Station ID</th>
              <th> Organization </th>
              <th>Address</th>
              <th>Owner</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((d, index) => {
                return (
                  <tr key={data.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{d.stationId}</td>
                    <td>{d.stationName}</td>
                    <td>
                      {d.address +
                        ", " +
                        d.city +
                        ", " +
                        d.province +
                        ", " +
                        d.zipCode}
                    </td>
                    <td>{d.ownerName}</td>
                    <td>{d.type}</td>
                    <td>
                      <Button
                        className={common.btnOutline}
                        onClick={() => show(d)}
                      >
                        View Details
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <label>No data to be displayed.</label>
            )}
          </tbody>
        </Table>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody style={{ width: "600px" }}>
          <div>
            <div></div>
            <div></div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            className={common.btnSecondary}
            onClick={toggle}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ViewFuelStations;
