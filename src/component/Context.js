import React, { createContext, useRef, useState } from 'react'

export const AppC = createContext(null);

export const Context = ({children}) => {
  const elName = useRef('');
  const [input, setInput] = useState();
  const img = useRef([]);
  const [hide, setHide] = useState(false);
  const [weapon, setWeapon] = useState();
  const [gem, setGem] = useState();
  const [effects, setEffects] = useState();
  const [char, setChar] = useState();
  const legend = { //전설 백그라운드
    background : 'linear-gradient(135deg, #362003, #9e5f04)'
  };
  const hero = {  //영웅 백그라운드
    background : 'linear-gradient(135deg, #261331, #480d5d)'
  }
  const relics = {  //유물 백그라운드
    background : 'linear-gradient(135deg, #341a09, #a24006)'
  }
  const old = {
    background : 'linear-gradient(135deg, #3d3325, #dcc999)'
  }
  const esther = {
    background : 'linear-gradient(135deg,#0c2e2c,#2faba8)'
  }
  const oldColor = {
    color : '#dcc999'
  }
  const legendColor = {
    color :  '#9e5f04'
  }
  const heroColor = {
    color :  '#480d5d'
  }
  const relicsColor = {
    color :  '#a24006'
  }
  const estherColor = {
    color : '#2faba8'
  }

  const search = (e) => {
    e.preventDefault();
    setInput(elName.current.value); //인풋창에 입력한 정보를 setInput으로 보냄
    document.cookie = "safeCookie1=foo; SameSite=Lax"; 
    document.cookie = "safeCookie2=foo";  
    document.cookie = "crossCookie=bar; SameSite=None; Secure";
  }

  const value = {char, setChar, gem, setGem, effects, setEffects, weapon, setWeapon, hide, setHide,estherColor, relicsColor, heroColor, legendColor, oldColor, esther, old, relics, hero, legend, img, elName, search, input};
  return (
    <AppC.Provider value={value}>
      {children}
    </AppC.Provider>
  )
}
