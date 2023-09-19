import React from 'react'
import sidebarStyle from "./Sidebar.module.css"
import { useState } from 'react'
import {
    Link
} from "react-router-dom";

const Sidebar = (props) => {
    // const [props.setsideState, setprops.setsideState] = useState(1)
    return (
        <nav className={sidebarStyle.sideMenu3} tabindex="0">
            <div className="sideMenuDiv3"></div>
            <ul className={sidebarStyle.sideBarUl3}>
                <header className={sidebarStyle.sideBarLi3}>
                    <img className={sidebarStyle.sideBarStyleImg} src="https://b.fssta.com/uploads/application/nba/headshots/1907.vresize.350.350.medium.58.png" />
                    <h2>John D.</h2>
                </header>
                <Link tabindex="0" to="/profile" className={`${props.setsideState === 1 ? sidebarStyle.hoverSide3 : sidebarStyle.empt3} ${sidebarStyle.sideBarLi3}`}><span>Profile</span></Link>
                <Link tabindex="0" to="/sellHis" className={`${props.setsideState === 2 ? sidebarStyle.hoverSide3 : sidebarStyle.empt3} ${sidebarStyle.sideBarLi3}`}><span>Selling History</span></Link>
                <Link tabindex="0" to="/notification" className={`${props.setsideState === 3 ? sidebarStyle.hoverSide3 : sidebarStyle.empt3} ${sidebarStyle.sideBarLi3}`}><span>Notification</span></Link>
                {/* <li tabindex="0" className="icon-settings"><span>Settings</span></li> */}
            </ul>
        </nav>
    )
}

export default Sidebar