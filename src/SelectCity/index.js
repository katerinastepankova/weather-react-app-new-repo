import React, { useState } from 'react';
import './style.css';

const SelectCity = ({ onSearch, suggestions }) => {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [city, setCity] = useState('');

  const handleChange = (e) => {
    const city = e.currentTarget.value;
    const newFilteredSuggestions = suggestions.filter((suggestion) =>
    
      suggestion.name.toLowerCase().startsWith(city.toLowerCase()),
    );
    setActive(0);
    setFiltered(newFilteredSuggestions);
    setIsShow(true);
    setCity(e.currentTarget.value);
  };

  const onClick1 = (e) => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setCity(e.currentTarget.innerText);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // Enter key
      setActive(0);
      setIsShow(false);

      setCity(`${filtered[active].name}, ${filtered[active].country}`);
    
      
    
    } else if (e.keyCode === 38) {
      // Up arrow
      return active === 0 ? null : setActive(active - 1);
    } else if (e.keyCode === 40) {
      // Down arrow
      return active - 1 === filtered.length ? null : setActive(active + 1);
    }
  };
  const renderAutocomplete = () => {
    if (isShow && city) {
      if (filtered.length) {
        return (
          <div className="position">
            <ul className="autocomplete">
              {filtered.map((suggestion, index) => {
                let className;
                if (index === active) {
                  className = 'active';
                }
                return (
                  <li
                    className={className}
                  
                    key={suggestion.id}
                    onClick={onClick1}
                  >
                   
                    {suggestion.name}, {suggestion.country}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      } else {
        return (
          <div className="no-autocomplete">
            <em>Nenalezeno</em>
          </div>
        );
      }
    }
    return <></>;
  };

  return (
    <div>
      <input
        name="city"
        onChange={handleChange}
        type="text"
        className="input"
        placeholder="Napiš město..."
        value={city}
        autoComplete="off"
        onKeyDown={onKeyDown}
      ></input>
      {renderAutocomplete()}
      <div>
        <button className="getweather" onClick={() => onSearch(city)}>
          Potvrď
        </button>
      </div>
    </div>
  );
};

export default SelectCity;
