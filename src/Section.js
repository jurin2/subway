import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function Section(props){
  return(
    <section className="section">
      <div className="section-subway-menu">
        <div className="container">
          <div className="hd">
            <h2>Subway's Menu</h2>
            <div className="tab">
              <ul className='clearfix'>
                <li className="active"><a href="#">클래식</a></li>
                <li><a href="#">프레쉬&라이트</a></li>
                <li><a href="#">프리미엄</a></li>
                <li><a href="#">아침메뉴</a></li>
              </ul>
            </div>
          </div>

          <div className="swiper-sub-wrap">
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
            >
              <SwiperSlide>
                <img src={require("./images/sandwich_cl01_01.jpg")}/>
                <strong>이탈리안 비엠티</strong>
                <p>페포로니, 살라미 그리고 햄이 만들어내는 최상의</p>
                <p>조화! 전세계가 사랑하는 써브웨이의 베스트셀러!</p>
                <p>Biggest Meatiest, It's B.M.T!</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src={require("./images/sandwich_cl02_01.jpg")}/>
                <strong>이탈리안 비엠티</strong>
                <p>페포로니, 살라미 그리고 햄이 만들어내는 최상의</p>
                <p>조화! 전세계가 사랑하는 써브웨이의 베스트셀러!</p>
                <p>Biggest Meatiest, It's B.M.T!</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src={require("./images/sandwich_cl03_01.jpg")}/>
                <strong>미트볼</strong>
                <p>이탈리안 스타일 비프 미트볼에</p>
                <p>써브웨이만의 풍부한 토마토 향이 살아있는</p>
                <p>마리나라소스를 듬뿍</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src={require("./images/sandwich_cl04_01.jpg")}/>
                <strong>햄</strong>
                <p>기본 중에 기본!</p>
                <p>풍부한 햄이 만들어내는</p>
                <p>입 안 가득 넘치는 맛의 향연</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src={require("./images/sandwich_cl05_01.jpg")}/>
                <strong>참치</strong>
                <p>남녀노소 누구나 좋아하는</p>
                <p>담백한 참치와 고소한 마요네즈의</p>
                <p>완벽한 조화</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src={require("./images/sandwich_cl06_01.jpg")}/>
                <strong>에그마요</strong>
                <p>부드러운 달걀과 고소한 마요네즈가 만나</p>
                <p>더 부드러운 스테디셀러</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="section-subway">
        <div className="content-top">
          <div className="utilization">
            <p>
              써브웨이를
              <br />
              제대로 즐기는 방법!
            </p>
            <a href="#">
              <span>이용방법</span>
            </a>
          </div>
          <div className="history">
            <p>
              50년 역사를 가진
              <br />
              No.1 프랜차이즈의 성장기
            </p>
            <a href="#">
              <span>써브웨이 역사</span>
            </a>
            <img src={require("./images/img_subway_history.png")} alt="" />
          </div>
        </div>
        <div className="content-bottom clearfix">
          <div className="whats-new">
            <div className="hd">
              <h2>What's New</h2>
              <p>
                써브웨이의 다양한 소식을
                <br />
                빠르게 전달해드립니다.
              </p>
            </div>
            <div className="new-list">
              <ul>
                <li><a href="#">웨지 포테이토 일시 판매 중단 안내</a></li>
                <li><a href="#">써브웨이 고객센터 2022년 설 연휴 휴무 안내</a></li>
                <li><a href="#">써브웨이와 함께하는 "소녀의세계2"</a></li>
              </ul>
              <a href="#" className="more">more</a>
            </div>
          </div>
        </div>
      </div>

      <div className="quick-menu">
        <ul className='clearfix'>
          <li className="qm01">
            <a href="#">
              <div className="icon"></div>
              <strong>프랜차이즈</strong>
              <span>개설절차/투자비용 정보</span>
            </a>
          </li>
          <li className="qm02">
            <a href="#">
              <div className="icon"></div>
              <strong>지사안내</strong>
              <span>수도권/지방 지사정보</span>
            </a>
          </li>
          <li className="qm03">
            <a href="#">
              <div className="icon"></div>
              <strong>광고영상</strong>
              <span>TV광고/동영상</span>
            </a>
          </li>
          <li className="qm04">
            <a href="#">
              <div className="icon"></div>
              <strong>고객문의</strong>
              <span>자주하는 질문/1:1문의</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Section;