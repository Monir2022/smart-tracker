import ParcelCard from "./ParcelCard";

export default function Packages({ parcels }) {
  const parcelInfo = parcels.map((parcel) => (
    <ul key={parcel.id}>
      <ParcelCard parcel={parcel} />
    </ul>
  ));

  return <div className="packages">
    
    {parcelInfo}</div>;
}
