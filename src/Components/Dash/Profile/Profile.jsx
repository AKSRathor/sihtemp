import React, { useEffect, useState } from 'react'
import "./Profile.css"
import Sidebar from '../Sidebar'
import dash from "../Dashboard.module.css"

const prfDet = {
    firstName: "Ankit",
    lastName: "Kumar",
    phoneNo: "9999999999",
    email: "abc@email.com",
    ecoPts: "27",
    totalSold: "8",
    TotalEarn: "23586",
    wallet: "16586",

}


const Profile = (props) => {
    useEffect(() => {

        props.setSetsideState(1)
        return () => {

        }
    }, [])

    const [prfDetState, setPrfDetState] = useState(prfDet)
    const handleOnChangePrf = (e) => {
        if (editMode) {
            setPrfDetState({ ...prfDet, [e.target.name]: e.target.value })

        }
    }

    const handleOnEditClick = () => {
        setEditMode(true)
    }

    const handleOnSaveWithdraw = () => {
        setEditMode(false)
    }
    const [editMode, setEditMode] = useState(false)
    return (
        <>
            <div className={dash.dash3}>
            <Sidebar setsideState={props.setsideState} />

                <div className={dash.rightPortalDash3}>
                    <div className='profileSection3'>
                        <div className="mostUpperProfile3">
                            <h1>Profile</h1>
                        </div>
                        <div className="profileUpperSection3">
                            <div className="leftUpperProfile3">
                                <div className="rateProfile3"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                                <div className="profileEsold3">Total Sold: {prfDet.totalSold}</div>

                            </div>

                            <div className="profileWallet3">
                                <div className="prfWalletInside3">
                                    <i class="fa-solid fa-wallet profileWalletIco3"></i> <div className="prfBall3">
                                        ₹{prfDet.wallet}</div>

                                </div>
                            </div>
                        </div>
                        <div className="prfEdit3">
                            <div className="prfEditLeftSection3"></div>
                            <button onClick={handleOnEditClick} className="prfEditBtn3"><i class="fa-solid fa-pen-to-square"></i></button>
                        </div>

                        <table>
                            <tr className="profileTableTr3 profileNameTable3">
                                <td>Name: </td>
                                <td ><input type="text" name='firstName' onChange={handleOnChangePrf} value={prfDetState.firstName} class="w-full max-w-[160px] bg-white pl-2 text-base font-semibold border outline-0 border-slate-300 rounded-md" placeholder="First Name" id="" /></td>
                                <td > &nbsp;&nbsp;&nbsp;</td>
                                <td><input type="text" name='lastName' onChange={handleOnChangePrf} value={prfDetState.lastName} class="w-full max-w-[160px] bg-white pl-2 text-base font-semibold border outline-0 border-slate-300 rounded-md" placeholder="Last Name" id="" /></td>

                            </tr>
                            <tr className="profileTableTr3">
                                <td>Phone Number: </td>
                                <td >
                                    <input type="text" name='phoneNo' onChange={handleOnChangePrf} value={prfDetState.phoneNo} class="w-full max-w-[160px] bg-white pl-2 text-base font-semibold border outline-0 border-slate-300 rounded-md" placeholder="Phone Number" id="" />


                                </td>

                            </tr>
                            <tr className="profileTableTr3">
                                <td>Email: </td>
                                <td >
                                    <input type="email" name='email' onChange={handleOnChangePrf} value={prfDetState.email} class="w-full max-w-[160px] bg-white pl-2 text-base font-semibold border outline-0 border-slate-300 rounded-md" placeholder="Email" id="" />


                                </td>

                            </tr>
                            <tr className="profileTableTr3 profileTableTrTxtTd3">
                                <td className=''>Eco Points: </td>
                                <td className='profileTableTrTxtTd3'>
                                    {prfDet.ecoPts}EN


                                </td>

                            </tr>
                            <tr className="profileTableTr3">
                                <td className=''>Total Earning(Sold+Rewards): </td>
                                <td className='profileTableTrTxtTd3'>
                                    ₹{prfDet.TotalEarn}
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <button onClick={handleOnSaveWithdraw} class="w-40 h-12 bg-white cursor-pointer rounded-2xl border-2 border-[#107C10] shadow-[inset_0px_-2px_0px_1px_#107C10] group hover:bg-[#107C10] transition duration-100 ease-in-out">
                                        <span class="font-medium text-[#333] group-hover:text-white">{editMode ? "Save" : "Withdraw Funds"}</span>
                                    </button>
                                </td>

                            </tr>

                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;