function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <div className="until-menu">
                    <ul className="clearfix">
                        <li><a href="#">이용약관</a></li>
                        <li><a href="#"><strong>개인정보처리방침</strong></a></li>
                        <li><a href="#">써브카드</a></li>
                        <li><a href="#">점주관리자</a></li>
                        <li><a href="#">Subway Listens</a></li>
                    </ul>
                </div>
                <div className="footer-conts">
                    <ul className="clearfix">
                        <li className="address">서울시 서초구 강남대로 535 프린스빌딩 15층</li>
                        <li>대표 : 안명선</li>
                        <li>전화 : 02-797-5036</li>
                        <li>사업자등록번호 : 101-84-04143</li>
                    </ul>
                </div>
                <div className="copyright">
                    <span>SUBWAY® is a Registered Trademark of Subway IP LLC. © 2021 Subway IP LLC. All Rights Reserved.</span>
                </div>
                <div className="sns">
                    <div className="instagram"></div>
                    <div className="facebook"></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;