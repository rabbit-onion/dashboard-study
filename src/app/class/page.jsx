'use client';

import React from 'react';

class OrderCoffee extends React.Component {
  // 생성자 함수
  constructor(props) {
    super(props); // 부모 클래스의 생성자 함수 호출
    this.state = {
      name: props.name,
      price: props.price,
    };
  }

  // 메서드 생성
  order() {
    console.log(`${this.state.name}는 ${this.state.price}원 입니다.`);
  }

  render() {
    return (
      <div>
        <p>{this.order()}</p>
      </div>
    );
  }
}

export default OrderCoffee;
