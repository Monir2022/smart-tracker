//NPM packages
import { useContext, useState } from "react";

//Project file
import { LanguageContext } from "../state/LanguageContext";

export default function Language() {
  const { languageKey, changeLanguage } = useContext(LanguageContext);

  const languageOptions = languageKey.map((option) => {
    return (
      <option key={option} value={option}>
        {option}
      </option>
    );
  });

//Method
function handleSelect(event){
  changeLanguage(event.target.value)
}
  

  return (
    <>
      <select onChange={handleSelect} name="cars" id="cars">
        {languageOptions}
      </select>
    </>
  );
}
