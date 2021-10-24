import React from 'react';
import sha1 from 'sha1'
import {useState} from 'react'
import axios from 'axios'
import './Login.css'
import {setCards, getHand} from '../Util/cardHelper.js'

function Login() {
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [registerUsername, setRegisterUsername] = useState('')
  const [loginUsername, setLoginUsername] = useState('')
  async function login(event) {
    event.preventDefault()

    let headers = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    }

    let body = {
      username: loginUsername,
      pass: sha1(loginPassword)
    }

    axios.post("http://localhost:6969/login", headers, {params:body})
    .then((res) => {
      if(res.data.length == 0) {
        document.getElementById("loginOutput").innerHTML = "Incorrect username or password"
      } else {
        setCards(res.data[0].cards.data)
        document.getElementById("loginOutput").innerHTML = "Succesfully logged in"
      }
    })
  }

  async function register(event) {
    event.preventDefault()

    let headers = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    }
    if(!registerPassword) return document.getElementById("registerOutput").innerHTML = "Incorrect username or password"
    let body = {
      username: registerUsername,
      pass: sha1(registerPassword)
    }

    await axios.post("http://localhost:6969/register", headers, {params:body})
    .then((res) => {
      if(res.data) {
        document.getElementById("registerOutput").innerHTML = "Succesfully registered"
      } else {
        document.getElementById("registerOutput").innerHTML = "Username already in use"
      }
    })
  }
  return (
    <div className="loginPage">
      <h1>Welcome to the Login Page!</h1>
      <div className="row">
        <div className="column">
          <div className='login'>
            <form>
              <h2 className="title">Sign in</h2>
              <div className="form-group">
                <label><b>Username</b></label>
                <input onChange={event => setLoginUsername(event.target.value)} className="formControl" placeholder="Username" />
              </div>
              <div className="form-group">
                <label><b>Password</b></label>
                <input onChange={event => setLoginPassword(event.target.value)} type="password" className="formControl" placeholder="Password"></input>
              </div>

              <button onClick={login} type="submit" className="btn">Submit</button>
              <div id="loginOutput" className="text"></div>
            </form>
          </div>
        </div>

        <div className="column">
          <div className='login'>
            <form>
              <h2 className="title">Register</h2>
              <div className="form-group">
                <label><b>Username</b></label>
                <input onChange={event => setRegisterUsername(event.target.value)} className="formControl" name="username" placeholder="Username" />
              </div>
              <div className="form-group">
                <label><b>Password</b></label>
                <input onChange={event => setRegisterPassword(event.target.value)} type="password" name="password" className="formControl" placeholder="Password"></input>
              </div>
              <button onClick={register} type="submit" className="btn">Submit</button>
              <div id="registerOutput" className="text"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;