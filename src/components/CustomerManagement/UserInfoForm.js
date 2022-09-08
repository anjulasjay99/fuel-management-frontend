import { useState , useEffect } from "react";
import axios from "axios";
import styles from "../../styles/fuelStation.module.css";
import common from "../../styles/common.module.css";
import EditProfile from "./EditProfile";

import { Button, Form, FormGroup, Label, Input , Row , Col , ButtonGroup , Modal , ModalBody , ModalHeader   } from "reactstrap";

function UserInfoForm(){

    const [modal , setModal] = useState(false);
    const [email, setemail] = useState("shehan@gmail.com");
    const [name, setname] = useState("");
    const [surname, setsurname] = useState("");
    const [telNo, setTelNo] = useState("");


    useEffect(() =>{
        console.log(email);
        axios.get("http://localhost:8070/customers/",  email ).then((res) =>{
            console.log(res.data);
        }).catch((err) =>{
            console.log(err);
        })
    })

    function toggle(){
        setModal(!modal);
    }

    const unregister = (cusemail) => {
        if (
            window.confirm(
                "Are you sure that you want to unregister ?"
            )
        )
        {
            const email = { cusemail }
            axios.delete(`http://localhost:8070/customers/unregister` , email).then((res) =>{
                console.log(res);
                // Navigate to Reg Page
            }).catch((err) =>{
                console.log(err);
            });
        }
    }
    return(
        <div>
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
                    <ButtonGroup>
                        <Button color="danger" onClick={() =>{
                            unregister(email);
                        }}>Unregister</Button>
                        <Button className={common.btnSecondary} onClick={toggle}>Edit</Button>
                    </ButtonGroup>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>
                            Edit Profile
                        </ModalHeader>
                        <ModalBody>
                            <EditProfile/>
                        </ModalBody>

                    </Modal>
        </div>
    );
    
}

export default UserInfoForm;