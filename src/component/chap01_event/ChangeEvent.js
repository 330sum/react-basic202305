import React from 'react'

// ASI (autometic semicolne insertion) : 세미콜론을 자동으로 주입함. 그래서 이것 때문에 띄어쓰기와 세미콜론 삽입에 주의해야함 
// 얼티밋, 함수형 단축키 만드는 컴포넌트?

const ChangeEvent = () => {

    const changeValue = e => {
        console.log(`value : ${e.target.value}`);
    };


    return (
        <>
            <input type='text' onChange={changeValue} />

            <select onChange={changeValue}>
                <option value='pizza'>피자</option>
                <option value='chicken'>치킨</option>
                <option value='pasta'>파스타</option>
            </select>
        </>
    );  
};

export default ChangeEvent