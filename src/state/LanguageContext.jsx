//NPM packages
import { createContext, useState } from "react";

export const LanguageContext = createContext();

export default function LanguageContextProvider(props) {
  const [data, setData] = useState({
    EN: {
      Home: "Home",
      Track: "Track",
      From: "From",
      Parcel_ID: "Parcel ID",
      Status: "Status",
      welcome: "Welcome to Smart Tracker",
      track_here: "Track Here",
      package_list: "Here are your packages",
      error_message: "Something went wrong",
    },

    SE: {
      Home: "Hem",
      Track: "Spåra",
      From: "Från",
      Parcel_ID: "Paket ID",
      Status: "Status",
      welcome: "Välkommen till Smart Tracker",
      track_here: "Spåra här",
      package_list: "Här är dina paket",
      error_message: "Någonting är fel",
    },
  });
  //Properties
  const [languageKey, setlanguageKey] = useState(Object.keys(data));
  const [currentLanguage, setCurrentLan] = useState(languageKey[0]);

  //Method
  function changeLanguage(language) {
    setCurrentLan(language);
  }
  //Property
  const values = {
    language: data[currentLanguage],
    languageKey: languageKey,
    changeLanguage: changeLanguage,
  };

  return (
    <LanguageContext.Provider value={values}>
      {props.children}
    </LanguageContext.Provider>
  );
}
