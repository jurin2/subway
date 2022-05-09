import './css/reset.scss';
import './css/App.scss';

import {useState} from 'react';
import SEOMetaTag from './SEOMetaTag';
import Header from './Header'
import Myslide from './Myslide'
import NavData from './NavData';
import QuickLink from './QuickLink';
import Section from './Section'
import Footer from './Footer';

function App() {
  let [title,setTitle] = useState(NavData);
  
  return (
    <div className="App">
        <SEOMetaTag/>
        <Header title={title}/>
        <Myslide/>
        <QuickLink/>
        <Section/>
        <Footer/>
    </div>
  );
}

export default App;
