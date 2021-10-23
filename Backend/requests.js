import sha1 from 'sha1'

import {useState, useEffect} from 'react'
  import request from 'request';
  let options = {
    method:"get",
    url:"http://localhost:6969/register",
    headers: {
      "Access-Control-Allow-Origin" : "http://localhost:6969",
      "content-type": "application/json",
    },
    body : {
      username: "tyler",
      pass: sha1("password")
    }
  }

  const [token, setToken] = useState('');
    useEffect(() => {
      async function getToken() {
        const token = await new Promise((resolve, reject) => {
          request(options, (error, response, body) => {
            resolve(JSON.parse(body));
          })
        })
        setToken(token.map(o => o.name + ", "));
     }
     getToken();
  }, [])