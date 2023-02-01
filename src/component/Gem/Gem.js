import React, { useState, useContext, useEffect } from 'react'
import { bigData } from '../myContext';

function Gem() {
  const [tip, setTip] = useState([false,false,false,false,false,false,false,false,false,false,false]);
  const { gem, effects } = useContext(bigData)

  //보석 마우스 아웃 시 이벤트
  const mouseOut = () => {
    let test = [false,false,false,false,false,false,false,false,false,false,false];
    setTip(test);
  }
  //보석 마우스 오버 시 이벤트
  const mouse = (e) => {
    window.event.preventDefault();
    window.event.stopImmediatePropagation();
    let test = [...tip];
    test[e] = true;
    // test[e]=!test[e];
    setTip(test);
  }
  

  const legned = { //전설보석 백그라운드
    background : 'linear-gradient(135deg,#362003,#9e5f04)'
  };
  const hero = {  //영웅보석 백그라운드
    background : 'linear-gradient(135deg,#261331,#480d5d)'
  }
  return (
    <>
      {
        gem && gem.Gems.map((obj, key)=> {
          if (obj.Grade === "전설" || obj.Grade === "유물") {
            return <li key={key} style={legned} onMouseEnter={()=>mouse(key)} onMouseLeave={()=>mouseOut(key)} >
                <img src={`${obj.Icon}`} alt="보석" />
                <p>{obj.Level}</p>
                <div className={tip[key] ? 'tips' : 'hidden'}>
                  <p className="gem-info" dangerouslySetInnerHTML={{__html: obj.Name}}/>
                  <p>{effects[key].Name}</p>
                  <p>{effects[key].Description}</p>
                </div>
              </li>
          } else {
            return <li key={key} style={hero} onMouseEnter={()=>mouse(key)} onMouseLeave={()=>mouseOut(key)}>
                <img src={`${obj.Icon}`} alt="보석" />
                <p>{obj.Level}</p>
                <div className={tip[key] ? 'tips' : 'hidden'}>
                  <p className="gem-info " dangerouslySetInnerHTML={{__html: obj.Name}} />
                  <p>{effects[key].Name}</p>
                  <p>{effects[key].Description}</p>
                </div>
              </li>
          }
        })
      }
    </>
    
  )
}

export default Gem