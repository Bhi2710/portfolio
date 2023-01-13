import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import info from '../assets/info-button.png';
import dp from '../assets/abhi.jpg'
import hire_logo from '../assets/hired.png'
import Aos from "aos";
import 'aos/dist/aos.css';
import hobbie from '../assets/hobbie.png';
import fb from '../assets/facebook.png';
import insta from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';
import map from '../assets/flag.png';


const About = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  },[])

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gze3btn', 'template_4gubegy', form.current, 'wLUM1OuYUwmwBwq-k')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <main className="About_background_container">
            <div className="About_item">
                <header className="About_item_header">
                    <div className="About_item_img">
                      <img src={info} alt="icon" />
                    </div>
                    <div className="About_item_span">
                      <span>ABOUT</span>
                    </div>
                </header>
            </div>

            <div className="Who_am_I">
              <section data-aos="fade-right" className="About_item_right_section">
                <img src={dp} alt="myPhoto"/>      
              </section>
              <section data-aos="fade-left" className="About_item_left_section">
                <h1>Who Am I</h1>
                <p>Hey guys</p>
                <p>My name is Abhishek Yadav. I'm a Web Developer based in Kanpur. Passionate about what I do for new technical skills. Always interested in how the sites were made. Now i have acquired the skills neccessary to built great and premium websites.</p>
                <section className="Hired_container">
                  <img src={hire_logo} alt="hired_logo" />
                  <span>Hire me</span>
                  <p>Im open for collaborations. I can make for you great web designs, portfolios, landing pages and much others at good price.</p>
                </section>
              </section>          
              
            </div>
            <div className="hobbie_container">
              <div className="hobbie_container_headding">
                <img src={hobbie} alt='hobbie_icon' />
                <span>Hobbies</span>
              </div>
              <div className="hobbie_container_summary">
                <p data-aos="fade-left">"I am avid web designer, I am also educating myself on full stack developer."</p>
                <p data-aos="fade-right">"I enjoy playing game like Criket and Chess, game teaches me self motivation, discipline, Team-work, ..."</p>
                <p data-aos="fade-left">"I always helps me to make more money."</p>
              </div>
            </div>

            <div className="About_item_contact">
              <div className="contact_me">
                <span>CONTACT ME</span>
              </div>
              <div className="contact_me_summary">
                <span>Say Hi! or contact me on social media. I am Love to response</span>
              </div>
            </div>  
            

            <div className="About_form_container">
              <form className="About_form" ref={form} onSubmit={sendEmail}>
                <div data-aos="fade-right" className="About_form_name">
                  <label>Your Name</label>
                </div> 
                <div data-aos="fade-left" className="About_form_name_input"> 
                  <input type="text" name="user_name" placeholder="Enter Name"/>
                </div>
                <div data-aos="fade-right" className="About_form_email">  
                  <label>Your Email</label>
                </div> 
                <div data-aos="fade-left" className="About_form_email_input"> 
                  <input type="email" name="user_email" placeholder="Enter Email"/>
                </div>
                <div data-aos="fade-right" className="About_form_message">  
                  <label>Message</label>
                </div>
                <div data-aos="fade-left" className="About_form_message_input">  
                  <textarea name="message" placeholder="Enter you message"/>
                </div>
                <div className="About_form_submit">  
                  <input type="submit" value="Send" />
                </div> 
                
                <div className="About_Findme_on">
                  <div className="About_Findme_on_heading">
                    <span>Find Me On</span>
                  </div>
                </div>
                <div className="About_Findme_icon">
                  <a href="https://www.facebook.com/profile.php?id=100054320350229" target="_blank" rel="noreferrer">
                    <img src={fb} alt="facebook" data-aos="zoom-in" />
                  </a>
                  <a href="https://www.instagram.com/ab_his_h_ek/" target="_blank" rel="noreferrer">  
                    <img src={insta} alt="instagram" data-aos="zoom-in" />
                  </a>
                  <a href="https://www.linkedin.com/in/abhishek-yadav-1606aa18b/" target="_blank" rel="noreferrer">  
                    <img src={linkedin} alt="linkdin" data-aos="zoom-in" />
                  </a>
                  <a href="https://twitter.com/Ab_his_h_ek" target="_blank" rel="noreferrer">  
                    <img src={twitter}  alt="twitter" data-aos="zoom-in"/>
                  </a>    
                </div>
                <div className="About_Location">
                  <img src={map} alt="map" width={"20px"}/>
                  <span> Azamgarh, 276001, Uttar Pradesh, INDIA </span>
                </div>
                <div className="About_Location_made">
                  <p>Made By Abhishek Yadav😎</p>
                </div>
              </form>
            </div>    
        </main>
    )
}

export default About;