import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Navi from './Navbar';
import Slider from './Slider';
import images1 from './images/wl.jpg';
import Art from './Articleaside';
import Gall from './Gallery';
import Service from './Serviceare';
import Client from './Client';
import Subs from './Subscribe';
import Foot from './Footer';
import Copy from './Cpoyright';


const App = () =>{
  return(
    <>
    <Navi/>
    <Slider/>
    <Art/>
    <Gall/>
    <Service/>
    <Client/>
    <Subs/>
    <Foot/>
    <Copy/>
    {/* <div className='gaazi'>
      <img src={images1} height={200} width={200} className="one"/>
      <img src={images1} height={200} width={200} className="two" />
      <img src={images1} height={200} width={200} className="three" />
    </div> */}
   
    </>
  )
}

export default App;
