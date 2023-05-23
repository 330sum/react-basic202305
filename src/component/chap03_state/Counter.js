import React,  { useEffect, useState, userEffect } from 'react'

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

    const[nick, setNick] = useState('익명');

    /* 
        useEffect 
        - 화면이 처음 렌더링(마운트된다라고 표현함) 될 때, 자동호출 되는 함수
        - 상태값이 변경될때마다 다시 호출
        - 만약에 첫 렌더링 시에만 useEffect를 호출하고 싶다면
          두번째 파라미터로 빈 배열(의존성 배열)을 넣으면 된다
        - 의존성 배열에 상태변수를 넣으면 해당 상태변수가 업데이트 될 때마다 useEffect가 재 호출됨
        - 즉, useEffect 쓰면 1회만 호출되고, []의존성배열에 넣으면 또 호출함
    */
   useEffect(() => {
        // 화면이 처음 렌더링 될 때, 서버 api호출하는 경우
        // 처음 1번만 호출하고 또 할 필요가 있을까?
        console.log('3. useEffect Call!!');
        console.log(`4. nick: ${nick}, number: ${number}`);
    }, [number]);

    console.log('1. component function execute!');


    const increase = () => { setNumber(number + 1); };
    const decrease = () => { setNumber(number - 1); };
    
    const changeNick = () => { setNick('김철수'); };

  return (
    <>
        { console.log('2. redered html!') }
        <h1>닉네임: {nick}</h1>
        <h2>{number}</h2>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
        <button onClick={changeNick}>닉네임 변경</button>
    </>
    )
}

export default Counter