import React from 'react';
import './style.css';

const Row = ({ dt, temp, description, icon, date, wind, windDir }) => {
  date = new Date(dt);
  const windDirection = (num) => {
    var val = Math.floor((num / 22.5) + 0.5);
    //var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    var arr = ["S", "SSV", "SV", "VSV", "V", "VJV", "JV", "JJV", "J", "JJZ", "JZ", "ZJZ", "Z", "ZSZ", "SZ", "SSZ"];

    return arr[(val % 16)];
  };


  return (
    <div className="row-header">
      {date.getDay(dt) === 1 && (
        <div>
          <p>Pondělí </p>
          <p> {date.toLocaleDateString()} </p>
        </div>
      )}

      {date.getDay(dt) === 2 && (
        <div>
          <p>Úterý </p>
          <p> {date.toLocaleDateString()} </p>

        </div>
      )}
      {date.getDay(dt) === 3 && (
        <div>
          <p>Středa </p>
          <p> {date.toLocaleDateString()} </p>
        </div>
      )}
      {date.getDay(dt) === 4 && (
        <div>
          <p>Čtvrtek </p>
          <p> {date.toLocaleDateString()} </p>
        </div>
      )}
      {date.getDay(dt) === 5 && (
        <div>
          <p>Pátek </p>
          <p> {date.toLocaleDateString()} </p>
        </div>
      )}
      {date.getDay(dt) === 6 && (
        <div>
          <p>Sobota </p>
          <p> {date.toLocaleDateString()} </p>
        </div>
      )}
      {date.getDay(dt) === 0 && (
        <div>
          <p>Neděle </p>
          <p> {date.toLocaleDateString()} </p>
        </div>
      )}

      <div className="row">
        <p className="time">
          {' '}
          Čas:<br></br> {date.toLocaleTimeString()}
        </p>
        <p>
          Teplota: <br></br>
          {temp}
        </p>
        <p>{description}</p>
        <img
          className="image"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="obr"
        ></img>
        <p>Vítr:  <br /> (max) <br /><br /><span className="wind">{wind} km/h</span>   </p>
        <p>Směr větru: <br></br>
          <span className='wind-dir'>{windDirection(windDir)}</span>
        </p>
      </div>
    </div>
  );
};

export default Row;
