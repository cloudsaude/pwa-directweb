import { useEffect, useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import Cookies from "js-cookie";

export default () => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const p = String(Cookies.get('cloudsaude'))
    setMessage(p)
  }, [])


  return (
    <div className="container">
      <Link href="/">
        <a className="goForward">
          <span>voltar</span>
        </a>
      </Link>

      <a className="message">
        <span>{message}</span>
      </a>

      <div className="diviframe">
        <iframe src="https://web.app.cloudsaude.com.br/pwapp/"
          title="rodneyrinaldi"
          className="iframe"
          allow="camera *; microphone *">
          <div style={{
            position: 'absolute',

            top: '300px',
            left: '600px',

            alignSelf: 'center',
            padding: '8px 14px 6px',
            color: 'aliceblue',
            background: '#f93d',
            borderRadius: '5px',
            textDecoration: 'none',
            marginBottom: '20px',
          }}>
            <p>Status---------------------------</p>
            {console.log('gravado dentro cloudsaude do iframe ', Cookies.get('cloudsaude'))}
            {/* {alert(Cookies.get('cloudsaude'))} */}
            {/* {Cookies.set('cloudsaude', 'cookie cloudsaude iframegravado')} */}
            <p>Status---------------------------</p>
          </div>
        </iframe>
      </div>


      <style jsx>{`
      html {
        width: 100vw;
        height: 100vh;
        margin:0;
        padding:0;
        border:none;
      }

      body {
        width: 100vw;
        height: 100vh;
        margin:0;
        padding:0;
        border:none;
      }
      .container {
        width: 100vw;
        height: 100vh;
        color: #e6ecf0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      p {
        color: black;
      }

      .logo {
        width: 115px;
      }
      
      .diviframe {
        width: 100vw;
        height:100vh;
        margin:0;
        padding:0;
        border:none;
      }

      .iframe {
        width: 100vw;
        height: 100vh;
        margin:0;
        padding:0;
        border:none;
      }

      .message {
        position: absolute;
        top: 8px;
        left: 0;

        align-self:center;
        padding: 8px 14px 6px;
        color: aliceblue;
        background: #e1e;
        border-radius: 5px;
        text-decoration: none; 
        margin-bottom: 20px;
      }

      .goForward {
        position: absolute;
        top: 8px;
        right: 0;

        align-self:center;
        padding: 8px 14px 6px;
        color: aliceblue;
        background: rgb(60, 94, 110);
        border-radius: 5px;
        text-decoration: none; 
        margin-bottom: 20px;
      }
      .goForward:hover {
        background: rgb(88, 128, 146);
      }
    `}</style>
    </div >
  )
}
