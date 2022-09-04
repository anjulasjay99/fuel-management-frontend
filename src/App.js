import { React } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FuelStationCreateAccount from "./components/FuelStation/FuelStationCreateAccount";
import FuelStationRegister from "./components/FuelStation/FuelStationRegister";
import Settings from "./components/FuelStation/Settings";
import Addcomplaint from "./components/complaintManagement/addcomplaint";
import StationLogin from "./components/FuelStation/StationLogin";
import ViewFuelStations from "./components/Admin/ViewFuelStations";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/fuel-station-create-account"
            element={<FuelStationCreateAccount />}
          />
          <Route
            path="/fuel-station-register"
            element={<FuelStationRegister />}
          />
          <Route path="/fuel-station-settings" element={<Settings />} />
          <Route path="/addcomplaint" element={<Addcomplaint />} exact />
          <Route path="/fuel-station-login" element={<StationLogin />} />
          <Route path="/fuel-stations" element={<ViewFuelStations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
