//NPM packages
import React, { useContext } from "react";

//Project files
import parcel_img from "../assets/images/parcel.png";
import { LanguageContext } from "../state/LanguageContext";

export default function ParcelCard({ parcel }) {
  
  const { language } = useContext(LanguageContext);

  return (
    <div className="parcel-card">
      <img className="card-img" src={parcel_img} alt="parcel" />
      <p>
        <b>
          {language.From}: {parcel.sender}
        </b>
      </p>
      <p>
        {language.Parcel_ID}: {parcel.id}{" "}
      </p>
      <p>
        {language.Status}: {parcel.status}
      </p>
      <p>ETA: {parcel.eta}</p>
    </div>
  );
}
