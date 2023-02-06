import React from 'react'

function Insert( { search, elName } ) {

  return (
    <>
    <div>
      <img src="./icon/main.png" alt='로아'></img>
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