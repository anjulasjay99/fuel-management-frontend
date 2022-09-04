
import { useState } from 'react';
import axios from 'axios';
import React from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form'
import "../../Css/Addcomplaint.css"

function Addcomplaint(){

    const [email, setemail] = useState("");
    const [dateofComplaint, setdateofComplaint] = useState("");
    const [reason, setreason] = useState("Issue in the shed");
    const [complaintDetails, setcomplaintDetails] = useState("");

    function submitComplaint(e){
        e.preventDefault();
    const newComplaint = {
      email,
      dateofComplaint,
      reason,
      complaintDetails
    };
    axios
      .post("http://localhost:8070/complaints", newComplaint)
      .then((res) => {
        console.log(res.data)  
        setemail("");
        setdateofComplaint("");
        setreason("");
        setcomplaintDetails("");
      })
      .catch((err) => {
        alert(err);
      });
      alert("Complaint Added");
    }


    return(
        <>
        <div style={{marginTop:"40px"}}>
        <h2 style={{textAlign: "left"}}>Add New Complaint</h2>
        </div>
        <div style={{backgroundColor: '#ff762e',textalign: 'left', width: '100%', height: '2px'}}></div>
       <center>
       <div className="card" style={{width: "50rem",padding: '1.5em .5em .5em',borderRadius: "2em",
        borderStyle: 'solid',
        borderColor: ' #ff762e',margin:"100px",padding:"50px",
        display: 'flex',
        justifyContent: 'center',
        }} 
     >
        <div className="card-body">
       
        <p className="card-text" style={{textAlign: "left"}}>  Please Send us details about the inceident you would like to report. Our Complaint Center will analyze your complaint and take the appropriate measure in order that the reported situation will not oocur at any time the future.</p>
        <hr/> 
        <div>
        <form onSubmit={submitComplaint}>
  <div class="form-group">
    <label for="exampleFormControlInput1" style={{float:"left"}}>Email </label>
    <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <br></br>
  <div class="form-group">
    <label for="exampleFormControlInput1" style={{float:"left"}}>Date Of Complaint</label>
    <input value={dateofComplaint} onChange={(e)=>{setdateofComplaint(e.target.value)}}  type="date" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <br></br>
  <div class="form-group">
    <label for="exampleFormControlSelect1" style={{float:"left"}}>Reason</label>
    <select value={reason} onChange={(e)=>{setreason(e.target.value)}} class="form-control form-select">
    <option>Issue in the shed</option>
    <option value="1">Issue in the Queue</option>
    <option value="2">Other</option>
 </select>
  </div>
  <br></br>
  <div class="form-group">
    <label for="exampleFormControlTextarea1" style={{float:"left"}}>Complaint Details</label>
    <textarea value={complaintDetails} onChange={(e)=>{setcomplaintDetails(e.target.value)}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <br></br>
  <div class="form-group">
    
  <button style={{width : "100%", backgroundColor: "#ff762e",}} type="submit" className="btn btn-primary  ">Add Complaint</button>
  <br/><br/>
  <button style={{width : "100%", backgroundColor: " #082344",}} type="submit" className="btn btn-primary  ">Clear</button>
  </div>
 
</form>

        </div>
       </div>
       
       </div>

       </center>
            
           
       </>     
    );
}

export default Addcomplaint;