import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I Bring to the Table</span>
        <span className="skillDesc">With a strong foundation in HTML, CSS, JavaScript, and a passion for learning, I'm always eager to embrace the latest technologies and industry trends. I specialize in front-end development, creating responsive, intuitive, and aesthetically pleasing websites. My goal is to make the web a more engaging and accessible place for everyone.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>I love designing an eye pleasing and interactive UI</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>I create aesthetically appealing Web Designs</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>I like to create minimal App Designs </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills