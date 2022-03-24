import ParcelCard from "./ParcelCard";

export default function Packages({ parcels }) {
  const parcelInfo = parcels.map((parcel) => (
    <ul key={parcel.id}>
      <ParcelCard parcel={parcel} />
    </ul>
  ));

  return (
    <div className="packages">
      <h2 className="heading-packages">Here are your packages</h2>
      {parcelInfo}
    </div>
  );
}
