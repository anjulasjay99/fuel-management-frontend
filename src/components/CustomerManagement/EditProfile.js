import { useState , useEffect } from "react";
import styles from "../../styles/fuelStation.module.css";
import common from "../../styles/common.module.css";


import { Button, Form, FormGroup, Label, Input , Row , Col , ButtonGroup  } from "reactstrap";

function EditProfile(){

    const [email, setemail] = useState("");
    const [name, setname] = useState("");
    const [surname, setsurname] = useState("");
    const [telNo, setTelNo] = useState("");

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
                        disabled
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
                        <Button className={common.btnSecondary} style={{width:"100%"}}>Edit</Button>
                    </ButtonGroup>
        </div>
    );
}

export default EditProfile;