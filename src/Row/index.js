import React from 'react';
import './style.css';

const Row = ({ dt, temp, description, icon, date }) => {
date = new Date(dt);

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
      </div>
    </div>
  );
};

export default Row;
