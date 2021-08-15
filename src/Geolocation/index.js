import React, { useEffect, useState } from 'react';
import useGeolocation from 'react-hook-geolocation';
import './style.css';

function Geolocation({ onConfirm }) {
  const geolocation = useGeolocation();

  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  useEffect(() => {
    setLon(geolocation.longitude);

    return lon;
  }, [geolocation.longitude, lon]);
  useEffect(() => {
    setLat(geolocation.latitude);

    return lat;
  }, [geolocation.latitude,lat]);

  console.log(lat, lon);

  return !geolocation.error ? (
    <div className="geoloc">
      <div className="geo">
      <h3>Předpověď pro aktuální polohu:</h3>
      <button onClick={() => onConfirm(lat, lon)}>OK</button>
      </div>
      <h4 >nebo</h4>
    </div>
  ) : (
    <p>Nelze určit vaši polohu, omlouváme se.</p>
  );
}

export default Geolocation;
