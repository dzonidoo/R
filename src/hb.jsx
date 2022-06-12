import { logRoles } from '@testing-library/react';
import React, { useState } from 'react';
import './block.css';


function Hb({setMain, setBlock}) {
    
    
    

  return (
      <div className='hbMain'>
      <div className='hb'>
          <p>Srecan rodjendan... sve najbolje jer nista manje i ne zasluzujes...</p>
      </div>
       <div className='back' style={{display: 'flex', justifyContent: 'center'}}>
            <button onClick={() => {
                setMain(true);
                setBlock(false)
            }}>back</button>
            </div>
            </div>
  )
    
}

export default Hb;



