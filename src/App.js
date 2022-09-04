import { React } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Viewcomplaints from "./Components/complaintManagement/viewcomplaints";
import FuelStationCreateAccount from "./Components/FuelStation/FuelStationCreateAccount"
import FuelStationRegister from './Components/FuelStation/FuelStationRegister'
import StationLogin from "./Components/FuelStation/StationLogin"
import Settings from "./Components/FuelStation/Settings"
import Addcomplaint from './Components/complaintManagement/addcomplaint.js'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/addcomplaint" element = {<Addcomplaint/>} exact/>
          <Route path="/viewcomplaint" element = {<Viewcomplaints/>} exact/>
          <Route
            path="/fuel-station-create-account"
            element={<FuelStationCreateAccount />}
          />
          <Route
            path="/fuel-station-register"
            element={<FuelStationRegister />}
          />
          <Route path="/fuel-station-settings" element={<Settings />} />
          <Route path="/fuel-station-login" element={<StationLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
