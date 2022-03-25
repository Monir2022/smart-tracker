//NPM packages
import { useContext, useState, useEffect } from "react";
import Packages from "../componenets/Packages";
import Loading from "../componenets/Loading";
import Error from "../pages/Error";
import { LanContext } from "../contexts/LanContext";
import { fetchRead } from "../scripts/fetching";

export default function TrackingPage() {
  const { lan } = useContext(LanContext);
  
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
