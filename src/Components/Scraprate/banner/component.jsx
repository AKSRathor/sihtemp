import React from 'react'
// import titlep from './titlephoto.jpg'
import titlep from "../../assets/form.png"
import './component.css'
import { Link } from "react-router-dom";
export default function Component() {
  return (
    <div className='main'>
      <div className='in'>
        <h1 className='heading'>Predict price product</h1>
        <div className='textofheading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea expedita amet in odit neque doloribus eum adipisci porro saepe eius blanditiis aperiam tempora, nisi id pariatur sint aut, omnis tenetur?</div>
        <Link to = "/pricepred"><button className="button-73" role="button">Price Predict now</button></Link>
        </div>
      <div className='image'>
        <img className='photo bannerHero2' src={titlep}></img>
      </div>
      </div>
  )
}
