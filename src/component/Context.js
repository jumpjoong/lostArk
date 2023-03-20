import React, { createContext, useRef, useState } from 'react'

export const AppC = createContext(null);

export const Context = ({children}) => {
  //input 창에 입력되는 텍스트 (Insert.js, Main.js, )
  const elName = useRef('');
  //입력창에 입력된 값(Main.js)
  const [input, setInput] = useState();
  //보유중인 캐릭터 그룹 (Group.js, Main.js, List.js)
  const img = useRef([]);
  //더보기 컨트롤(Weapon.js)
  const [hide, setHide] = useState(false);
  //보유중인 장비 (Weapon.js)
  const [weapon, setWeapon] = useState();
  //보유중인 보석 (Gem.js)
  const [gem, setGem] = useState();
  //보유중인 보석 정보(ex.보석 이름, 보석 효과) (Gem.js)
  const [effects, setEffects] = useState();
  //입력한 캐릭터 정보 (Characters.js, List.js)
  const [char, setChar] = useState();
  //(Weapon.js)
  const legend = { //전설 백그라운드
    background : 'linear-gradient(135deg, #362003, #9e5f04)'
  };
  const hero = {  //영웅 백그라운드
    background : 'linear-gradient(135deg, #261331, #480d5d)'
  }
  const relics = {  //유물 백그라운드
    background : 'linear-gradient(135deg, #341a09, #a24006)'
  }
  const old = {     //고대 백그라운드
    background : 'linear-gradient(135deg, #3d3325, #dcc999)'
  }
  const esther = {  //에스더 백그라운드
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
  //(Insert.js)에서 사용중
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
