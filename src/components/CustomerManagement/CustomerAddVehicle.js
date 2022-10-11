import { useState , useEffect } from "react";
import styles from "../../styles/fuelStation.module.css";
import common from "../../styles/common.module.css";
import styles2 from "../../styles/customer.module.css"
import axios from "axios";
import Header from "../Common/Header";
import PageTitle from "../PageTitle";
import { Button, Form, FormGroup, Label, Input , Row , Col , FormText  } from "reactstrap";
function AddVehicle(){

    const [vehicleType, settype] = useState("");
    const [vehicleChassis, setchassis] = useState("");
    const [vehicleNumber, setnumplate] = useState("");

    const email = "shehan@gmail.com"
    function submit(){
        const Newvehicle = {
          vehicleType,
          vehicleChassis,
          vehicleNumber
        }
        axios.post(`http://localhost:8070/customers/addVehicle/${email}`, Newvehicle).then((res) =>{
          console.log(res);
          // Add Toast
        }).catch((err) =>{
          console.log(err);
        });
    }


    return(
        <div>
          <Header/>
          <PageTitle pageTitle="Add Vehicle" />
            <div className={styles2.loginWrap}>
            <FormGroup>
                <Label for="type">Type</Label>
                <Input
                  style={{
                        width: "500px",
                        marginBottom: "10px",
                        }}
                  id="type"
                  className={styles.input}
                  name="type"
                  placeholder="Enter vehicle type. Ex : Car"
                  type="text"
                  value={vehicleType}
                  onChange={(e) => settype(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="chassis">Chassis No.</Label>
                <Input
                                  style={{
                                    width: "500px",
                                    marginBottom: "10px",
                                    }}
                  id="chassis"
                  className={styles.input}
                  name="chassis"
                  placeholder="Enter Chassis Number"
                  type="text"
                  value={vehicleChassis}
                  onChange={(e) => setchassis(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="numplate">Vehicle Number Plate</Label>
                <Input
                                  style={{
                                    width: "500px",
                                    marginBottom: "10px",
                                    }}
                  id="numplate"
                  className={styles.input}
                  name="numplate"
                  placeholder="Enter Vehicle Number plate. Ex : CAP-3432"
                  type="text"
                  value={vehicleNumber}
                  onChange={(e) => setnumplate(e.target.value)}
                  pattern="^([a-zA-Z]{1,3}|((?!0*-)[0-9]{1,3}))-[0-9]{4}(?<!0{4})"
                  required
                />
              </FormGroup>
              <Button
                className={common.btnPrimary}
                onClick={submit}
                style={{
                  width: "500px",
                  marginTop: "30px",
                  marginBottom: "10px",
                }}
              >
                Add Vehicle
              </Button>
            </div>

        </div>
    )
}

export default AddVehicle;