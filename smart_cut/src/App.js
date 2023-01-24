import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [salon, change_salon] = useState([['이가자 헤어비스', '부산광복점', '겨울특가', '15%'], ['이철 헤어커커', '광복롯데점', '겨울방학 할인', '10%'], ['미주헤어', '부산역점', '전고객 아로마마사지 무료', '15%']])
  return (
    <div className="App">
      
      <BestHairshop_layout salon={salon}></BestHairshop_layout>
      <MenuBar></MenuBar>

    </div>
  );
}

// 베스트 헤어샵 레이아웃
function BestHairshop_layout(props){
  return (
    <div className="v0_9901">
      {/* 베스트 헤어샵 */}
      <div className="best_hairshop">
          <div className="wrap2">
            <BestHairshop salon={props}></BestHairshop>
          </div>
          <button className="view_all">모두 보기</button>
          <span className="v0_9921">베스트 헤어샵</span>
      </div>
    </div>
  );
}

// 베스트 헤어샵 컴포넌트
function BestHairshop(props){
  const result = [];
  var newArray = [...props.salon.salon];
  console.log(newArray.length);
  for (let i = 0; i < newArray.length; i++) {
    console.log(newArray[i])
    result.push(
      <button className="salon_div" onClick={()=>{}}>
          <div className="salon_box">
              <img className="salon_img" src={logo}></img>
              <div className="salon_box2">
                  <div className="div1"><span className="salon_name">{newArray[i][0]} {newArray[i][1]}</span></div>
                  <div style={{display:'flex'}}>
                      <div className="div2"><span className="salon_event_name">{newArray[i][2]}</span></div>
                      <div className="div3"><span className="salon_event_price">-{newArray[i][3]}</span></div>
                  </div>
              </div>
          </div>
      </button>
    );
  }

  return result;
}


// 메뉴바 컴포넌트
function MenuBar(){
  return (
    // menuBar
    <div className="menuBar">
        <div className="vI0_9961_0_8175"></div>

        {/* main */}
        <button className="main" onClick={()=>{}}>
            <i id="icon1" className="fa-solid fa-earth-asia"></i>
            <span className="icon1_name">메인화면</span>
        </button>
        
        <button className="ai" onClick={()=>{}}>
            <i id="icon2" className="fa-solid fa-robot"></i>
            <span className="icon2_name">AI 헤어추천</span>
        </button>
        
        {/* reservation */}
        <button className="reservation" onClick={()=>{}}>
            <i id='icon3' className="fa-solid fa-calendar"></i>
            <span className="icon3_name">예약내역</span>
        </button>
        
        {/* chatting */}
        <button className="chatting" onClick={()=>{}}>
            <i id='icon4' className="fa-solid fa-comments"></i>
            <span className="icon4_name">채팅</span>
        </button>
        
        {/* profile */}
        <button className="profile" onClick={()=>{}}>
            <i id='icon5' className="fa-solid fa-user"></i>
            <span className="icon5_name">프로필</span>
        </button>
    </div>
  );
}

export default App;
