import React from 'react'
import './style.css';
// 앞글자 대문자면 컴포넌트임!! (js는 소문자로 시작)
// react 플러그인(ES7) 설치 -> rafce


const ClickEvent = () => {

    // react는 실행 순서가 함수니까 위에서 부터 아래로 진행됨
    // 버튼이 그려지기 전에 함수가 실행되서 오류남
    // 방식 1. 그래서 버튼에 바로 인라인 방식으로 이벤트함수를 넣어줘야함
    // html의 인라인방식이 아니라
    // onclick이 아니라, onClick (대문자 주의)
    // 중괄호 안에 함수 넣기
    // 표현만 인라인이지, addevent한거랑 똑같음
    
    // const $btn1 = document.getElementById('btn1');
    // $btn1.onclick = e => {
    //     alert('클릭 잘했다!')
    // };
    
    // 방식 2. 함수정의하고, 인라인으로 함수 넣기 (소괄호로 호출하지 않는 거 기억나쥬?)
    const greeting = e => {
        alert('안뇽안뇽~ 리액트');
    };
    
    // 방식 3. 
    const changeBox = e => {

      const $box = document.querySelector('.box');
      $box.style.background = 'skyblue';
      $box.style.width = '200px';
      $box.style.height = '200px';

    };

  return (
    <>
    <button id='btn1' onClick={ () => { alert('클릭 잘했어~~')} }>클릭해봥~</button>
    <button id='btn2' onClick={greeting}>클릭2</button>
    <button id='btn3' onMouseOver={changeBox}>클릭3</button>

    <div className='box'></div>
    </>
    )
}

export default ClickEvent