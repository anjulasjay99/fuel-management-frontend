import { useState } from "react";
import Header from "../Common/Header";
import PageTitle from "../PageTitle";
import styles from "../../styles/customer.module.css"
import common from "../../styles/common.module.css";
import { Form, FormGroup, Label, Input , Button  } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function LoginCustomer(){

    const navigate = useNavigate();
    const [email , setemail] = useState("");
    const [password , setpassword] = useState("");
    const [user , setUser] = useState("");
    const [status , setStatus] = useState(true);

    function login() {
        axios.post("http://localhost:8070/customers/login" , {email,password}).then((res) =>{
            if(res.data.status === true){
            
                sessionStorage.setItem("customer" , email );
                alert("Login Succesful");
                navigate("/customer-profile");
            }
            else{
                alert("Check Credentials");
                
            }
        })
    }
    return(
        <>
            <Header/>
            <PageTitle pageTitle="Sign In" />
            <div className = {styles.loginWrap}>
                <div className = {styles.loginForm}>
                <Form>
                <FormGroup className={styles.form}>
                    <Label for="email">Email</Label>
                    <Input
                    id="email"
                    className={styles.input}
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    required
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                    id="password"
                    className={styles.input}
                    name="name"
                    placeholder="Enter your password"
                    type="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    required
                    />
                </FormGroup>
                <Button
                className={common.btnPrimary}
                onClick = {login}
                style={{
                  width: "500px",
                  marginTop: "30px",
                  marginBottom: "10px",
                }}
              >
                Sign In
              </Button>
              </Form>
            </div>
            
            </div>
        </>
    )
}

export default LoginCustomer;