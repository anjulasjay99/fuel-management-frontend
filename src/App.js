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
import FuelStationHome from "./components/FuelStation/FuelStationHome";
import FuelOrders from "./components/FuelStation/FuelOrders";
import PlaceFuelOrder from "./components/FuelStation/PlaceFuelOrder";
import AllocateFuel from "./components/Admin/AllocateFuel";
import FuelAllocations from "./components/Admin/FuelAllocations";
import FuelStationReport from "./components/FuelStation/FuelStationReport";
import FuelUsage from "./components/FuelStation/FuelUsage";
import AdminLogin from "./components/Admin/AdminLogin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/addcomplaint" element={<Addcomplaint />} exact />
          <Route path="/viewcomplaint" element={<Viewcomplaints />} exact />
          <Route
            path="/updatecomplaint/:id"
            element={<Updatecomplaints />}
            exact
          />
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
          <Route path="/fuel-station-home" element={<FuelStationHome />} />
          <Route path="fuel-orders" element={<FuelOrders />} />
          <Route path="/place-order" element={<PlaceFuelOrder />} />
          <Route path="/allocate-fuel" element={<AllocateFuel />} />
          <Route path="/fuel-allocations" element={<FuelAllocations />} />
          <Route
            path="/customer-registration"
            element={<CustomerRegistration />}
          />
          <Route path="/customer-profile" element={<CustomerProfile />} />
          <Route path="/fuel-report" element={<FuelStationReport />} />
          <Route path="/fuel-usages" element={<FuelUsage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
