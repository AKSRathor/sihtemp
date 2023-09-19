import React from 'react'
import SellHis from "./SellHis.module.css"
import "./SellHisCard.css"
import Sidebar from '../Sidebar'
import dash from "../Dashboard.module.css"

const SellHistoryCards = (props) => {
    return (

        <div className="sellCard3">
            <div className="sellCardUpperSection3">
                <div className="cardUpperSectionLeft3">
                    <div className="SelltoCrd3">Booked On {props.bookedOn}</div>
                    <div className="SellPriceCrd3">{props.bookPrice}</div>
                    <div className="shipToCard3">Booked to {props.bookTo}</div>
                </div>
                <div className="cardUpperSectionRight3">
                    <div className="sellCardViewOrderDetails">View Order Details</div>
                </div>
            </div>
            <div className="bookConfirmDiv">
                <h1 className='sellCardHConfirm' >Booking Confirmed</h1>

            </div>
            <div className="sellCardBottomCard3">
                <div className="sellCardLeftSection3">
                    <div className="sellCardLeftImgSection3">
                        <img className='sellCardLeftImg3' src={props.bookImg} alt="" />
                    </div>
                    <div>
                        <p className="sellCardLeftP3">{props.bookP}</p>
                    </div>
                </div>
                <div className="sellCardBottomRightSection3">
                    <div className="mainSellCardBtn3">Track Booking</div>
                    <div className="AnotherSellCardBtn3">Cancel Booking</div>
                    <div className="AnotherSellCardBtn3">Edit Details</div>
                </div>
            </div>

        </div>
    )
}

export default SellHistoryCards