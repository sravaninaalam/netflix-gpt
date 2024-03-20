import { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { findNetwork } from './utils/redux/networkSlice';

const Network = () => {

  const dispatch=useDispatch()
  useEffect(() => {
    const fetchIPInfo = async () => {
      try {
        const response = await fetch('https://ipinfo.io/json');
        const data = await response.json();
        const isp = data?.org; // Extract ISP from organization field
        dispatch(findNetwork(isp || 'Unknown') )
       
      } catch (error) {
        console.error('Error fetching IP info:', error);
      }
    };

    fetchIPInfo();
  }, []);

}

export default Network;
