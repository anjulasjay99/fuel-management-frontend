
import { useState } from 'react';
import axios from 'axios';
import React from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form'
import "../../Css/Addcomplaint.css"
import PageTitle from '../PageTitle';
import ComplaintHeader from './complaintHeader';

function Addcomplaint(){

    const [email, setemail] = useState("");
    const [dateofComplaint, setdateofComplaint] = useState("");
    const [reason, setreason] = useState("Issue in the shed");
    const [complaintDetails, setcomplaintDetails] = useState("");
    // const [handletextarea, sethandletextarea] = useState(false)
    const [sucessfull, setSucessfull] = useState(false);
    // function Validate(complaintDetails){
    //   console.log(complaintDetails.length)
    //   if(complaintDetails.length>=10){
    //       sethandletextarea(true)
    //   }
    // }


     function  submitComplaint(e){
        e.preventDefault();
        // console.log(complaintDetails.length)
        if(complaintDetails.length>=10){   
              setSucessfull(false) 
              const newComplaint = {
                email,
                dateofComplaint,
                reason,
                complaintDetails
              };
              console.log(newComplaint)
               axios
                .post("http://localhost:8070/complaints", newComplaint)
                .then((res) => {
                  console.log(res.data)  
                  setemail("");
                  setdateofComplaint("");
                  setreason("");
                  setcomplaintDetails("");
                  setSucessfull(false);
                  alert("Complaint Added");
                })
                .catch((err) => {
                  alert(err);
                });
              
        }else{
          setSucessfull(true)
          //alert("Please enter more than 10 characters.")
        }
     }

    function clear(){
 
        setemail("");
        setdateofComplaint("");
        setreason("");
        setcomplaintDetails("");
        setSucessfull(false)
    }

    return(
      
        <>
        <ComplaintHeader/>
        <PageTitle pageTitle="Add New Complaint"/> 
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
  <form onSubmit={submitComplaint} >
  <div class="form-group">
    <label for="exampleFormControlInput1" style={{float:"left"}}>Email </label>
    <input  value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" title="follow requested format Ex:([name@example.com])" pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$' required="required" />
  </div>
  <br></br>
  <div class="form-group">
    <label for="exampleFormControlInput1" style={{float:"left"}}>Date Of Complaint</label>
    <input value={dateofComplaint} onChange={(e)=>{setdateofComplaint(e.target.value)}}  type="date" class="form-control" id="exampleFormControlInput1" required/>
  </div>
  <br></br>
  <div class="form-group">
    <label for="exampleFormControlSelect1" style={{float:"left"}}>Reason</label>
    <select value={reason} onChange={(e)=>{setreason(e.target.value)}} class="form-control form-select" required>
    <option>Issue in the shed</option>
    <option>Issue in the Queue</option>
    <option>Other</option>
 </select>
  </div>
  <br></br>
  <div class="form-group">
    <label for="exampleFormControlTextarea1" style={{float:"left"}}>Complaint Details</label>
    <textarea value={complaintDetails} onChange={(e)=>{setcomplaintDetails(e.target.value)}} class="form-control" id="exampleFormControlTextarea1"  rows="3" placeholder="Please enter your message briefly."  required></textarea>
    <div>
              { sucessfull !== false &&
                  <p style={{color:"red",float:"left"}}>Please enter more than 10 letters</p>
               }
      </div>
  </div>
      
          
      
  <br></br> <br></br>
  <div class="form-group">
    
  <button style={{width : "100%", backgroundColor: "#ff762e",}} type="submit"  className="btn btn-primary  ">Add Complaint</button>
  
  <button style={{width : "100%", backgroundColor: " #082344",marginTop:"10px"}}  onClick={()=>{clear()}} className="btn btn-primary ">Reset</button>
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
