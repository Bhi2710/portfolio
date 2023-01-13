import React, { useEffect } from 'react';
import bg from '../assets/myphoto.jpg';
import git from '../assets/github.png';
import link from '../assets/linkedin.png';
import insta from '../assets/instagram.png';
import email from '../assets/email.png';
import logo_hire from '../assets/hired.png';
import user from '../assets/user.png';
import educ from '../assets/college.png';
import down from '../assets/download.png'
import Aos from "aos";
import 'aos/dist/aos.css';
import Resume from '../assets/yadav_Abhishek.pdf';
import lepy from "../assets/laptop.png";
import movie from '../assets/movie.PNG';
import w3clone from '../assets/w3clone.PNG';
import emoji from '../assets/emoji.PNG';
import github from '../assets/github_find.PNG';
import watch from '../assets/watch.PNG';
import port from '../assets/portfolio.PNG';


const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])


  return (
    <header className='Home_header'>
      <main className='Home'>
        <div className='Home_container'>
          <div className='center_home_container'>
            <div className='center_home_container_myphoto'>
              <img src={bg} alt="myphoto" />
            </div>
            <div className='main_center_home_container_icon'>
              <div className='center_home_container_icon'>
                <a href="https://github.com/Bhi2710" target="_blank" rel='noreferrer'>
                  <img src={git} alt="github" />
                </a>
                <a href="https://www.instagram.com/ab_his_h_ek/" target="_blank" rel="noreferrer">
                  <img src={insta} alt="insta" />
                </a>
                <a href="https://www.linkedin.com/in/abhishek-yadav-1606aa18b/" target="_blank" rel="noreferrer">
                  <img src={link} alt="linkedin" />
                </a>
                <a href="mailto:abhiyadav334455@gmail.com?subject=Hello! &body=write your message." target="_blank" rel="noreferrer">
                  <img src={email} alt="github" />
                </a>
              </div>
            </div>
            <div className='home_container_about'>
              <div data-aos="fade-up" className='home_container_about_aboutme'>
                <h1>About Me</h1>
                <span>Hey folks!</span>
                <p>My name is <span>Abhishek Yadav</span>. I'm a Web Developer based in kanpur. Bachelor's degree in Information Technology at A.P.J. Abdul kalam Technological University Lucknow. I'm looking forward to work in-hand with the organizations which provide an intution of collective belonging, responsibility and an environment that nurtures the ideas of creativity. I have acquired the skills neccessary to built great and premium websites.</p>
              </div>
            </div>
            <div className='home_container_hire'>
              <div data-aos="fade-up" className='home_container_about_hireme'>
                <img src={logo_hire} alt="hire_icon" />
                <span>Hire me</span>
              </div>
              <p data-aos="fade-up">I love to learn, continuously improving my skills, education and experience, I can make great website, portfolios, landing pages and much others.</p>
            </div>
            <div className='home_container_hire'>
              <div data-aos="fade-up" className='home_container_about_hireme'>
                <img src={user} alt="hire_icon" />
                <span>Personal Details</span>
              </div>
              <div data-aos="fade-up" className='Personal_Details'>
                <span>Full Name</span> <span>Abhishek Yadav</span>
              </div>
              <div data-aos="fade-up" className='Horizontal_line'></div>
              <div data-aos="fade-up" className='Personal_Details'>
                <span>Date of Birth</span> <span>27-10-1999</span>
              </div>
              <div data-aos="fade-up" className='Horizontal_line'></div>
              <div data-aos="fade-up" className='Personal_Details'>
                <span>Address</span> <span>Belaisa Azamgarh UP</span>
              </div>
              <div data-aos="fade-up" className='Horizontal_line'></div>
              <div data-aos="fade-up" className='Personal_Details'>
                <span>Email</span> <span>abhiyadav334455@gmail.com</span>
              </div>
              <div data-aos="fade-up" className='Horizontal_line'></div>
              <div data-aos="fade-up" className='Personal_Details'>
                <span>Phone no</span> <span>+91 7985615199</span>
              </div>
              <div data-aos="fade-up" className='Horizontal_line'></div>
              <div data-aos="fade-up" className='home_container_about_education'>
                <img src={educ} alt="hire_icon" />
                <span>Education</span>
              </div>
              <div data-aos="fade-up" className='eduaction'>
                <span>High School</span>
                <p>Studied in Subhagi H S School</p>
                <p>2014</p>
              </div>
              <div data-aos="fade-up" className='eduaction'>
                <span>Intermediate</span>
                <p>Studied in Subhagi I College School</p>
                <p>2016</p>
              </div>
              <div data-aos="fade-up" className='eduaction'>
                <span>B.Tech</span>
                <p>Dr. Ambedkar Institute of Technology for Handicapped kanpur</p>
                <p>2018 - 2022</p>
              </div>
            </div>

            <div data-aos="flip-up" className='My_Resume'>
              <h1>My Resume</h1>
            </div>
            <div className='parent_My_Resume_download'>
              <div data-aos="flip-down" className='My_Resume_download'>
                <a href={Resume} download={"Resume"}>Open Resume
                  <img src={down} alt='resume' />
                </a>
              </div>
            </div>

            <div className='HomeSkill'>
              <div className="Home_skills_container">
                <div data-aos="fade-right" className="Homeskills_container">
                  <img src={lepy} alt="skills_icon" />
                  <span>My Skills</span>
                </div>
              </div>

              <div className="main_skills_bar">
                <div className="home_skills_bar">
                  <div data-aos="zoom-in" className="bar">
                    <div className="info">
                      <span>HTML</span>
                    </div>
                    <div className="progress_line html"><span></span></div>
                  </div>
                  <div data-aos="zoom-in" className="bar">
                    <div className="info">
                      <span>CSS</span>
                    </div>
                    <div className="progress_line css"><span></span></div>
                  </div>
                  <div data-aos="zoom-in" className="bar">
                    <div className="info">
                      <span>JS</span>
                    </div>
                    <div className="progress_line js"><span></span></div>
                  </div>
                  <div data-aos="zoom-in" className="bar">
                    <div className="info">
                      <span>JAVA</span>
                    </div>
                    <div className="progress_line java"><span></span></div>
                  </div>
                  <div data-aos="zoom-in" className="bar">
                    <div className="info">
                      <span>REACT</span>
                    </div>
                    <div className="progress_line react"><span></span></div>
                  </div>
                  <div data-aos="zoom-in" className="bar">
                    <div className="info">
                      <span>MYSQL</span>
                    </div>
                    <div className="progress_line mysql"><span></span></div>
                  </div>
                  <div data-aos="zoom-in" className="bar">
                    <div className="info">
                      <span>MATERIAL UI</span>
                    </div>
                    <div className="progress_line material"><span></span></div>
                  </div>
                  <div data-aos="zoom-in" className="bar">
                    <div className="info">
                      <span>REDUX</span>
                    </div>
                    <div className="progress_line redux"><span></span></div>
                  </div>
                  <div data-aos="zoom-in" className="bar">
                    <div className="info">
                      <span>GIT HUB</span>
                    </div>
                    <div className="progress_line github"><span></span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="home_skills_container">
              <div data-aos="fade-right" className="skills_container">
                <img src={lepy} alt="skills_icon" />
                <span>My Project</span>
              </div>
            </div>

            <div className="Home_myproject">
              <div data-aos="fade-left" className="myproject_detail">
                <span>These are some of my project that i have worked on so far.</span>
              </div>
            </div>

            <div className="home_myproject_details_img">
              <div className="home_myproject_detail_image">
                <div data-aos="fade-right" className="image_box_1">
                  <img src={movie} alt="movie" />
                  <a href="https://search-movie-name-react.netlify.app/" target="_blank" rel="noreferrer">
                    <div className="image_box_container">
                      <div className="image_container">
                        <h2>Movie Search</h2>
                        <p>Find your favourite movies and give heart to make your collections.</p>
                        <h5>Technology use: REACT, Imbd API, Material Ui </h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div data-aos="fade-left" className="image_box_1">
                  <img src={w3clone} alt="movie" />
                  <a href="https://bhi2710.github.io/W3clone/" target="_blank" rel="noreferrer">
                    <div className="image_box_container">
                      <div className="image_container">
                        <h2>W3School</h2>
                        <p>A simple w3 school clone with authentication, post resposive functionality.</p>
                        <h5>Technology use: HTML, CSS</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="home_myproject_details_img">
              <div className="home_myproject_detail_image">
                <div data-aos="fade-right" className="image_box_1">
                  <img src={github} alt="movie" />
                  <a href="https://gitbucket.netlify.app/" target="_blank" rel="noreferrer">
                    <div className="image_box_container">
                      <div className="image_container">
                        <h2>Github User</h2>
                        <p>Search your github user name to see your number of repos follower following. </p>
                        <h5>Technology use: REACT, API, CSS </h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div data-aos="fade-left" className="image_box_1">
                  <img src={emoji} alt="movie" />
                  <a href="https://emojii-react.netlify.app/" target="_blank" rel="noreferrer">
                    <div className="image_box_container">
                      <div className="image_container">
                        <h2>Emoji</h2>
                        <p>Emoji find here you search your emoji and get multiple option, click on that to copy.</p>
                        <h5>Technology use: REACT, CSS</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="home_myproject_details_img">
              <div className="home_myproject_detail_image">
                <div data-aos="fade-right" className="image_box_1">
                  <img src={watch} alt="movie" />
                  <a href="https://bhi2710.github.io/Clock/" target="_blank" rel="noreferrer">
                    <div className="image_box_container">
                      <div className="image_container">
                      <h2>Stop Watch</h2>
                      <p>This is basic project to make a stop watch without using HTML and JS.</p>
                      <h5>Technology use: only CSS </h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div data-aos="fade-left" className="image_box_1">
                  <img src={port} alt="movie" />
                  <a href="/" target="_blank" rel="noreferrer">
                    <div className="image_box_container">
                      <div className="image_container">
                        <h2>portfolio</h2>
                        <p>In this i make a resposive Portfolio website to perform user interaction</p>
                        <h5>Technology use: React, CSS, HOOKS</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </header>
  );
}

export default Home;