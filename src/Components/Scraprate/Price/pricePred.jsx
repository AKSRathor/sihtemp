import React, { useState } from 'react';
import './pricePred.css'
import photo from "../../assets/form.png";
function Price() {
  const [formData , setFormData] = useState({
    name: '',
    cost: '',
    age: '',
  });

  const [priceCont , setpriceCont] =useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
   const showprice=    ()=>{
    setpriceCont(true);
      }
  const handleSubmit = (e) => {
    e.preventDefault();
    showprice();
  };

  return (
    <div className='page'>
        <div className='formandimage'>
        <img className='titleimage' src={photo}></img>
    <form className="form" onSubmit={handleSubmit}>
        <div className='letusknow'>
            <h1 className=''>Let us know your product</h1>
            </div>
        <label>
            Enter name
        </label>
      <input
        placeholder="Enter your product name"
        className="input"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label>Enter cost</label>
      <input
        placeholder="Enter the cost price of product in which u bought it"
        className="input"
        type="text"
        name="cost"
        value={formData.cost}
        onChange={handleChange}
      />
      <label>Enter age</label>
      <input
        placeholder="Enter the age of product"
        className="input"
        type="text"
        name="age"
        value={formData.age}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
    
    </div>
    {priceCont && (
        <h2>Price of the product is 50</h2>
      )}
    </div>
  );
}

export default Price;
