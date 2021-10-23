import React from 'react';
import './Home.css';
import logo from '../Components/Navbar/GeorgiaTechlogo.png';
console.log(logo);
function Home() {
  return (
    <div className='home'>
      <h1 className = 'titletext'>
          Welcome to Golden Jackets! {"\n"}
          A pawn shop meant for GaTech Students.
      </h1>
      <img src={logo} className='logo'></img>
      
    </div>
  );
}

export default Home;