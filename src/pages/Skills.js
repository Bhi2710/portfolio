import React, {useEffect} from "react";
import lepy from "../assets/laptop.png";
import Aos from "aos";
import 'aos/dist/aos.css';
import movie from '../assets/movie.PNG';
import w3clone from '../assets/w3clone.PNG';
import emoji from '../assets/emoji.PNG';
import github from '../assets/github_find.PNG';
import watch from '../assets/watch.PNG';
import port from '../assets/portfolio.PNG';

const Skills = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  },[])

  return (
    <div className="Parent_main_skills_container">
      <div className="main_skills_container">
        <div data-aos="fade-right" className="skills_container">
          <img src={lepy} alt="skills_icon" />
          <span>My Skills</span>
        </div>
      </div>

      <div className="main_skills_bar">
        <div className="skills_bar">
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
      
      <div className="main_skills_container">
        <div data-aos="fade-right" className="skills_container">
          <img src={lepy} alt="skills_icon" />
          <span>My Project</span>
        </div>
      </div>
      <div className="myproject">
        <div data-aos="fade-left" className="myproject_detail">
          <span>These are some of my project that i have worked on so far.</span>
        </div>
      </div>

      <div className="myproject_details_img">
        <div className="myproject_detail_image">
          <div data-aos="fade-right" className="image_box_1">
            <img src={movie} alt="movie"/>
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
            <img src={w3clone} alt="movie"/>
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
      <div className="myproject_details_img">
        <div className="myproject_detail_image">
          <div data-aos="fade-right" className="image_box_1">
            <img src={github} alt="movie"/>
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
            <img src={emoji} alt="movie"/>
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
      <div className="myproject_details_img">
        <div className="myproject_detail_image">
          <div data-aos="fade-right" className="image_box_1">
            <img src={watch} alt="movie"/>
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
            <img src={port} alt="movie"/>
            <a href="https://abhi2710.netlify.app/" target="_blank" rel="noreferrer">
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
  )
}

export default Skills;
