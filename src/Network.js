
import React, { useEffect, useState } from 'react';
import Browse from './components/Browse';
import Header from './components/Header';
import Fallback from './Fallback';

const Network = () => {
  const [networkProvider, setNetworkProvider] = useState('');

  useEffect(() => {
    const fetchIPInfo = async () => {
      try {
        const response = await fetch('https://ipinfo.io/json');
        const data = await response.json();
        const isp =  data?.org; // Extract ISP from organization field
        
        setNetworkProvider(isp || 'Unknown');
      } catch (error) {
        console.error('Error fetching IP info:', error);
      }
    };

    fetchIPInfo();
  }, []);

  // Render different components/features based on the network provider
  const renderFeaturesBasedOnNetwork = () => {
    if (networkProvider.includes('Jio')) {
      return <JioFeatures />;
    } else if (networkProvider.includes('Unknown')) {
      return <DefaultFeatures/>;
    } else {
      return <OtherFeatures />;
    }
  };

  return (
    <div>
     
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

const OtherFeatures = () => {
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
      {/* <h2>Default Features</h2> */}
      <Header/>
      <Fallback/>
    </div>
  );
};

export default Network;

