import { FunctionComponent } from "react";
import Link from 'next/link'
import Image from 'next/image'
import Cookies from 'js-cookie'

export default () => {

  function handleLocalstorage() {
    localStorage.setItem('cloudsaude', 'localstorage cloudsaude gravado')
    console.log('localstorage cloudsaude gravado')
  }

  function handleCookie() {
    Cookies.set('cloudsaude', 'cookie cloudsaude gravado');
    console.log('cookie cloudsaude gravado')
  }

  return (
    <div className="container">

      <Link href="/test5">
        <a className="goForward" onClick={handleCookie}>
          <span>chamando iframe cookie dentro</span>
        </a>
      </Link>

      {/* <Link href="https://www.grupodirectweb.com.br/">
        <a className="goForward">
          <span>chamando link</span>
        </a>
      </Link>

      <Link href="/test1">
        <a className="goForward">
          <span>chamando iframe</span>
        </a>
      </Link>

      <Link href="/test2">
        <a className="goForward">
          <span>chamando iframe novo</span>
        </a>
      </Link>

      <Link href="/test3">
        <a className="goForward" onClick={handleCookie}>
          <span>chamando iframe cookie</span>
        </a>
      </Link>


      <Link href="/test4">
        <a className="goForward" onClick={handleLocalstorage}>
          <span>chamando iframe localstorage</span>
        </a>
      </Link> */}

      <style jsx>{`
        .container {
          width: 100vw;
          height: 100vh;
          color: #e6ecf0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .goForward {
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
  )
};
