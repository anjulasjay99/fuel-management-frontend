import  { React} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addcomplaint from "./Components/complaintManagement/addcomplaint";
import Viewcomplaints from "./Components/complaintManagement/viewcomplaints";


export default function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/addcomplaint" element = {<Addcomplaint/>} exact/>
          <Route path="/viewcomplaint" element = {<Viewcomplaints/>} exact/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
