import { mouseEnter, mouseLeave } from './js/mouseEvent';

function Header(props){

  let mains = [];
  for(let i=0; i<props.title.length; i++){
    mains.push(
      <li onMouseEnter={()=>{mouseEnter()}}><a href="#">{props.title[i].main}</a></li>
    )
  }

  let subs = [];
  for(let i=0; i<props.title.length; i++){
    subs.push(
        <li>
          <a href="#">{props.title[i].title1}</a>
          <a href="#">{props.title[i].title2}</a>
          <a href="#">{props.title[i].title3}</a>
          <a href="#">{props.title[i].title4}</a>
          <a href="#">{props.title[i].title5}</a>
        </li>
    );
  }

      return(
      <header className="header">
        <div className="container">
          <div className="row">
            <h1 className="logo"><a href="https://jurin2.github.io/subway/build/index.html"><img src={require('./images/main_logo.png')} alt="서브웨이 바로가기" /></a></h1>
            <div className="userNav">
              <ul className="clearfix">
                <li><a href="#">로그인</a></li>
                <li><a href="#">회원가입</a></li>
                <li><a href="#"><img src={require("./images/icon_utill_global.png")} alt="" /></a></li>
              </ul>
            </div>
          </div>

          <nav className="mainNav">
            <ul className="mains">
                {mains[0]}
                {mains[1]}
                {mains[2]}
                {mains[3]}
                {mains[4]}
                {mains[5]}
            </ul>
            <div className="subs">
              <ul className="navdepth" onMouseLeave={()=>{mouseLeave()}}>
                {subs[0]}
                {subs[1]}
                {subs[2]}
                {subs[3]}
                {subs[4]}
                {subs[5]}
              </ul>
            </div>          
          </nav>
        </div>
      </header>
    );
}
export default Header;