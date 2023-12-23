import React from 'react';
import background from './componentImages/digitalbackground.png';
import './componentsCss/Opener.css';

function Opener() {
    return (
      <div>
        <img className='imageBackground' src={background}/>
      </div>
    );
  }
  
  
  export default Opener;