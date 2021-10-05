import React from 'react';
import Row from '../Row';

import './style.css';

const RowList = ({ weathers}) => {
  
 

  return (
    <div className="list">
    
      {weathers.map(({ dt, main, weather, wind }) => (
        <div key={dt}>
          <Row
            temp={`${Math.round(main.temp)} °C`}
            dt={dt * 1000}
            description={weather[0].description}
            icon={weather[0].icon}
            wind={Math.floor((wind.gust)*3.6)}
          />
        </div>
      ))}
    </div>
  );
};

export default RowList;
