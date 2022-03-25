import React, {createContext, useState} from "react";

export const LanContext=createContext()

export default function LanContextProvider(props) {
    const [data, setData]=useState({
        en:{
                Home:"Home",
                Track:"Track",
                From:"From",
                Parcel_ID:"Parcel ID",
                Status:"Status",
                welcome:"Welcome to Smart Tracker",
                track_here:"Track Here"
            },

        se:{
                Home:"Hem",
                Track:"spåra",
                From:"Från",
                Parcel_ID:"Paket ID",
                Status:"Status",
                welcome:"Välkommen till Smart Tracker",
                track_here:"Spår här"
            },
        bn:{
                Home:"প্রধান পাতা",
                Track:"ট্র্যাক",
                From:"প্রেরক",
                Parcel_ID:"পার্সেল আইডি",
                Status:"স্ট্যাটাস",
                welcome:"স্মার্ট ট্র্যাকারে স্বাগতম",
                track_here:"এখানে ট্র্যাক"
            },
        
    })

    const [lanKey, setLan]=useState(Object.keys(data))

    const [currentLan, setCurrentLan]=useState(lanKey[0])

    const changeLanguage=(lan)=> setCurrentLan(lan)
        


    return (
        <LanContext.Provider value={{lan: data[currentLan], lanKey, changeLanguage}}>
         {props.children}
        </LanContext.Provider>
    );
  }