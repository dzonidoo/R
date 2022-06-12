
import './App.css';

import { useState } from 'react';
import img1 from './286835906_756299808832256_765485673311475408_n.jpg'
import img2 from './287137372_1197354497684174_7998899454656145027_n.jpg'
import img3 from './286888220_3247263618881070_8302758335246839721_n.jpg'
import img4 from './287101064_560728465566410_7675005318056390572_n.jpg'

function Vremeplov({setMain, setVre}) {

  let [fun, setFun] = useState(false)
  return (
    <div className='vremeplovOkvir'>
        <h1>2017-ta godina... mesec jun...</h1>
        <div className='vremeplov'>
            <div>
                <img src={img1} />
            </div>

            <div>
                <img src={img2} />
            </div>

            <div>
                <img src={img3} />
            </div>

            <div>
                <img src={img4} />
            </div>   
        </div>

            <div className='vreme__back' style={{padding: '10px', marginBottom: '10px'}}>
                <button style={{padding: '10px 15px'}}
                 onClick={() => {
                    setMain(true);
                    setVre(false)
                }}>back</button>
            </div>

        </div>
    
  );
}

export default Vremeplov;