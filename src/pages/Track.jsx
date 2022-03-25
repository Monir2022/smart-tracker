//NPM packages
import { useContext, useState, useEffect } from "react";

//Project files
import Packages from "../componenets/Packages";
import Loading from "../componenets/Loading";
import Error from "../pages/Error";
import { LanguageContext } from "../state/LanguageContext";
import { fetchRead } from "../scripts/fetching";

export default function TrackingPage() {
  const { language } = useContext(LanguageContext);
  
//local state
  const [status, setStatus] = useState(0);
  const [parcels, setParcels] = useState([]);
//method
  useEffect(async () => {
    const payload = await fetchRead();
    setParcels(payload.data);
    setStatus(payload.status);
  }, []);

  return (
    <div className="track">
      {status === 0 && <Loading />}
      {status === 2 && <Error />}
      {status === 1 && <Packages parcels={parcels} />}
    </div>
  );
}
