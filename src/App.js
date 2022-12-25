// import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComp from './components/NavbarComp';
import Banners from './components/Banners';
import Placeholders from './components/Placeholders';
import Cards from './components/Cards';
import News from './components/News';
import Otherarticles from './components/Otherarticles';
import Videos from './components/Videos';
import Footer from './components/Footer';
function App() {
  return (
    <div className='App'>
    <NavbarComp />
    <Banners />
    <br></br>
    <br></br>
     <center><h1> RESOURCE GUIDE</h1></center>
     <br></br>
     <div className='boom'>      
     <Placeholders />
     <br></br>
     <h1 className="boom">AGE CHARTS</h1>
     <br></br>
     <p className="boom">The Little League Baseball®, Little League Softball®, and Little League Challenger Division® age charts determine the league age of a player according to the year and month of their birth.</p>
     <br></br>
     <Cards />
     <br></br>
     <h1 className="boom">LATEST NEWS</h1>
     <br></br>
     <News />
     <br></br>
     <Otherarticles />
     <br></br>
     <center><h5 className='H5Hover'> VIEW ALL NEWS</h5></center>
     <br></br>
     <Videos />
     <br></br>
     </div>
    <Footer/>
    </div>
  );
}

export default App;
