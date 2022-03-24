//NPM packages
import React, { useContext, useState, useEffect }  from 'react';
import Card from '../componenets/Card';
import Loading from '../componenets/Loading';
import Error from '../componenets/Error';
import { LanContext } from "../contexts/LanContext";
import { fetchRead } from '../scripts/fetching';


export default function TrackingPage() {
const {lan} = useContext(LanContext);
//Properties

const [status, setStatus] = useState(0)
const [parcels, setParcels]= useState([])


useEffect(async () => {
  const payload = await fetchRead();
  setParcels(payload.data)
  setStatus(payload.status)
}, [ ]);


  return (
      <div className="track"> 
             {status===0 && <Loading/>}
             {status===2 && <Error/>}  
             {status===1 && <Card parcels={parcels}/>}                
      </div>
      );
}
