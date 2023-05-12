import React, { useState, useContext } from 'react'
import { AppC } from '../Context';

function Gem({idx, obj}) {
  const [tip, setTip] = useState(false);
  const {effects, legend, hero} = useContext(AppC);
  
  //보석 마우스 아웃 시 이벤트
  const mouseOut = () => {
    setTip(!tip)
  }
  //보석 마우스 오버 시 이벤트
  const mouse = () => {
    setTip(!tip)
  }
  return (
    <>
      {
        obj.Grade === "전설" || obj.Grade === "유물" ? 
        <li idx={idx} style={legend} onMouseEnter={mouse} onMouseLeave={mouseOut} >
          <img src={`${obj.Icon}`} alt="보석" />
          <p>{obj.Level}</p>
          <div className={tip ? 'tips' : 'hidden'}>
            <p className="gem-info" dangerouslySetInnerHTML={{__html: obj.Name}}/>
            <p>{effects[idx].Name}</p>
            <p>{effects[idx].Description}</p>
          </div>
        </li>
        : <li idx={idx} style={hero} onMouseEnter={mouse} onMouseLeave={mouseOut}>
            <img src={`${obj.Icon}`} alt="보석" />
            <p>{obj.Level}</p>
            <div className={tip ? 'tips' : 'hidden'}>
              <p className="gem-info " dangerouslySetInnerHTML={{__html: obj.Name}} />
              <p>{effects[idx].Name}</p>
              <p>{effects[idx].Description}</p>
            </div>
          </li>
      }
    </>
    
  )
}

export default Gem