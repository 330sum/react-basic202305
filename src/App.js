import SayHello from './SayHello';
import ChangeEvent from './component/chap01_event/ChangeEvent';
import ClickEvent from './component/chap01_event/ClickEvent';
import SubmitEvene from './component/chap01_event/SubmitEvent';
import FoodList from './component/chap02_props/FoodList';
import Counter from './component/chap03_state/Counter';
import NickName from './component/chap03_state/NickName';


function App() {

  const looping = () => {
    const helloList = [];
    for (let i = 0; i < 2; i++) {
      helloList.push(<SayHello />);
    }
    return helloList;
  };

  // jsx문법에서는 스크립트를 코드를 직접 사용 불가능
  // {} 안에서 함수호출문이나 변수참조를 할 수 있음.
   // jsx문법(return다음의 ()소괄호 영역 에서는 스크립트 코드를 직접 사용 불가능 (소괄호 밖에서 사용 가능)
  // js 문법 사용 방법 : jsx 안에 {} 중괄호로 넣고 세미콜론 넣지말고
  // 함수호출문이나 변수참조만 할 수 있음
  return (
    <>
     {/* <p>**** FoodList 컴포넌트 ****</p>
      <FoodList />
      <p>**** NickName 컴포넌트 ****</p>
      <NickName />
      <p>**** Counter 컴포넌트 ****</p> */}
      <Counter />

      {/* 5월22일 */}
      {/* { looping() }
      <ClickEvent />
      <ChangeEvent />
      <SubmitEvene /> */}
    </>
  );
}

export default App;
