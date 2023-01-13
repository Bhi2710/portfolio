import React from "react";
import './Type.css';
import bg_video from '../../assets/video.mp4';
import Typewriter from 'typewriter-effect';

const Type = () =>{
    return(
        <div className="all_container">
          <video id="myVideo"  loop autoPlay muted >
            <source  src={bg_video} type='video/mp4' />
          </video>
          <div className="figcaption_container">
            <figcaption >
              <div className="figcaption_myName">
                <span>Hi! I'm Abhishek Yadav.&nbsp;  
                  <Typewriter />
                </span>
              </div>
              <div className="figcaption_autotype">
                  <span>
                    <Typewriter 
                      options={{
                        autoStart: true,
                        loop: true,
                        delay: 30,
                        strings:[
                        "Web Developer",
                        "Web Designer",
                        "Student",
                        ]
                      }}
                    />
                </span>   
              </div>
            </figcaption>
          </div>
          
        </div>
        
    );
}

export default Type;