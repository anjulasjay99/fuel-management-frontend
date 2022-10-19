import { useState , useEffect } from "react";
import Header from "../Common/Header";
import PageTitle from "../PageTitle";
import styles from "../../styles/customer.module.css";
import axios from "axios";
function ViewVehicles() {

    const [ vehicles , setVehicles ] = useState([]);
    let email = sessionStorage.getItem("customer");

    function DeleteVehicle(id){
        console.log(id);
        if(
            window.confirm(
                    "Are you sure you want to remove the selected vehicle ?"
                )
        )

        {
            const vid = {
                id
            }
            console.log(vid);
            console.log(email);
            axios.delete(`http://localhost:8070/customers/removeVehicle/${email}` , vid ).then((res) =>{
                console.log("Deletion Successful");
            }).catch((err) =>{
                console.log(err);
            });
        }

    }
    useEffect(() =>{
        axios.get(`http://localhost:8070/customers/getVehicles/${email}`).then((res) =>{
            setVehicles(res.data.vehicles);
            console.log(res.data.vehicles);
        })
    },[])
    return(
        <div>
          <Header/>
          <PageTitle pageTitle="View Vehicles" />
          <div className={styles.TableContainer}>

          <table class="table table-hover">
            <thead style={{backgroundColor: '#082344',color: 'white',textalign: 'left',fontweight: 'bold'}}>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Type</th>
                    <th scope="col">Chassis Number</th>
                    <th scope="col">Number Plate</th>
                    <th scope="col">Fuel Quota</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {vehicles.map((vehicle , index) =>{
                    return(
                    <tr>
                        <th scope="row">{vehicles.indexOf(vehicle)+1}</th>
                        <td>{vehicle.vehicleType}</td>
                        <td>{vehicle.vehicleChassis}</td>
                        <td>{vehicle.vehicleNumber}</td>
                        <td>10 L</td>
                        <td><i onClick = {()=>
                            { DeleteVehicle(vehicle.vehicleId)}} 
                            class="fa fa-trash" aria-hidden="true"></i></td>
                    </tr>
                    )
                })}
                
            </tbody>
          </table>

          </div>
        </div>
    )
}

export default ViewVehicles;