import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

function MetaTag(){
    return(
        <HelmetProvider>
            <Helmet>
                <title>SUBWAY 써브웨이</title>

                <meta name="description" content="써브웨이 웹페이지" />
                <meta name="keywords" content="써브웨이,subway,샌드위치,랩,샐러드,아침메뉴,단체메뉴,음료" />
                <meta name="author" content="heo eun hye" />

                <meta property="og:title" content="써브웨이 웹페이지" />
                <meta property="og:url" content="https://jurin2.github.io/build/index.html/" />
                <meta property="og:image" content="https://jurin2.github.io/subway/og-img.jpg" />
                <meta property="og:description" content="여기를 눌러 링크를 확인하세요." />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="써브웨이 웹페이지" />
                <meta name="twitter:url" content="https://jurin2.github.io/build/index.html/" />
                <meta name="twitter:image" content="https://jurin2.github.io/subway/og-img.jpg" />
                <meta name="twitter:description" content="여기를 눌러 링크를 확인하세요." />

                <link rel="shortcut icon" type="image/x-icon" href="https://jurin2.github.io/subway/favicon.png" />
            </Helmet>
        </HelmetProvider>
    );
}

export default MetaTag;