import React, {useEffect, useState} from 'react'
import StationHeader from '../Common/StationHeader'
import PageTitle from '../PageTitle'
import styles from "../../styles/fuelStation.module.css";
import common from "../../styles/common.module.css";
import {useNavigate, Link} from 'react-router-dom'
import {Button, Form, FormGroup, Label, Input, InputGroupText, InputGroup} from 'reactstrap'
import axios from 'axios';

function PlaceFuelOrder() {
    const navigate = useNavigate();
    const [user, setuser] = useState()
    const [type, settype] = useState('OCTANE 92')
    const [amount, setamount] = useState(0)
    const [timeOfDelivery, settimeOfDelivery] = useState('')

    const submit = (e) => {
        e.preventDefault();
        const data = {
            stationId : user.stationId,
            type,
            amount, 
            timeOfDelivery,
            email : user.email,
            address : user.address,
            province : user.province,
            city : user.city,
            zipCode: user.zipCode,
            contactNo : user.contactNo,
            payment : 0,
        }

        console.log(data);

        axios.post('http://localhost:8070/fuelOrders', data)
        .then((res) => {
            alert('Successful!')
        })
        .catch((err) => {
            alert(err)
        })
    }

    useEffect(() => {
        const userData = JSON.parse(sessionStorage.getItem("fsUser"));
        if (userData == null || userData === undefined || userData === "") {
            navigate("/fuel-station-login");
        } else {
            setuser(userData);
        }
    }, [])

    return (
    <div>
        <StationHeader />
        <PageTitle pageTitle={'Order Fuel'} />
        <div style={{display : 'flex', flexDirection : 'column', alignItems : 'center'}}>
        <div className={styles.createAccForm}>
          <h3>Order Fuel</h3>
          <br />
          <Form onSubmit={(e) => submit(e)} style={{width: '500px'}}>
            <FormGroup>
              <Label for="email">Type*</Label>
                <Input
                    id="fuelType"
                    name="fuelType"
                    type="select"
                    value={type}
                    onChange={(e) => settype(e.target.value)}
                    required
                >
                    <option value="OCTANE 92">OCTANE 92</option>
                    <option value="SUPER DIESEL">SUPER DIESEL</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
            <Label for="amount">Amount*</Label>
                <InputGroup>
                    <Input 
                        type="number" 
                        placeholder="1000" 
                        min={100}
                        value={amount} 
                        onChange={(e) => setamount(e.target.value)}
                    />
                    <InputGroupText>Litres</InputGroupText>
                </InputGroup>
            </FormGroup>
            <FormGroup>
                <Label for="exampleDate">Time of Delivery*</Label>
                <Input
                    id="exampleDate"
                    name="date"
                    placeholder="date placeholder"
                    type="date"
                    value={timeOfDelivery}
                    onChange={(e) => settimeOfDelivery(e.target.value)}
                    required
                />
            </FormGroup>
            <Label className={styles.subTitle}>Location & Contact Information</Label>
            <div className={styles.infoSection}>
                <Label className={styles.name}>Location</Label>
                <Label className={styles.value}>
                    Alliance Enterprises, 43 Old Negombo Rd,
                    Kanuwana, Ja - Ela, Western Province, 11350
                </Label>
            </div>
            <div className={styles.infoSection}>
                <Label className={styles.name}>Contact No.</Label>
                <Label className={styles.value}>
                    01122727229
                </Label>
            </div>
            <div className={styles.infoSection}>
                <Label className={styles.name}>Email</Label>
                <Label className={styles.value}>
                    balal@gmail.com
                </Label>
            </div>
            <br/>
            <Label>You can change these information from <Link to='/fuel-station-settings' className={styles.edit}>settings</Link></Label><br/>
            <Label style={{fontSize : '22px', fontWeight : 'bold'}}>Payment : LKR 69, 000, 000.00</Label><br/>
            
            <div style={{
                    width : '100%',
                    display: 'flex',
                    flexDirection : 'row',
                    justifyContent : 'flex-end'
                }}>
                <Button
                    className={common.btnSecondary}
                    style={{
                        marginTop: "30px",
                        marginBottom: "10px",
                        marginRight : '10px'
                    }}
                    onClick={() => navigate('/fuel-orders')}
                >
                    Cancel
                </Button>
                <Button
                    className={common.btnPrimary}
                    style={{
                        marginTop: "30px",
                        marginBottom: "10px",
                    }}
                >
                    Confirm
                </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
    )
}

export default PlaceFuelOrder