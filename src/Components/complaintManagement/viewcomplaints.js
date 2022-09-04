import React,{useEffect,useState} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from "react-crud-icons";

const Viewcomplaints = () => {

  const [coomplaints,setComplaints] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8070/complaints").then((response)=>{     
        console.log(response.data)
        setComplaints(response.data)
    })
  },[])

  

  return (
    
    <>
    <style>
    
    </style>
     <div style={{marginTop:"40px"}}>
        <h2 style={{textAlign: "left"}}>My Complaints</h2>
        </div>
        <div style={{backgroundColor: '#ff762e',textalign: 'left', width: '100%', height: '2px'}}></div>
    <div className='container-xl' style={{  padding: "2rem 0rem",alignItems:"center",justifyContent:"center",borderradius: '5px 5px 0 0'}}>
    <div className='row'>
    <div className='col-12'>
    <table className="table" style={ {minwidth: "100px",}}>
  <thead  style={{backgroundColor: '#082344',color: 'white',textalign: 'left',fontweight: 'bold'}}>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Email</th>
      <th scope="col">Date Of Complaint</th>
      <th scope="col">Reason</th>
      <th scope="col">Complaint Details</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  
  {coomplaints.map((data,index)=>{
    console.log(data)
       
        return(
          <tr style={{}}>
          <td>{coomplaints.indexOf(data)+1}</td>
          <td>{data.email}</td>
          <td>{data.dateofComplaint}</td>
          <td>{data.reason}</td>
          <td>{data.complaintDetails}</td>
          <td>    
          </td>
        </tr>
        )
      })}
  </tbody>
</table>
    </div>
    </div>  
    
  </div>
     </>
    
        
  )
}

export default Viewcomplaints