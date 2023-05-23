import React from 'react'

const FoodItem = ({foodId, foodName:fName, price}) => {
    // const FoodItem = (props) => {
    // props는 객체여서 디스트럭처링(구조분해) 가능

    // console.log('props: ', props);
  return (
    // <li id={props.foodId}>{props.foodName} ({props.price}원)</li>
    <li id={foodId}> {fName} ({price}원)</li>
  )
}

export default FoodItem