import React, { useEffect } from 'react'
import "./Notification.css"
import NotiCard from './NotiCard'
import Sidebar from '../Sidebar'
import dash from "../Dashboard.module.css"
const NotiInf = [
    {
        topic: "Earphones booking confirmed ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis veniam cupiditate temporibus autem consequuntur, sequi ullam eius maxime fuga ab velit, corrupti, exercitationem error? Perspiciatis iste minima error ut quaerat!",

    },
    {
        topic: "Product 5 updates",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis veniam cupiditate temporibus autem consequuntur, sequi ullam eius maxime fuga ab velit, corrupti, exercitationem error? Perspiciatis iste minima error ut quaerat!",

    },
    {
        topic: "Samsung Product Booking failed",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis veniam cupiditate temporibus autem consequuntur, sequi ullam eius maxime fuga ab velit, corrupti, exercitationem error? Perspiciatis iste minima error ut quaerat!",

    },
    {
        topic: "Boat watch sold successfully",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis veniam cupiditate temporibus autem consequuntur, sequi ullam eius maxime fuga ab velit, corrupti, exercitationem error? Perspiciatis iste minima error ut quaerat!",

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