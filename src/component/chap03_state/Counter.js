import React,  { useState } from 'react'

const Counter = () => {

    // let number = 0;
    // 지역변수를 전역변수처럼 사용하게 해주는 useState Hook 사용

    const[number, setNumber] = useState(0);
    // const[초기값변수, 함수] = useState(초기값);
    // 딱 2개만 있음!!
    // 재랜더링됨 
    // (딱 그부분만 재랜더링 되어야 하는데, 전체가 다 랜더링 되는 경우가 있음(사이드 이펙트))
    // 부작용은 컴포넌트 외부의 동작 또는 효과를 의미
    // 예: 네트워크 요청, 데이터 변경, 이벤트 리스너 등이 부작용에 해당
    // 그래서 부작용을 처리하기 위해 useEffect 훅을 사용

    const increase = () => { setNumber(number + 1); };
    const decrease = () => { setNumber(number - 1); };

  return (
    <>
        <h1>{number}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>+1</button>
    </>
    )
}

export default Counter