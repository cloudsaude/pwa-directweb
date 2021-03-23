import { FunctionComponent } from "react";
import Link from 'next/link'
import Image from 'next/image'

export default () => (
  <div className="container">
    <Link href="/">
      <a className="goForward">
        <span>voltar</span>
      </a>
    </Link>
    <div className="diviframe">
      <iframe src="app.telemedicina.directhealth.com.br" title="rodneyrinaldi" className="iframe">
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
        height: 100vh;
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
  </div>
);
