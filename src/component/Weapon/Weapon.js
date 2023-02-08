import React, { useContext, useEffect, useRef } from 'react'
import { bigData } from '../myContext';

function Weapon() {
  const { weapon, legend, hero, relics,legendColor, heroColor, relicsColor, old, oldColor, estherColor, esther } = useContext(bigData)
  const ccc = useRef([])

  //새로고침 및 화면 전환 시 최초로 초기화
  useEffect(()=> {
    ccc.current = []
  },[])

  let filt = weapon && weapon.filter((item)=> item.Type !== '')
  
  const changeArrayOrder = function(list, targetIdx, moveValue) {
    // 배열값이 없는 경우 나가기
    if (list.length < 0) return;
  
    // 이동할 index 값을 변수에 선언
    const newPosition = targetIdx + moveValue;
  
    // 이동할 값이 0보다 작거나 최대값을 벗어나는 경우 종료
    if (newPosition < 0 || newPosition >= list.length) return;
  
    // 임의의 변수를 하나 만들고 배열 값 저장
    const tempList = JSON.parse(JSON.stringify(list));
  
    // 옮길 대상을 target 변수에 저장하기
    const target = tempList.splice(targetIdx, 1)[0];
  
    // 새로운 위치에 옮길 대상을 추가하기
    tempList.splice(newPosition, 0, target);
    return tempList;
  };
  
  let list1 = filt && changeArrayOrder(filt, 1, -1)
  let list2 = list1 && changeArrayOrder(list1, 6, -5)
  let list3 = list2 && changeArrayOrder(list2, 2, 8)
  let list4 = list3 && changeArrayOrder(list3, 5, -3)
  let list5 = list4 && changeArrayOrder(list4, 6, -3)
  let list6 = list5 && changeArrayOrder(list5, 7, -2)
  let list7 = list6 && changeArrayOrder(list6, 8, -1)

  //품질 숫자 따오기
  if (list7 !== undefined) {
    for (let i = 0; i < list7.length; i++) {
      ccc.current = [...ccc.current, JSON.parse(list7[i].Tooltip)]
    }
  }

  console.log(weapon)
  // list7 && console.log(JSON.parse(list7[0].Tooltip))
  console.log(ccc.current[0].Element_001.value.qualityValue)
  return (
    <div className="eq">
      <div className="weapon">
        {
          list7 && list7.map((obj, key)=> {
            if (obj.Grade === "유물") {
              // if (ccc.current.Element_001.value.qualityValue < 11) {
                return <div key={key} className={`eq-weapon ${key}`} >
                  <figure>
                    <img src={obj.Icon} alt="이미지" style={relics}/>
                    <div className="quality">
                      {/* <p style={`width : ${ccc.Element_001.value.qualityValue}`}></p> */}
                    </div>
                  </figure>
                  <div>
                    <p>{obj.Type}</p>
                    <p style={relicsColor}>{obj.Name}</p>
                  </div>
                  </div>
              // }
            } else if (obj.Grade === "전설") {
              return <div key={key} className={`eq-weapon ${key}`}>
                <figure>
                  <img src={obj.Icon} alt="이미지" style={legend}/>
                  <div className="quality"></div>
                </figure>
                <div>
                  <p>{obj.Type}</p>
                  <p style={legendColor}>{obj.Name}</p>
                </div>
              </div>
            } else if (obj.Grade === "고대") {
              return <div key={key} className={`eq-weapon ${key}`}>
                <figure>
                  <img src={obj.Icon} alt="이미지" style={old}/>
                  <div className="quality"></div>
                </figure>
                <div>
                  <p>{obj.Type}</p>
                  <p style={oldColor}>{obj.Name}</p>
                </div>
              </div>
            }else if (obj.Grade === "에스더") {
              return <div key={key} className={`eq-weapon ${key}`}>
                <figure>
                  <img src={obj.Icon} alt="이미지" style={esther}/>
                  <div className="quality"></div>
                </figure>
                <div>
                  <p>{obj.Type}</p>
                  <p style={estherColor}>{obj.Name}</p>
                </div>
              </div>
            } else {
              return <div key={key} className={`eq-weapon ${key}`}>
                <figure>
                  <img src={obj.Icon} alt="이미지" style={hero} />
                  <div className="quality"></div>
                </figure>
                <div>
                  <p>{obj.Type}</p>
                  <p style={heroColor}>{obj.Name}</p>
                </div>
              </div>
            }
          })
        }
        
        
      </div>
    </div>
  )
}

export default Weapon