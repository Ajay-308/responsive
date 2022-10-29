import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram } from "react-icons/ai"


const Home = () => {
  return (
    <>
    < div className='home' id="home">
      <main>
        <h1>tech world</h1>
        <p>here you can learn alot of new tech</p>
      </main>

    </div>

    <div className='home2' >
      <img src={vg} alt="Graphics" />
      <div>
        <p>we are here to help you ,here to save your time only you have to do one<br/>
          thing just download it oropen website and in search section only search.<br/>
        </p>
      </div>
    </div>
    <div className="home3" id="about">
      <div>
        <h1>who we are?</h1>
        <p>we provide you a platform where you can learn new thing . here lot of people learn 
          tech thing like ML,AI, DS, python and tech like MERN stack, web3 , devops and many more
          only you have to do one thing just enroll for free or you can buy course too it only 
          up to you and learn tech like never before.
        </p>
      </div>
    </div>
    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay:"0.3s",
          }}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div style={{
            animationDelay:"0.5s",
          }}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>
          <div style={{
            animationDelay:"0.7s",
          }}>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>
          <div style={{
            animationDelay:"1s",
          }}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>

        </article>
      </div>
    </div>
    </>

  )
}

export default Home