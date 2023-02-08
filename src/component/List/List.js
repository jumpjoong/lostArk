import React, { useContext, useState } from 'react'
import { bigData } from '../myContext';
import { Link } from 'react-router-dom';

function List() {
  const [drop, setDrop] = useState(false);
  const { name, char } = useContext(bigData);
  //드롭다운 메뉴
  const list = () => {
    setDrop(!drop)
  }

  if (name !== undefined) {
    return (
      <div className='name'>
        <div className='name-sub'>
          <Link to="/">
            <p><img src='./icon/mococo2.gif' alt='메인으로가기'></img></p>
          </Link>
          <div className='header-sub' onClick={list}>
            <div className="list">
              <p className='e'>
                {
                  char && char.CharacterName
                }
              </p>
              <div className={drop ? 'deg' : ''}><img src="icon/arrow.png" alt="더보기"></img></div>
            </div>
          <div className={drop ? 'hidden active' : 'hidden noActive'}>
            <ul>
              {
                name && name.state.group.current.map((obj, key)=> {
                  return <li key={key}>
                    <Link to={`/${obj.CharacterName}`} state={{ name : obj.CharacterName , group : name.state.group }} onClick={list}>
                      {obj.CharacterName}
                    </Link>
                    </li>
                })
              }
            </ul>
          </div> 
          </div>
        </div>
      </div>
    )
  }
}


export default List