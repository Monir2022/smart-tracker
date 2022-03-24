//NPM packages
import React, { useContext, useState }  from 'react';
import { LanContext } from "../contexts/LanContext";
//Project file


export default function Language() {
    const {lanKey, changeLanguage} = useContext(LanContext);
  
    const lanOptions= lanKey.map(option=>{
        return <option key={option} value={option}>{option}</option>
        })

    const handleSelect = (event) => changeLanguage(event.target.value)
    

  return (
      <>
       <label htmlFor="cars">Language:</label>
      <select onChange={handleSelect} name="cars" id="cars">
        {lanOptions}
      </select>
      </>
  );
}
