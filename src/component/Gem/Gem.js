import React, { useState, useContext } from 'react'
import { bigData } from '../myContext';

function Gem() {
  const [tip, setTip] = useState([false,false,false,false,false,false,false,false,false,false,false]);
  const { gem, effects, legend, hero } = useContext(bigData)

  //보석 마우스 아웃 시 이벤트
  const mouseOut = () => {
    let test = [false,false,false,false,false,false,false,false,false,false,false];
    setTip(test);
  }
  //보석 마우스 오버 시 이벤트
  const mouse = (e) => {
    let test = [...tip];
    test[e] = true;
    // test[e]=!test[e];
    setTip(test);
  }
  

  return (
    <>
      {
        gem && gem.Gems.map((obj, key)=> {
          if (obj.Grade === "전설" || obj.Grade === "유물") {
            return <li key={key} style={legend} onMouseEnter={()=>mouse(key)} onMouseLeave={()=>mouseOut(key)} >
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