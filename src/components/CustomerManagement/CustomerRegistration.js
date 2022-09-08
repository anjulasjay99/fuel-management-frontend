import { useState , useEffect } from "react";
import PageTitle from "../PageTitle";
import styles from "../../styles/fuelStation.module.css";
import common from "../../styles/common.module.css";
import { Button, Form, FormGroup, Label, Input , Row , Col , FormText } from "reactstrap";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
function CustomerRegistration() {

    const navigate = useNavigate();
    const [email, setemail] = useState("");
    const [name, setname] = useState("");
    const [surname, setsurname] = useState("");
    const [telNo, setTelNo] = useState("");
    const [vehicleType, settype] = useState("");
    const [vehicleChassis, setchassis] = useState("");
    const [vehicleNumber, setnumplate] = useState("");
    const [password, setpassword] = useState("");
    const [confPassword, setconfPassword] = useState("");
    const submit = (e) => {
      e.preventDefault();

      var vehicles = [vehicleType,vehicleChassis,vehicleNumber]
      const newCus = {
        email,
        name,
        surname,
        telNo,
        vehicles,
        password
      }
      axios
        .post("http://localhost:8070/customers/checkEmail", {
          email,
        })
        .then((res) => {
          if (res.data.status) {
            alert("An account with the same email exists!");
          } else {
            if (password === confPassword) {
              axios.post("http://localhost:8070/customers/register" , newCus ).then(() =>{
                // Toast
                e.target.reset();
              }).catch((err) =>{
                alert(err);
              })
            } else {
              alert("Password does not match!");
            }
          }
        })
        .catch((e) => {
          alert(e);
        });
    };
  

  
    return (
      <div>
        <PageTitle pageTitle="Registration" />
        <div className={styles.createAccWrapper}>
          <div className={styles.createAccForm}>
            <br />
            <Form onSubmit={(e) => submit(e)}>
              <h4>Personal Information</h4>
              <hr/>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  id="name"
                  className={styles.input}
                  name="name"
                  placeholder="Shehan"
                  type="text"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="name">Surname</Label>
                <Input
                  id="surname"
                  className={styles.input}
                  name="name"
                  placeholder="Silva"
                  type="text"
                  value={surname}
                  onChange={(e) => setsurname(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="name">Email</Label>
                <Input
                  id="email"
                  className={styles.input}
                  name="email"
                  placeholder="shehan@gmail.com"
                  type="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="telNo">Telephone Number</Label>
                <Input
                  id="telNo"
                  className={styles.input}
                  name="telNo"
                  placeholder="0763545432"
                  type="text"
                  value={telNo}
                  onChange={(e) => setTelNo(e.target.value)}
                  required
                />
              </FormGroup>

              <Row>
              <Col md={6}> 
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  id="password"
                  className={styles.input}
                  name="password"
                  placeholder="Enter a password"
                  type="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  pattern=".{8,}"
                  required
                />
                <FormText>Password must contain atleast 8 characters</FormText>
              </FormGroup>
              </Col> 
              <Col md={6}> 
              <FormGroup>
                <Label for="confPassword">Confirm Password</Label>
                <Input
                  id="confPassword"
                  className={styles.input}
                  name="password"
                  placeholder="Re-enter your passowrd"
                  type="password"
                  value={confPassword}
                  onChange={(e) => setconfPassword(e.target.value)}
                  pattern=".{8,}"
                  required
                />
              </FormGroup>
              </Col>
              </Row>    
              <h4>Vehicle Information</h4>
              <hr/>

              <FormGroup>
                <Label for="type">Type</Label>
                <Input
                  id="type"
                  className={styles.input}
                  name="type"
                  placeholder="Car"
                  type="text"
                  value={vehicleType}
                  onChange={(e) => settype(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="chassis">Chassis No.</Label>
                <Input
                  id="chassis"
                  className={styles.input}
                  name="chassis"
                  placeholder="NKE-232113"
                  type="text"
                  value={vehicleChassis}
                  onChange={(e) => setchassis(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="numplate">Vehicle Number Plate</Label>
                <Input
                  id="numplate"
                  className={styles.input}
                  name="numplate"
                  placeholder="CAP-3432"
                  type="text"
                  value={vehicleNumber}
                  onChange={(e) => setnumplate(e.target.value)}
                  required
                />
              </FormGroup>
              <Button
                className={common.btnPrimary}
                style={{
                  width: "500px",
                  marginTop: "30px",
                  marginBottom: "10px",
                }}
              >
                Register
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
}

export default CustomerRegistration;