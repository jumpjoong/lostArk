import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppC } from '../Context'

function Insert( ) {
  const {elName, search} = useContext(AppC);
  return (
    <>
    <div>
      <Link to='/'>
        <p>
          <img src="./icon/main.png" alt='로아' /> 
        </p>
      </Link>
    </div>
    <form onSubmit={search} autoComplete="off">
      <div className="inputwrapper">
        <input ref={elName} type="text" placeholder="캐릭터 명을 입력하세요">
        </input>
        <img onClick={search} src="icon/search.gif" alt="검색"/>
      </div>
    </form>
    </>
  )
}

export default Insert