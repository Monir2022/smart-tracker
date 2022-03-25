//NPM packages
import { useContext } from "react";

//Project files
import { LanguageContext } from "../state/LanguageContext";
import ParcelCard from "./ParcelCard";


export default function Packages({ parcels }) {
  const { language } = useContext(LanguageContext);

  const parcelInfo = parcels.map((parcel) => (
    <ul key={parcel.id}>
      <ParcelCard parcel={parcel} />
    </ul>
  ));

  return (
    <div className="packages">
      <h2 className="heading-packages">{language.package_list}</h2>
      {parcelInfo}
    </div>
  );
}
