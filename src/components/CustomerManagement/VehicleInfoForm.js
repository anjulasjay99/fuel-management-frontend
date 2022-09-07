import { useState , useEffect } from "react";
import styles from "../../styles/fuelStation.module.css";
import common from "../../styles/common.module.css";


import { Button, Form, FormGroup, Label, Input , Row , Col , ButtonGroup  } from "reactstrap";
function VehicleInfoForm(){

    const [code, setcode] = useState("");
    const [type, settype] = useState("");
    const [vehicleNo, setVehicleNo] = useState("");
    const [chassisNo, setChassisNo] = useState("");

    
    return(
        <div>
            <FormGroup>
                        <Label for="name">Personal Code</Label>
                        <Input
                        id="code"
                        className={styles.input}
                        name="code"
                        placeholder="QR Code"
                        type="text"
                        value={code}
                        onChange={(e) => setcode(e.target.value)}
                        required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="name">Vehicle Type</Label>
                        <Input
                        id="type"
                        className={styles.input}
                        name="type"
                        placeholder="Car"
                        type="text"
                        value={type}
                        onChange={(e) => settype(e.target.value)}
                        required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="name">Vehicle Number</Label>
                        <Input
                        id="vehicleNo"
                        className={styles.input}
                        name="vehicleNo"
                        placeholder="CAP 4985"
                        type="text"
                        value={vehicleNo}
                        onChange={(e) => setVehicleNo(e.target.value)}
                        required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="telNo">Chassis Number</Label>
                        <Input
                        id="chassisNo"
                        className={styles.input}
                        name="chassisNo"
                        placeholder="0763545432"
                        type="text"
                        value={chassisNo}
                        onChange={(e) => setChassisNo(e.target.value)}
                        required
                        />
                    </FormGroup>
                    
                        <button className={common.btnPrimary} style={{float:"right"}}>Add Vehicle</button>
           
        </div>
    );
    
}

export default VehicleInfoForm;