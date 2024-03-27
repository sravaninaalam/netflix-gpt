import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { findNetwork } from './utils/redux/networkSlice';
import Header from './components/Header';
import Fallback from './Fallback';
import Browse from './components/Browse';

const Network = () => {
  const [networkProvider, setNetworkProvider] = useState('');
  const dispatch=useDispatch()
  useEffect(() => {
    const fetchIPInfo = async () => {
      try {
        const response = await fetch('https://ipinfo.io/json');
        const data = await response.json();
        const isp = data?.org; // Extract ISP from organization field
        dispatch(findNetwork(isp || 'Unknown') )
        setNetworkProvider(isp || 'Unknown');
      } catch (error) {
        console.error('Error fetching IP info:', error);
      }
    };

    fetchIPInfo();
  }, []);

  
  const renderFeaturesBasedOnNetwork = () => {
    if (networkProvider.includes('Jio')) {
      return <JioFeatures />;
    } else if (networkProvider.includes('Unknown')) {
      return <DefaultFeatures/>;
    } else {
      return <OtherNetwork />;
    }
  };

  return (
    <div>    
      {/* <h1>Network Provider Features : {networkProvider}</h1> */}
      {renderFeaturesBasedOnNetwork()}
      
    </div>
  );
};

const JioFeatures = () => {
  return (
    <div>
      {/* <h2>Jio Network Features</h2> */}
      <Header/>
      <Fallback/>
    </div>
  );
};

const OtherNetwork = () => {
  return (
    <div>
      {/* <h2>Airtel Network Features</h2> */}
      <Browse/>
    </div>
  );
};

const DefaultFeatures = () => {
  return (
    <div>
     <Header/>
     <Fallback/>
    </div>
  );
};

export default Network;


