/* esLint-disable */
import React, {useState} from 'react';
import './App.css';

function App() {

  let [user, change_user] = useState(['마지혜', 'F'])
  let [hairsytle, change_hairsytle] = useState([['하트형', '하트형은 넓은 이마와 뾰족한 턱을 가지고 있습니다.', '이마가 넓은 하트 얼굴', 'w_heart.jpg'], ['긴형', '좁고 긴 얼굴형은 가로 길이가 평균보다 짧고 세로 길이는 긴 얼굴입니다.', '좁고 긴 얼굴', 'w_oblong.jpg'], ['둥근형', '둥근 얼굴형은 얼굴의 가로와 세로가 비슷하고 둥근 턱 라인이 특징입니다.', '볼살 많은 둥근 얼굴', 'w_round.jpg'], ['각진형', '광대가 발달한 각진 얼굴은 아래 턱 부분이 넓게 벌어졌다는 것이 특징입니다.', '광대가 있는 각진 얼굴', 'w_square.jpg']]);
  let [salon, change_salon] = useState([['이가자 헤어비스', '부산광복점', '겨울특가', '15%', 'Igaza.jpg'], ['이철 헤어커커', '광복롯데점', '겨울방학 할인', '10%', 'Leechul.jpg'], ['조희헤어', '부산역점', '전고객 아로마마사지 무료', '15%', 'JoHee.jpg']]);
  let [designer, change_designer] = useState([['동빈 디자이너', '이가자 헤어비스', 's1d1.jpg'], ['하얀 부원장', '이철 헤어커커', 's1d3.jpg'], ['해나 원장', '조희헤어', 's1d4.jpg']]);
  return (
    <div className="App">
      
      <div className="v0_9901">
        <AIHair_layout user={user} hairsytle={hairsytle}></AIHair_layout>
        <BestHairshop_layout salon={salon}></BestHairshop_layout>
        <BestDesigner_layout designer={designer}></BestDesigner_layout>
      </div>
      <MenuBar></MenuBar>

    </div>
  );
}

//AI 헤어분석 레이아웃
function AIHair_layout(props){
  console.log(props.user);
  var user = [...props.user];

  return(
    <div className="AI">
        <span className="AI_HairRec">AI 헤어 추천</span>
        <button className="rec" onClick={()=>{}}>추천 받기</button>

        <div className="flex_div" style={{display:'flex'}}>
            <div id="emoji" className="recent_result">
              if ({user[1]}=='F') {
                <span>💇‍♀️</span>
              }
              else{
                <span>💇‍♂️</span>
              }
              
            </div>
            
            <div className="recent_result">
              <span className="bold_text">AI 헤어 추천</span>을 받아보세요!<br/>
              <span className="bold_text">{user[0]}</span>
              님의 얼굴형에 딱 맞는 헤어스타일을 추천해드립니다!
            </div>
        </div>

        <ul className="wrap_ai" style={{listStyle:'none'}}>
            <AIHair hairsytle={props.hairsytle}></AIHair>
        </ul>
    </div>
  );
}

// AI헤어추천 컴포넌트
function AIHair(props){
  var result = [];
  console.log(props.hairsytle);
  var hair_arr = [...props.hairsytle];

  for (let i = 0; i < hair_arr.length; i++) {
    var src_path = 'image/'+hair_arr[i][3];
    result.push(
      <li>
        <button className="hair_btn">
            <div className="hair">
              <div className="hair_photo">
                  <img src={src_path}></img>
              </div>

              <div className="hair_name_div">
                  <span className="hair_name">{hair_arr[i][0]}</span>
              </div>

              <div className="hair_exp_div">
                  <span className="hair_exp" style={{display:'none', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{hair_arr[i][1]}</span>
                  <span className="hair_tags" style={{overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{hair_arr[i][2]}</span>
              </div>
            </div>
        </button>
    </li>
    );
  }

  return result;
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
          {/* <button className="view_all">모두 보기</button> */}
          <span className="v0_9921">베스트 헤어샵</span>
      </div>
    </div>
  );
}

// 베스트 헤어샵 컴포넌트
function BestHairshop(props){
  const result = [];
  var salon_arr = [...props.salon.salon];
  for (let i = 0; i < salon_arr.length; i++) {
    var src_path = 'image/'+salon_arr[i][4];
    result.push(
      <button className="salon_div" onClick={()=>{}}>
          <div className="salon_box">
              <img className="salon_img" src={src_path}></img>
              <div className="salon_box2">
                  <div className="div1"><span className="salon_name">{salon_arr[i][0]} {salon_arr[i][1]}</span></div>
                  <div style={{display:'flex'}}>
                      <div className="div2"><span className="salon_event_name">{salon_arr[i][2]}</span></div>
                      <div className="div3"><span className="salon_event_price">-{salon_arr[i][3]}</span></div>
                  </div>
              </div>
          </div>
      </button>
    );
  }

  return result;
}

// 베스트 디자이너
function BestDesigner_layout(props){
  return (
    <div className="best_designer">
        <span className="v0_9942">베스트 디자이너</span>
        <ul className="wrap">
            <BestDesigner designer={props}></BestDesigner>
        </ul>
    </div>
  );
}

// 베스트 디자이너 컴포넌트
function BestDesigner(props){
  var result = [];
  var designer_arr = [...props.designer.designer];
  // console.log(designer_arr);
  for (let i = 0; i < designer_arr.length; i++) {
    var src_path = 'image/'+designer_arr[i][2];

    result.push(
      <li>
          <button className="designer_div" onClick={()=>{}}>
              <div className="designer_box">
                  <div className="photo_div">
                      <img className="designer_photo" src={src_path}></img>
                  </div>

                  <div className="desinger_name_div">
                      <span className="desinger_name">{designer_arr[i][0]}</span>
                  </div>

                  <div className="desinger_shop_div">
                      <span className="designer_shop">{designer_arr[i][1]}</span>
                  </div>
              </div>
          </button>
      </li>
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
