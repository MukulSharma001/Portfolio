import React from 'react'
import './intro.css';
import bg from '../../assets/myImage.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Mukul Sharma</span><br />Web Developer</span>
            <p className="introPara">I’m a passionate web developer with a penchant for turning ideas<br /> into immersive online experiences. Through a blend of code, creativity,<br /> and collaboration, I breathe life into websites that captivate and engage.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire me" className='btnImg' />Hire me</button></Link>
        </div>
        <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default Intro