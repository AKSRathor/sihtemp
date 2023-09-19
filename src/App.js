import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dash/Dashboard';
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import Profile from './Components/Dash/Profile/Profile';
import SellingHistory from './Components/Dash/SellHistory/SellingHistory';
import Notification from './Components/Dash/Notification/Notification';
import dash from "./Components/Dash/Dashboard.module.css"
import Sidebar from './Components/Dash/Sidebar';
import { useState } from 'react';
import Home from './Components/Home/Home';
import { Navbar } from './Components/Home';
import ScrapRate from './Components/Scraprate/Pages/ScrapRate';
import Price from './Components/Scraprate/Price/pricePred';
// import { Navbar } from './Components/Scraprate/Navbar/Navbar';
// import { Navbar2 } from './Components/Scraprate/Navbar/Navbar'

function App() {
  
  const [setsideState, setSetsideState] = useState(1)
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        
            <Routes>
              
              <Route exact path="/" element={<Home setsideState = {setsideState} setSetsideState = {setSetsideState} />} />
              <Route exact path="/pricepred" element={<Price />} />
              <Route exact path="/Scraprate" element={<ScrapRate />} />
              <Route exact path="/Profile" element={<Profile setsideState = {setsideState} setSetsideState = {setSetsideState} />} />
              <Route exact path="/sellHis" element={<SellingHistory setsideState = {setsideState} setSetsideState = {setSetsideState} />} />
              <Route exact path="/notification" element={<Notification setsideState = {setsideState} setSetsideState = {setSetsideState} />} />
            </Routes>

          {/* </div> */}

        {/* </div> */}



      </BrowserRouter>


    </div>
  );
}

export default App;
