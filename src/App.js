import logo from "./logo.svg";
import "./App.css";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FuelStationCreateAccount from "./components/FuelStation/FuelStationCreateAccount";
import FuelStationRegister from "./components/FuelStation/FuelStationRegister";
import Settings from "./components/FuelStation/Settings";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="fuel-station-create-account"
            element={<FuelStationCreateAccount />}
          />
          <Route
            path="fuel-station-register"
            element={<FuelStationRegister />}
          />
          <Route path="fuel-station-settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
