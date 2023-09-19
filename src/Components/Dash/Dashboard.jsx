import React from 'react'
import Sidebar from './Sidebar'
import SellingHistory from './SellHistory/SellingHistory'
import dash from "./Dashboard.module.css"
import Profile from './Profile/Profile'
import Notification from './Notification/Notification'
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";

const Dashboard = () => {
  return (
    <div className={dash.dash3}>
     
      <div className={dash.rightPortalDash3}>

      </div>
    </div>
  )
}

export default Dashboard