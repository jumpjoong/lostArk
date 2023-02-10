import React, { useContext } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { bigData } from '../myContext';
import {}
function Group() {
  const { img } = useContext(bigData)
  return (
    <>
      {
        img && img.current.map((obj, key)=>{
            return <li key={key}>
              <Link to={`/${obj.CharacterName}`} state={{ name : obj.CharacterName, group : img}}>
                <div className="char-box">
                  <p className="server">
                    {obj.ServerName}
                  </p>
                  <p>
                    <img src={`${obj.CharacterImage}`} alt='이미지'></img>
                  </p>
                  <div className="char-info">
                    <p>
                      Lv .&nbsp;{obj.CharacterLevel}
                    </p>
                    <p>
                      {obj.CharacterName}
                    </p>
                    <p>
                      Lv. {obj.ItemMaxLevel}
                    </p>
                    <p>
                      {obj.CharacterClassName}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
        })
      }
    </>
  )
}

export default Group