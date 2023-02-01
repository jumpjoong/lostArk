import React, {useState, useRef, useEffect} from 'react';
import '../App.scss';
import { bigData } from './myContext'
import Group from './Group/Group';
import Insert from './Insert/Insert';

function Main() {
  const [input, setInput] = useState();
  const [state, setState] = useState(0);
  const elName = useRef('');
  const img = useRef([]);
  const length = useRef()
  
  //데이터 검색
  const searchE = () => {
    //밑에서 aaa값을 받아와서 update실행 map문이라 데이터 개수 만큼 실행
    const update = (data) => { 
      //img에 데이터를 순차적으로 저장
      img.current = [...img.current, data]
      //Ref에 쌓이고 렌더링이 일어날 수 있게 마지막에 렌더링시킴, 레벨순으로 정렬
      if (img.current.length === length.current) {
        img.current.sort((a, b) => {
          if (a.ItemMaxLevel > b.ItemMaxLevel) {
            return -1;
          }else if (a.ItemMaxLevel < b.ItemMaxLevel) {
            return 1;
          } else {
            return 0;
          }
        })
        setState(state + 1)
      }
    }
    input && fetch(`https://developer-lostark.game.onstove.com/characters/${input}/siblings`,{
      headers:{
        'accept':'application/json',
        'authorization':'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxMDQzNjkifQ.m8gzbGMVUWCWjtKflQzWnUCoPipdIBqaB5g60LJmr_DA505X6PrDMtTIsH9O_1DqXKdapyXzhs3kHrMgGl_FPlUsDSjkX9aYH2B77mUOLaNDUpqRHQOsIvWZz4Pi0-StkK4OLec0Av_B3VPUBqd4XGgOyrzTh8umEJB5q5hdjPkk0mfjxCflmuVWtxC9TYx-JvM50thbbZ8tcDWUIOUX7AExcGp7wlJ64SejlpD3VUscA3x21-3xxjDn1TjmjbE41-2K8nGHZsXIJ86MGEbZnzxDkECjhHyKtxvNbDUJySIP4qRlzmOiUQuXGopvt-zeEWyNYkDvep7iQ2jhNFaQlQ'
      }
    })
    .then(res=>res.json())
    .then(aaa => {
      group(aaa)
      aaa.map((obj)=> {
        fetch(`https://developer-lostark.game.onstove.com/armories/characters/${obj.CharacterName}/profiles`,{
          headers:{
            'accept':'application/json',
            'authorization':'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxMDQzNjkifQ.m8gzbGMVUWCWjtKflQzWnUCoPipdIBqaB5g60LJmr_DA505X6PrDMtTIsH9O_1DqXKdapyXzhs3kHrMgGl_FPlUsDSjkX9aYH2B77mUOLaNDUpqRHQOsIvWZz4Pi0-StkK4OLec0Av_B3VPUBqd4XGgOyrzTh8umEJB5q5hdjPkk0mfjxCflmuVWtxC9TYx-JvM50thbbZ8tcDWUIOUX7AExcGp7wlJ64SejlpD3VUscA3x21-3xxjDn1TjmjbE41-2K8nGHZsXIJ86MGEbZnzxDkECjhHyKtxvNbDUJySIP4qRlzmOiUQuXGopvt-zeEWyNYkDvep7iQ2jhNFaQlQ'
          }
        })
        .then(res=>res.json())
        .then(abc => {
          update(abc)
        })
      })
    })
  }
    
  //인풋의 값이 바뀌면 img길이 초기화하고 searchE 실행
  useEffect(() => {
    img.current = []
    searchE()
  },[input])

  //마지막 개수 확인용
  const group = (aaa) => {
    length.current = aaa.length
  }
  //검색 이벤트
  const search = (e) => {
    e.preventDefault();
    setInput(elName.current.value); //인풋창에 입력한 정보를 setInput으로 보냄
  }
  
  return (
    <div className="App">
      <header>
        <Insert search={search} elName={elName}/>
      </header>
      <main className="first-main">
        <div className="search-box">
          <ul>
            <bigData.Provider value ={{ img }}>
              <Group />
            </bigData.Provider>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Main