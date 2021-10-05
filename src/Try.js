import { useState, useEffect } from "react";
import React  from 'react';

function Try(props) {

  const poleDni = ['Pondeli', 'Utery', 'Streda'];
  const poleHodin = ['10.00', '12.00', '14.00'];

  const [den, setDen] = useState('');

  useEffect((i) => {
   setDen(poleDni[i]);
    return den;
    
  }, [])
  

  return (
<>
  {poleDni.map(()=>

    <div>
      den
      {poleHodin.map(()=>
      <div>něco</div>

      )}
    </div>)}
    </>
    
  );
}

export default Try;