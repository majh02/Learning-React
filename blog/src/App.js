/* esLint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, change_title] = useState(['강남 고기 맛집', '남자 코트 추천', '강남 우동 맛집'])
  let [thumbsUp, change_thumbsUp] = useState(new Array(title.length).fill(0))

  // 제목 변경
  function change_title_(){
    var newArray = [...title];
    var index = newArray.indexOf('남자 코트 추천');
    newArray[index] = '여자 코트 추천';
    change_title(newArray);
  }

  // 정렬 버튼
  function sort_title(){
    var newArray = [...title].sort();
    change_title(newArray);
  }

  // 좋아요 버튼 누르기
  function change_thumbsUp_(index){
    var newArray = [...thumbsUp];
    newArray[index] += 1;
    change_thumbsUp(newArray);
  }

  // 리스트 컴포넌트
  const Rendering = () => {
    const result = [];

    for (let i = 0; i < title.length; i++) {
      result.push(
        <div className='list'>
          <h3>{title[i]} <button onClick={()=>{change_thumbsUp_(i)}} style={{border:'none', background:'none'}}>👍</button> {thumbsUp[i]}</h3>
          <p>2월 17일 발행</p>
          <hr/>
      </div>
      );   
    }
    return result;
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={()=>{change_title_()}}>제목 변경 버튼</button>
      <button onClick={()=>{sort_title()}}>정렬 버튼</button>
      
      <Rendering></Rendering>

      <Modal></Modal>
      
    </div>
  );
}

// 모달 컴포넌트
function Modal(){
  return(
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  );
}

export default App;
