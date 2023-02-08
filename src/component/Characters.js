import '../App.scss';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { bigData } from './myContext';
import List from './List/List';
import Gem from './Gem/Gem'
import Weapon from './Weapon/Weapon';

function Characters() {
  const name = useLocation();
  const [char, setChar] = useState();
  const [engra, setEngra] = useState();
  const [gem, setGem] = useState();
  const [effects, setEffects] = useState();
  const [weapon, setWeapon] = useState();
  
  
  //입력한 캐릭터 프로필
  useEffect(()=> {
    name && fetch(`https://developer-lostark.game.onstove.com/armories/characters/${name.state.name}/profiles`,{
      headers:{
        'accept':'application/json',
        'authorization':'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxMDQzNjkifQ.m8gzbGMVUWCWjtKflQzWnUCoPipdIBqaB5g60LJmr_DA505X6PrDMtTIsH9O_1DqXKdapyXzhs3kHrMgGl_FPlUsDSjkX9aYH2B77mUOLaNDUpqRHQOsIvWZz4Pi0-StkK4OLec0Av_B3VPUBqd4XGgOyrzTh8umEJB5q5hdjPkk0mfjxCflmuVWtxC9TYx-JvM50thbbZ8tcDWUIOUX7AExcGp7wlJ64SejlpD3VUscA3x21-3xxjDn1TjmjbE41-2K8nGHZsXIJ86MGEbZnzxDkECjhHyKtxvNbDUJySIP4qRlzmOiUQuXGopvt-zeEWyNYkDvep7iQ2jhNFaQlQ'
      }
    })
    .then(res=>res.json())
    .then(abc => {
      setChar(abc);
      //캐릭터 상세 스펙 
      fetch(`https://developer-lostark.game.onstove.com/armories/characters/${name.state.name}/engravings`,{
        headers:{
          'accept':'application/json',
          'authorization':'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxMDQzNjkifQ.m8gzbGMVUWCWjtKflQzWnUCoPipdIBqaB5g60LJmr_DA505X6PrDMtTIsH9O_1DqXKdapyXzhs3kHrMgGl_FPlUsDSjkX9aYH2B77mUOLaNDUpqRHQOsIvWZz4Pi0-StkK4OLec0Av_B3VPUBqd4XGgOyrzTh8umEJB5q5hdjPkk0mfjxCflmuVWtxC9TYx-JvM50thbbZ8tcDWUIOUX7AExcGp7wlJ64SejlpD3VUscA3x21-3xxjDn1TjmjbE41-2K8nGHZsXIJ86MGEbZnzxDkECjhHyKtxvNbDUJySIP4qRlzmOiUQuXGopvt-zeEWyNYkDvep7iQ2jhNFaQlQ'
        }
    })
      .then(res=>res.json())
      .then(abc => {
      setEngra(abc);
      //보유중인 보석
      fetch(`https://developer-lostark.game.onstove.com/armories/characters/${name.state.name}/gems`,{
        headers:{
          'accept':'application/json',
          'authorization':'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxMDQzNjkifQ.m8gzbGMVUWCWjtKflQzWnUCoPipdIBqaB5g60LJmr_DA505X6PrDMtTIsH9O_1DqXKdapyXzhs3kHrMgGl_FPlUsDSjkX9aYH2B77mUOLaNDUpqRHQOsIvWZz4Pi0-StkK4OLec0Av_B3VPUBqd4XGgOyrzTh8umEJB5q5hdjPkk0mfjxCflmuVWtxC9TYx-JvM50thbbZ8tcDWUIOUX7AExcGp7wlJ64SejlpD3VUscA3x21-3xxjDn1TjmjbE41-2K8nGHZsXIJ86MGEbZnzxDkECjhHyKtxvNbDUJySIP4qRlzmOiUQuXGopvt-zeEWyNYkDvep7iQ2jhNFaQlQ'
        }
      })
      .then(res=>res.json())
      .then(abc => {
        //보석 설명 오름차순
        setEffects(abc.Effects.sort((a, b) => {
          if (a.GemSlot < b.GemSlot) {
            return -1;
          }
        }))
        setGem(abc);
        fetch(`https://developer-lostark.game.onstove.com/armories/characters/${name.state.name}/equipment`,{
          headers:{
            'accept':'application/json',
            'authorization':'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxMDQzNjkifQ.m8gzbGMVUWCWjtKflQzWnUCoPipdIBqaB5g60LJmr_DA505X6PrDMtTIsH9O_1DqXKdapyXzhs3kHrMgGl_FPlUsDSjkX9aYH2B77mUOLaNDUpqRHQOsIvWZz4Pi0-StkK4OLec0Av_B3VPUBqd4XGgOyrzTh8umEJB5q5hdjPkk0mfjxCflmuVWtxC9TYx-JvM50thbbZ8tcDWUIOUX7AExcGp7wlJ64SejlpD3VUscA3x21-3xxjDn1TjmjbE41-2K8nGHZsXIJ86MGEbZnzxDkECjhHyKtxvNbDUJySIP4qRlzmOiUQuXGopvt-zeEWyNYkDvep7iQ2jhNFaQlQ'
          }
        })
        .then(res => res.json())
        .then(abc => {
          setWeapon(abc)
        })
      })
    })
    
    })
  },[name]);

  let ms;
  let je;

  //기본특성, 전투특성 나누기
  if(char !== undefined){
    ms = char.Stats.slice(0,6);
    je = char.Stats.slice(6,8);
  }
    
  useEffect(()=> {
    window.scrollTo(0, 0)
  },[])

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
  
  return (
    <main className="second-main">
      <div className='char'>
        <bigData.Provider value={{ name, char, gem, effects, weapon, legend, hero, relics, legendColor, heroColor, relicsColor, old, oldColor, estherColor, esther }}>
          <List />
          <div className="info">
            <div className="info-box">
              <div>
                <img src = {char && char.CharacterImage} alt="" className='image'></img>
              </div>
              <div className="serve">
                <dl className='server'>
                  <dt>&nbsp;서&nbsp;&nbsp;&nbsp;&nbsp;버&nbsp;</dt>
                  <dd>
                    {
                      char && char.ServerName
                    }
                  </dd>
                </dl>
                <dl className='class'>
                  <dt>&nbsp;클래스&nbsp;</dt>
                  <dd>
                    {
                      char && char.CharacterClassName
                    }
                  </dd>
                </dl>
                <dl className='expedition-level'>
                  <dt>&nbsp;원정대&nbsp;</dt>
                  <dd>
                    {
                      char && char.ExpeditionLevel
                    }
                  </dd>
                </dl>
                <dl className='level'>
                  <dt>&nbsp;전&nbsp;&nbsp;&nbsp;&nbsp;투&nbsp;</dt>
                  <dd>
                    {
                      char && char.CharacterLevel
                    }
                  </dd>
                </dl>
                <dl className='item-level'>
                  <dt>&nbsp;템&nbsp;&nbsp;&nbsp;&nbsp;렙&nbsp;</dt>
                  <dd>
                    {
                      char && char.ItemAvgLevel
                    }
                  </dd>
                </dl>
                <dl className='town-level'>
                  <dt>&nbsp;영&nbsp;&nbsp;&nbsp;&nbsp;지&nbsp;</dt>
                  <dd>Lv. 
                    {
                      char && char.TownLevel
                    }&nbsp;
                    {
                      char && char.TownName
                    }
                  </dd>
                </dl>
                <dl className='pvp-level'>
                  <dt>&nbsp;P&nbsp;&nbsp;V&nbsp;&nbsp;P&nbsp;</dt>
                  <dd>
                    {
                      char && char.PvpGradeName
                    }
                  </dd>
                </dl>
                <dl className='guild'>
                  <dt>&nbsp;길&nbsp;&nbsp;&nbsp;&nbsp;드&nbsp;</dt>
                  <dd>
                    {
                      char && char.GuildName
                    }
                  </dd>
                </dl>
              </div>
              <div className="stats">
                <div className="stats-box">
                  <div className="basic">
                    <p>기본특성</p>
                    <div className="basic-second">
                      {
                        je && je.map((obj, key)=> {
                          return <div key={key}>
                            <p >
                              {obj.Type}
                            </p>
                            <p>
                              {obj.Value}
                            </p>
                          </div>
                        })
                      }
                    </div>
                  </div>
                  <div className="war">
                  <p>전투특성</p>
                    <div className="war-second">
                      {
                        char && ms.map((obj, key)=> {
                          return <div key={key}>
                            <p >
                              {obj.Type}
                            </p>
                            <p>
                              {obj.Value}
                            </p>
                          </div>
                        })
                      }
                    </div>
                  </div>
                  <div className="mococo">
                  <p>성향</p>
                    <div className="mococo-second">
                      {
                        char && char.Tendencies.map((obj, key)=> {
                          return <div key={key}>
                            <p >
                              {obj.Type}
                            </p>
                            <p>
                              {obj.Point}
                            </p>
                          </div>
                        })
                      }
                    </div>
                  </div>
                  <div className="engrave">
                  <p>각인 효과</p>
                    <div className="engrave-second">
                      {
                        engra && engra.Effects.map((obj, key)=> {
                          return <div key={key}>
                            <p >
                              {obj.Name}
                            </p>
                          </div>
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="more">
            <div className="">
              <ul>
                <Gem />
              </ul>
            </div>
          </div>
          <div className="weapon-wrap">
            <div className="wrap">
              <div className="see">
                <button className="w"><p>더보기</p></button>
              </div>
              <Weapon />
            </div>
          </div>
        </bigData.Provider>
      </div>
    </main>
  )
}

export default Characters