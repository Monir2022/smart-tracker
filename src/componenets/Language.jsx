//NPM packages
import { useContext, useState }  from 'react';
import { LanguageContext } from "../state/LanguageContext";
//Project file


export default function Language() {
    const {languageKey, changeLanguage} = useContext(LanguageContext);
  
    const languageOptions= languageKey.map(option=>{
        return <option key={option} value={option}>{option}</option>
        })

    const handleSelect = (event) => changeLanguage(event.target.value)
    

  return (
      <>
      <select onChange={handleSelect} name="cars" id="cars">
        {languageOptions}
      </select>
      </>
  );
}
