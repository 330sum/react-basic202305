import React from "react";

// 컴포넌트 : 렌더링의 일정부분의 조각
// 클래스형 컴포넌트, 함수형 컴포넌트가 있는데 요즘은 다 함수형 사용
function SayHello() {
    return (
        <div>
            <p>안녕</p>
            <span>메롱</span>
        </div>
    );
}

// 화살표 함수로 작성해도 됨
// function SayHello = () =>
//     return (
//         <div>
//             <p>안녕</p>
//             <span>메롱</span>
//         </div>
//     );


// 내보내기 해야함
// 원래 객체로 넣어서 보내야 하는데, default하면 함수 그냥 바로 내보내기 됨
export default SayHello;
