import logo from './logo.svg';
import './App.css';
import Block from './blok';
import { useState } from 'react';
import Vremeplov from './vremeplov';
import Hb from './hb';


function App() {

  let [fun, setFun] = useState(false)
  let [vre, setVre] = useState(false)
  let [main, setMain] = useState(true) 
  let [hb, setHb] = useState(false) 
  return (
    <div>
      { main && 
      <div className='main1'>
        <div className='vremeplov'>
          <button className='main__btn'
           onClick={()=> {
            setVre(!vre); 
            setMain(false)
          }}>Vremeplov</button>
        </div>

        <div className='fun'>
          <button className='main__btn'
           onClick={() => {
            setFun(!fun);
            setMain(false)
          }}>Fun Fact</button>
        </div>

        <div >
          <button 
          onClick={() => {
            setHb(!hb);
            setMain(false)
          }}
          className='main__btn'>hmm</button>
        </div>


      </div>
      
      }
      
      <div>
        {vre && <Vremeplov setMain={setMain} setVre={setVre} />}
      </div>

      <div>{fun && <Block setMain={setMain} setBlock={setFun} /> }</div>

      <div>{hb && <Hb setMain={setMain} setBlock={setHb} />}</div>

    </div>
    
  );
}

export default App;
