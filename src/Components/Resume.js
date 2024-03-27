import React, { useState } from "react";
import Slide from "react-reveal";
import { getJokes } from "./jokes";
import { PacmanLoader } from "react-spinners";
import Inpaint from "./Inpaint";

function Resume ({data}) {

  const [joke, setJoke] = useState('');
  const [isLoading, setLoading] = useState(false)

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  async function funGenerate(name) {
    if(name === "FUN(Click me)") {
      setJoke("");
      setLoading(true)
      let dd = await getJokes();
      setTimeout(() => {
        setJoke(dd.joke)
        setLoading(false)
      }, 2000)
      
      
    }
    return
  }


    if (!data) return null;
    
    const skillmessage = data.skillmessage;
    const education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
          {/*
          {education.degree} <span>&bull;</span>
            //<em className="date">{education.graduated}</em>*/
            }
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            {/**
             * <span>&bull;</span> <em className="date">{work.years}</em>
             */

            }
            
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    const aiwork = data.aiwork.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            {/**
             * <span>&bull;</span> <em className="date">{work.years}</em>
             */

            }
            
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    const skills = data.skills.map((skills) => {
      const backgroundColor = getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
         <li key={skills.name} onClick={() => funGenerate(skills.name)}>
        <span style={{ width, backgroundColor }} className={className}></span>
        <em>{skills.name}</em>
      </li>
        
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Chat</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Presentations</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row Inpaintai">
            <div className="three columns header-col">
              <h1>
                <span>InpaintAi</span>
              </h1>
            </div>

            <div className="nine columns main-col">{aiwork}
            
            </div>
            <div className="nine columns main-col">
              <iframe src="https://player.vimeo.com/video/917906110?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"  Allow="autoplay; fullscreen; picture-in-picture; clipboard-write">
                </iframe>
                </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Time saved</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
                {isLoading && 
                <>
                <PacmanLoader color="#36d7b7" />
                  <h3>Generating dad joke</h3>
                </>
                
                }
                {joke && 
                <>
                  <p>{joke}</p>
                </>
              

                }
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }


export default Resume;
