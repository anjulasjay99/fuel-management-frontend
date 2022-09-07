import { useState , useEffect } from "react";
import PageTitle from "../PageTitle";
import styles from "../../styles/fuelStation.module.css";
import common from "../../styles/common.module.css";
import styles2 from "../../styles/cusprofile.module.css";
import { ImProfile } from "react-icons/im";
import { FaCar } from "react-icons/fa";
import UserInfoForm from "./UserInfoForm";
import VehicleInfoForm from "./VehicleInfoForm";
import Header from "../Common/Header";
import { Button, Form, FormGroup, Label, Input , Row , Col , ButtonGroup  } from "reactstrap";
function CustomerProfile(){

    const [userClick , setUserClick] = useState(true);


    function ProfileClick() {
        setUserClick(!userClick);
    }
    return(
        <div>
            <Header/>
            <PageTitle pageTitle="MY PROFILE" />
            <div className="container" style={{marginTop : "5rem" , height : "100%"}}>
                <Row>
                    <Col md= {6}>
                        <Row md = {6}>
                            
                            <div className={common.card_div} onClick={() => ProfileClick()}>
                                <div>
                                    <ImProfile className={common.card_icon} />
                                </div>
                                <div>
                                    <h4>Personal Info</h4>
                                </div>
                            </div>
                        </Row>
                        <Row md = {6}>
                        <div className={common.card_div} onClick={() => ProfileClick()}>
                                <div>
                                    <FaCar className={common.card_icon} />
                                </div>
                                <div>
                                    <h4>Code and Vehicle Info</h4>
                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                    {/* Detail type to be displayed */}
                    {/* <UserInfoForm/> */}
                        {/* <VehicleInfoForm/> */}
                        {userClick ? <UserInfoForm/> : <VehicleInfoForm/>  }
                    </Col>
                </Row>
            </div>

            <div className={styles2.fuel_container}>
                <h1>Available Fuel Quota : 20 l</h1>
            </div>
        </div>
    );

}

export default CustomerProfile;