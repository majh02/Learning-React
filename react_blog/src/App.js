/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '강남 고기 맛집';
  //State: 새로고침 없이도 재랜더링 가능
  let [title,titleChange] = useState(['남자코트 추천', '강남 고기 맛집', '리액트 독학하기']); // var [a,b] = [10, 100] -> a:10, b:100
  let [thumbsUp, thumbsUpChange] = useState(0);

  // function changeTitle(){
  //   var newArray = [...title];
  //   newArray[0] = '여자코트 추천';
  //   titleChange(newArray);
  // }
  
  return (
    <div className="App">
      {/* <button onClick={changeTitle}>Button</button> */}
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> { title[0] } <span onClick={()=>{thumbsUpChange(thumbsUp+1)}}>👍</span> {thumbsUp} </h3>
        <p>6월 1일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[1] } </h3>
        <p>6월 2일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[2] } </h3>
        <p>6월 5일 발행</p>
        <hr/>
      </div>
      <Modal/>
    </div>
  );
}

// Component 유의사항: 이름은 대문자로 시작, return() 안에 있는건 태그하나로 묶어야함
function Modal(){
  return(
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
