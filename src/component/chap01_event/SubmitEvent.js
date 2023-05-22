import React from 'react'

// 대문자면 컴포넌트
const SubmitEvent = () => {

  const send = e => {

    e.preventDefault(); // submit기능 중지

    const $nick = document.getElementById('nickName');
    console.log($nick.value);
  };

  const buttonStyle = {
      color : 'red',
      backgroundColor : 'orange',
      fontSize : '1.5em'
  }


    return (
        // form태그로 submit되지 않게 해야함
        // 우리는 SPA니까 rest방식으로 보내야 함. 
        // 옛날코드에 form이 있으니까 onSubmit으로 제어한다는 것!
        <form onSubmit={send}>
            <input type ='text' id ='nickName' name='nick' />

            <button type='submit'>확인</button>

            {/* <button style='color: red;' type='submit'>확인</button> */}
            <button style={buttonStyle} type='submit'>확인</button>

        </form>
        // 스타일 넣는 방법은 인라인로 바로 못넣음. 그래서 넣는방법? (30번라인)
        // style={{}} 
        // 바깥 중괄호 - 나 js 넣는다
        // 안 중괄호 - 객체다
        // 또는 아예 지금 방법처럼 밖으로 빼서 작성가능 (14번라인) 
    )
}

export default SubmitEvent