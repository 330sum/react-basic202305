// rafcp (props 쫌 넣어줌)
// 인텔리제이 rccp
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const NickName = props => {

    const statement = useState('홍순구'); // 배열리턴함
    // const nickName = statement[0];
    // const setNickName = statement[1];
    // 배열이니까 구조분해 가능
    const[nickName, setNickName] = useState('홍슌구');

    console.log('statement: ', statement);
    // useState훅은 배열을 리턴하는 데, 
    //  (2) [undefined, ƒ]
    //      0: undefined1: ƒ ()
    //      length: 2
    //      [[Prototype]]: Array(0)

    // 0번에는 상태변수값, 1번에는 상태변수값을 변경하는 setter함수가 들어있음

    // let nickName = '홍순구'
    // 위는 함수안에 있는 지역변수임 
    // (지역변수의 값을 변경한 상태를 유지하고 싶으면 클로저 필요!)
    // 상태값 유지 -> 리액트에서 클로저 제공 -> useState Hook (리액트핵심)

    const changeNickName = e => {
        console.log('changeNickName!! call!');

        // nickName = '척척박사';
        setNickName('척척박사');
        console.log('nickName: ', nickName);
    }

  return (
    <>
      <h1>Hello~~ {nickName}</h1>
      <button className='btn' onClick={changeNickName}>척척박사</button>
      <button className='btn' onClick={() => setNickName('척척석사')}>척척석사</button>
    </>
  )
}

NickName.propTypes = {}

export default NickName