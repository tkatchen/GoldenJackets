import React from 'react';

function Contact() {
  return (
    <div className='contactHeader'>
      <h1>Contact us at:</h1>
      <div className='row'>
        <div className='cartColumn'>
          <h2 className='nameInfo'>Abhinav Boyapati - Frontend</h2>
          <h2>aboyapati6@gatech.edu</h2>
        </div>
        <div className='cartColumn'>
          <h2 className='nameInfo'>Tyler Katchen - Backend</h2>
          <h2>tkatchen3@gatech.edu</h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;