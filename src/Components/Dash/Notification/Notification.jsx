import React, { useEffect } from 'react'
import "./Notification.css"
import NotiCard from './NotiCard'
import Sidebar from '../Sidebar'
import dash from "../Dashboard.module.css"
const NotiInf = [
    {
        topic: "Earphones booking confirmed ",
        desc: "our premium replacement for your damaged earphones, the Samsung Earbuds. These cutting-edge earbuds offer an unparalleled listening experience with crystal-clear sound quality and superior comfort. Here's why you should make the switch today:",

    },
    {
        topic: "Product 5 updates",
        desc: "Introducing the Xiaomi Restoration Project - your chance to breathe new life into a once-loved device. Here's why you should take the plunge: Affordable Tech Revival, Creative Freedom, Eco-Friendly Choice, Spare Parts Galore",

    },
    {
        topic: "Samsung Product Booking failed",
        desc: "Looking to upgrade your kitchen without breaking the bank? Say hello to the ultimate DIY project – our one-of-a-kind damaged Samsung fridge! This appliance offers an exciting opportunity to unleash your inner handyman or woman while saving big",

    },
    {
        topic: "Boat watch sold successfully",
        desc: "Have you ever dreamt of becoming a watchmaker, crafting timepieces with precision and passion? Now's your chance to embark on a horological adventure with our one-of-a-kind damaged Boat watch. This is not just a timepiece; it's a canvas for your creativity. ",

    }
]

const Notification = (props) => {
    useEffect(() => {

        props.setSetsideState(3)
        return () => {

        }
    }, [])
    return (
        <>
            <div className={dash.dash3}>
                <Sidebar setsideState={props.setsideState} />

                <div className={dash.rightPortalDash3}>
                    <div className='NotifcationDash3'>

                        <h1 className='notiUpdates'>Updates</h1>
                        <div className="notiCardsAll">
                            {NotiInf.map((i, index) => {
                                return <NotiCard key={index} topic={i.topic} desc={i.desc} />
                            })}

                        </div>


                    </div>
                </div>
            </div>
        </>

    )
}

export default Notification
