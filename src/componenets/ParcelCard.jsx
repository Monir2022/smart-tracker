import parcel_img from "../assets/images/parcel.png";
import { LanContext } from "../contexts/LanContext";
import React, { useContext } from "react";

export default function ParcelCard({ parcel }) {
  const { lan } = useContext(LanContext);
  return (
    <div className="parcel-card">
      <img className="card-img" src={parcel_img} alt="parcel" />
      <p>
       <b>{lan.From}: {parcel.sender}</b> 
      </p>
      <p>{lan.Parcel_ID}: {parcel.id} </p>
      <p>{lan.Status}: {parcel.status}</p>
      <p>ETA: {parcel.eta}</p>
    </div>
  );
}
