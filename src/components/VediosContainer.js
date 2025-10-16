import React, { useEffect  , useState} from 'react'
import { YOUTUBE_VEDIOS_API } from '../utils/constant';
import VedioCard from './vedioCard';
import { Link } from 'react-router-dom';

const VediosContainer = () => {

  const [vedios, setVedios] = useState([]);

  useEffect(() => { 
     console.log("THIS USE EFFECTI IS RUNING")

     getVedios();
  },[])

  const getVedios = async () => {
      const data = await fetch(YOUTUBE_VEDIOS_API);

      const json= await data.json();
      console.log("vedios",json.items);
      setVedios(json.items)
    }
  return (
    <div className='flex  flex-wrap'>
      {/* <VedioCard info={vedios[0]}/> */}
      {vedios.map((item)=>(
        <Link to={"/watch?v="+item.id}>
          <VedioCard key={item.id} info={item}/></Link>
        ))}
      {/* <h1>Vedios</h1> */}
    </div>
  )
}

export default VediosContainer
