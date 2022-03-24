//NPM packages
import React, {useContext} from 'react';
import { LanContext } from "../contexts/LanContext";
import parcel_img from "../assets/images/parcel.png";



export default function Card({parcels}) {
    const {lan} = useContext(LanContext);

    const parcelInfo= parcels.map(parcel=>{
        return ( <div key={parcel.id}>
            <img className='card-img' src={parcel_img} alt="parcel" />
            <h2>{lan.From}: {parcel.sender}</h2>
            <p>{lan.Parcel_ID}: {parcel.id}</p>
            <p>{lan.Status}: {parcel.status}</p>
            <p>{parcel.eta}</p>  
         </div>)
      })
     

  return ( <div>
            {parcelInfo}
         </div>
         )
}
