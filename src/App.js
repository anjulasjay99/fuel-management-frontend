import  { React} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addcomplaint from "./Components/complaintManagement/addcomplaint";


export default function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/addcomplaint" element = {<Addcomplaint/>} exact/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
