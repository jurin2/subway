import './css/reset.scss';
import './css/App.scss';

import {useState} from 'react';
import Header from './Header'
import Myslide from './Myslide'
import NavData from './NavData';
import QuickLink from './QuickLink';


function Section(props){
  return(
    <section>
      <div className="container">
        중간
      </div>
    </section>
  );
}

function Footer(props){
  return(
    <footer>
      <div className="container">
        푸터
      </div>
    </footer>
  );
}

function App() {
  let [title,setTitle] = useState(NavData);
  
  return (
    <div className="App">
        <Header title={title}/>
        <Myslide/>
        <QuickLink/>
        <Section />
        <Footer/>
    </div>
  );
}

export default App;
