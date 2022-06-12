import { logRoles } from '@testing-library/react';
import React, { useState } from 'react';
import './block.css';


function Block({setMain, setBlock}) {
    let pitanja = [
    {
        pitanje: 'Na nasem chetu ima vise od 150 000 poruka?',
        odgovori: [
            {
                odgovor: 'NO',
                value: false,
            },
            {
                odgovor: 'YES',
                value: true,
            },
        ],
        desc: 'tacnije 150 500 poruke'
    },
    {
        pitanje: 'Da li sam ja taj koji je prvi poslao golotinju u cetu?',
        odgovori: [
            {
                odgovor: 'YES',
                value: false,
            },
            {
                odgovor: 'NO',
                value: true,
            },
        ],
        desc: 'Znao sam da ces da pogresis.. zapravo si ti 7 oktobra meni cestitala rodjendan porovokativnim videom u brusu'
    },
    {
        pitanje: 'Da li si pila alkohol prvi put kad smo se videli?',
        odgovori: [
            {
                odgovor: 'YES',
                value: false,
            },
            {
                odgovor: 'NO',
                value: true,
            },
        ],
        desc: 'Zapravo kupio sam ti vodku i guaranu ali samo guarana je bila otvorena'
    },
    
]
    
    let [niz, setPitanja] = useState(pitanja);

    let [correct, setCorrect] = useState(false);
    let [wrong, setWrong] = useState(false);

    let [objekat, setObjekat] = useState(0) 



    function onClick(i, e) {
        if (e) {
            setCorrect('true')
             setWrong('')
        } else {
            setWrong('false')
            setCorrect('')
        }
    }

    function next() {
        setObjekat(() => {
            return objekat + 1
        })
        setWrong('')
            setCorrect('')
    }

  return (
    <div className='block'>
            
            
                <div className='block__question'>
                    {niz[objekat].pitanje}
                </div>
                    
                    <div className='block__btn'>
                        {niz[objekat].odgovori.map((e, i) => {
                            
                            return (
                            <div key={i}>
                                <button className={e.value ? correct : wrong} value={e} onClick={(i) => {
                                    
                                    return onClick(i, e.value)
                                }}>{e.odgovor}</button>
                            </div>
                            
                            )
                        })}
                    </div>
                    {correct == 'true' && 
                    <div className='block__desc'>
                        <p>{niz[objekat].desc}</p>
                    </div>
                    }
                    {wrong == 'false' && 
                    <div className='block__desc'>
                        <p>Oo pogresan odgovor...</p>
                    </div>
                    }

                    {correct == 'true' && 
                    <div>
                        <button className='next' onClick={next}>next</button>
                    </div>
                    }


                    <div className='back'>
            <button onClick={() => {
                setMain(true);
                setBlock(false)
            }}>back</button>
        </div>
            
    </div>
  );
}

export default Block;


{/* <div className='block__btn'>
                            <div className='btn' key={i}>
                                <button onClick={onClick}>{'aaa'}</button>
                            </div>
                            <div className='btn' key={i}>
                                <button onClick={onClick}>{'asss'}</button>
                            </div>
                            </div> */}
