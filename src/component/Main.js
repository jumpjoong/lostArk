import React, {useState, useRef, useEffect, useContext} from 'react';
import '../App.scss';
import Group from './Group/Group';
import Insert from './Insert/Insert';
import { AppC } from './Context';

function Main() {
  const [state, setState] = useState(0);
  const length = useRef();
  const {elName, input, img} = useContext(AppC);
  const body = document.getElementsByTagName("body");
  
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
    body[0].style = `height: 100vh; background-color: #15181d`
  },[input]);

  //마지막 개수 확인용 및 없는 닉네임 에러 출력
  const group = (aaa) => {
    try {
      length.current = aaa.length;
    } catch {
      alert('닉네임 정보가 없습니다! 다시 입력하세요.');
      elName.current.value = '';
    }
  }
  //검색 이벤트
  
  
  return (
    <div className="App">
      <header>
        <Insert/>
      </header>
      <main className="first-main">
        <div className="search-box">
          <ul>
            <Group />
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Main