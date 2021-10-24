import React from 'react';
import {code} from '../Util/auth.js'

function Code() {
  return (
    <div className='contactHeader'>
      <h1>New Code:</h1>
      <div className='row'>
        <div className='cartColumn'>
            <h2>{code[0]}</h2>
        </div>
        <div className='cartColumn'>
          <h2>Value: ${code[1]}</h2>
        </div>
      </div>
    </div>
  );
}

export default Code;