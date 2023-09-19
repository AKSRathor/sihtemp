import React, { useEffect } from 'react'
import sellHis from "./SellHis.module.css"
import SellHistoryCards from './SellHistoryCards'
import Sidebar from '../Sidebar'
import dash from "../Dashboard.module.css"

const sellingHistory = [
  {
    bookedOn: "15 September 2023",
    bookPrice: "₹540",
    bookTo: "Keshav Kumar",
    bookImg: "https://www.buschsystems.com/resource-center/images/uploads/page/how-to-address-the-growing-concern-of-disposing-e-waste_template_1800x1200_header-image.jpg",
    bookP: "Samsung Electronic Television with all components and accessories",

  },
  {
    bookedOn: "25 September 2023",
    bookPrice: "₹50",
    bookTo: "Amit",
    bookImg: "https://www.cultofmac.com/wp-content/uploads/2016/01/earpods.jpg",
    bookP: "Apple earphone",

  },
  {
    bookedOn: "30 September 2023",
    bookPrice: "₹2065",
    bookTo: "Keshav Kumar",
    bookImg: "https://www.take3.org/wp-content/uploads/2018/12/51236177_422196448524159_1498457005164068864_n.jpg",
    bookP: "Realme Waste mobile"

  }

]

const SellingHistory = (props) => {
  useEffect(() => {

    props.setSetsideState(2)
    return () => {

    }
  }, [])
  return (
    <>
      <div className={dash.dash3}>
        <Sidebar setsideState={props.setsideState} />

        <div className={dash.rightPortalDash3}>
          <div className={sellHis.sellInsidePortal3}>
            <div className={sellHis.sellPortalUpperSection3}>
              <div className={sellHis.sellPortalUSecH}><h1 className={sellHis.sellPortalUSecHtag}>Your Selling History</h1></div>
              <div className={sellHis.sellPortalUSecS}>
                <label class="relative block">
                  <span class="sr-only">Search</span>
                  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <i style={{ color: "black" }} class="fa-solid fa-magnifying-glass"></i>
                  </span>
                  <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" autocomplete="off" />
                </label>
              </div>

            </div>
            <div className={sellHis.allSellingCards3}>
              {sellingHistory.map((i) => {
                return <SellHistoryCards bookedOn={i.bookedOn} bookPrice={i.bookPrice} bookTo={i.bookTo} bookImg={i.bookImg} bookP={i.bookP} />
              })}

            </div>



          </div>
        </div>
      </div>
    </>
  )
}

export default SellingHistory