
import { useState } from 'react';
import axios from 'axios';
import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { FaExclamationTriangle } from 'react-icons/fa';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form'
import "../../Css/Addcomplaint.css"
import { width } from '@mui/system';

function UpateBooking(){

    const [vehicleType, setvehicleType] = useState("");
    const [bookedDate, setbookedDate] = useState("");
    const [vehicleNo, setvehicleNo] = useState("");
    const [litres, setlitres] = useState("");
    const [fuelType, setfuelTypes] = useState("");
    const [stationName, setstationName] = useState("");
    const [stationCity, setstationCity] = useState("");

    function submitBooking(e){
        e.preventDefault();
    const newFuelBooking = {
        vehicleType,
        bookedDate,
        vehicleNo,
        litres,
        fuelType,
        stationName,
        stationCity
    };
    axios
      .post("http://localhost:8070/fuelBookings", newFuelBooking)
      .then((res) => {
        console.log(res.data)  
        setvehicleType("");
        setbookedDate("");
        setvehicleNo("");
        setlitres("");
        setfuelTypes("");
        setstationName("");
        setstationCity("");
      })
      .catch((err) => {
        alert(err);
      });
      alert("Booking Successfully Created");
    }

    return(
        <>
            <div style={{ marginTop: "40px" }}>
                <h2 style={{ textAlign: "center", fontWeight: "bold" }}>UPDATE ONLINE FUEL BOOKING</h2>
            </div>
            <div style={{ backgroundColor: '#ff762e', textalign: 'left', width: '100%', height: '6px' }}></div>
            <center>
                <div className="card" style={{
                    width: "50rem", padding: '1.5em .5em .5em', borderRadius: "2em",
                    borderStyle: 'solid',
                    borderColor: ' #ff762e', margin: "100px", padding: "50px", marginTop: "50px",
                    display: 'flex',
                    justifyContent: 'center',
                }} >
                    <div className="card-body">
                        <h3>RES - C000235 <FaExclamationTriangle style={{ marginLeft: "20px", marginBottom: "0px", color: "#ff9900" }} />
                            <button style={{
                                marginLeft: "10px", marginBottom: "16px", backgroundColor: "#ff9900", borderStyle: "none",
                                width: "90px", height: "30px", fontSize: "15px", fontWeight: "bold", color: "white", borderRadius: "0.5em"
                            }} > Pending </button>
                        </h3>

                        <hr />
                        <div>
                            <form onSubmit={submitBooking}>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1" style={{ float: "left", fontWeight: "bold" }}>Vehicle Type</label><br />

                                    <TextField required
                                        id="standard-select-currency"
                                        select
                                        label="Required"
                                        // value={currency}
                                        // onChange={handleChange}
                                        helperText="Please select the city" fullWidth
                                        variant="standard" style={{ float: "left", textAlign: "left" }} color="warning"
                                        value={vehicleType} onChange={(e) => { setvehicleType(e.target.value) }}
                                    >
                                        <option>Bike</option>
                                        <option value="1">Car</option>
                                        <option value="2">Van</option>
                                    </TextField>
                                </div> <br /><br /><br /><br />

                                <div class="form-group" >
                                    <label for="exampleFormControlInput1" style={{ float: "left", fontWeight: "bold" }}>Vehicle No. </label><br />
                                    <TextField
                                        required
                                        id="standard-required"
                                        label="Required"
                                        defaultValue="BCD-XXXX"
                                        variant="standard" color="warning" fullWidth
                                        value={vehicleNo} onChange={(e) => { setvehicleNo(e.target.value) }} style={{ float: "left" }}
                                    />
                                </div>
                                <br /> <br />  <br />

                                <div class="form-group">
                                    <label for="exampleFormControlInput1" style={{ float: "left", fontWeight: "bold" }}>Date</label>
                                    <input required value={bookedDate} onChange={(e) => { setbookedDate(e.target.value) }}
                                        type="date" class="form-control" id="exampleFormControlInput1" />
                                </div>
                                <br></br>
                                <label for="exampleFormControlInput1" style={{ float: "left", fontWeight: "bold" }}>Fuel Type</label><br />
                                <FormControl style={{ float: "left" }} value={fuelType} onChange={(e) => { setfuelTypes(e.target.value) }}>
                                    <FormLabel id="demo-radio-buttons-group-label" ></FormLabel>
                                    <RadioGroup required
                                        aria-labelledby="demo-radio-buttons-group-label"

                                        defaultValue="petrol"
                                        name="radio-buttons-group"
                                        row style={{ marginLeft: "1000" }}
                                    >
                                        <FormControlLabel value="petrol" control={<Radio />} label="Petrol" />
                                        <FormControlLabel value="diesel" control={<Radio />} label="Diesel" />
                                    </RadioGroup>
                                </FormControl>

                                <br /><br /><br />
                                <div class="form-group">

                                    <label for="exampleFormControlTextarea1" style={{ float: "left", fontWeight: "bold" }}>Litres</label><br />
                                    <TextField required
                                        id="standard-number"
                                        label="Required"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="standard" value={litres} onChange={(e) => { setlitres(e.target.value) }}
                                        style={{ float: "left" }} color="warning" fullWidth
                                    />
                                </div>
                                <br /><br /><br />
                                <div class="form-group">
                                    <TextField required
                                        id="standard-select-currency"
                                        select
                                        label="City"
                                        value={stationCity} onChange={(e) => { setstationCity(e.target.value) }}
                                        helperText="Please select the city"
                                        variant="standard" style={{ float: "left", width: "50%", textAlign: "left" }} color="warning"
                                    >
                                        <option>Ja - Ela</option>
                                        <option value="1">Moratuwa</option>
                                        <option value="2">Maharagama</option>
                                    </TextField>

                                    <TextField required
                                        id="standard-select-currency"
                                        select
                                        label="Filling Station Name"
                                        value={stationName} onChange={(e) => { setstationName(e.target.value) }}
                                        helperText="Please select the filling station" color="warning"
                                        variant="standard" style={{ marginLeft: "10px", width: "48%", float: "left", textAlign: "left" }}
                                    >
                                        <option>Ben Hewa Associates(pvt)ltd</option>
                                        <option value="1">Abeysekara Filling Station</option>
                                        <option value="2">Eheliyagoda Associates</option>
                                    </TextField>
                                </div> <br /><br /><br /><br /><br />

                                <div class="form-group">
                                    <button style={{ width: "100%", height: "60px", backgroundColor: "#ff762e", }} type="submit" className="btn btn-primary">EDIT</button>
                                    <br />
                                    <button style={{ width: "100%", height: "60px", marginTop: "10px", backgroundColor: "#b30000" }} type="submit" className="btn btn-primary">DELETE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </center>


        </>     
    );
}

export default UpateBooking;
