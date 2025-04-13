import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Confirmation() {
    const navigateBacktoPersonalDeets = useNavigate();

    function BacktoLogin(){
        navigateBacktoPersonalDeets("/PersonalDetails");
    }

///opted to just shoe this here bc i didn't hownto display a for summary so maybe ask Andre about that
  return (
    <div>
      <h1>Yayyyy, Welcome!!!!</h1>
      <p>You made it to the completion of the Gen Z's dating site, lets get your types now shall weee!!!</p>
      <button onClick={BacktoLogin}>Restart Processs</button>
    </div>
  )
}

export default Confirmation;
