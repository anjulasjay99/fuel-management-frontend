import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Icon from "react-crud-icons";
import Updatecomplaints from "./components/complaintManagement/updatecomplaints";
import FuelStationCreateAccount from "./components/FuelStation/FuelStationCreateAccount";
import FuelStationRegister from "./components/FuelStation/FuelStationRegister";
import Settings from "./components/FuelStation/Settings";
import Addcomplaint from "./components/complaintManagement/addcomplaint";
import StationLogin from "./components/FuelStation/StationLogin";
import ViewFuelStations from "./components/Admin/ViewFuelStations";
import Viewcomplaints from "./components/complaintManagement/viewcomplaints";
import CustomerRegistration from "./components/CustomerManagement/CustomerRegistration";
import CustomerProfile from "./components/CustomerManagement/CustomerProfile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/addcomplaint" element = {<Addcomplaint/>} exact/>
          <Route path="/viewcomplaint" element = {<Viewcomplaints/>} exact/>
          <Route path="/updatecomplaint/:id" element = {<Updatecomplaints/>} exact/>
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
          <Route path="/fuel-stations" element={<ViewFuelStations />} />
          <Route
            path="/customer-registration"
            element={<CustomerRegistration />}
          />
          <Route path="/customer-profile" element={<CustomerProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
