import { useState,useEffect } from "react";
import axios from 'axios';
import React from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form'
import "../../Css/Addcomplaint.css"
import {useNavigate,useParams} from "react-router-dom"
import ComplaintHeader from "./complaintHeader";

const Updatecomplaints = () => {
  const [email, setemail] = useState("");
  const [dateofComplaint, setdateofComplaint] = useState("");
  const [reason, setreason] = useState("Issue in the shed");
  const [complaintDetails, setcomplaintDetails] = useState("");
  const {id} = useParams();

  useEffect(()=>{
    
    axios.get(`http://localhost:8070/complaints/get/${id}`).then((res)=>{
      
      console.log(res.data)
      setemail(res.data.email)
      setdateofComplaint(res.data.dateofComplaint)
      setreason(res.data.reason)
      setcomplaintDetails(res.data.complaintDetails)

    }).catch((err)=>{
      console.log(err)
    })
  
  },[])


  function UpdateComplaint(e){
    e.preventDefault();
    const newupdatedComplaint = {
        email,
        dateofComplaint,
        reason,
        complaintDetails
     }
     console.log(newupdatedComplaint)
     axios.post(`http://localhost:8070/complaints/update/${id}`,newupdatedComplaint).then((res)=>{
         console.log(res.status)
         e.target.reset();
     }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <>
    <ComplaintHeader/>
    <div style={{marginTop:"30px"}}>
    <h2 style={{textAlign: "left"}}>Update Complaint</h2>
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
   
    
    <div>
    <form >
      <div class="form-group">
      <label for="exampleFormControlInput1" style={{float:"left"}}>Email </label><br></br>
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
      <option>Issue in the Queue</option>
      <option>Other</option>
      </select>
      </div>
      <br></br>
      <div class="form-group">
      <label for="exampleFormControlTextarea1" style={{float:"left"}}>Complaint Details</label>
      <textarea value={complaintDetails} onChange={(e)=>{setcomplaintDetails(e.target.value)}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <br></br>
      <div class="form-group">

      <button onClick = {(event) =>{
                        UpdateComplaint(event)
                    }}style={{width : "100%", backgroundColor: "#ff762e",}} type="submit" className="btn btn-primary  ">Update Complaint</button>
      <br/>
      
      </div>

</form>

    </div>
   </div>
   
   </div>

   </center>
        
       
   </>     
  )
}

export default Updatecomplaints
