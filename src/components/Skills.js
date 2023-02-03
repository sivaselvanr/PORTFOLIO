import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import html from "../assets/img/Html.png"
import react from "../assets/img/React.png"
import css from "../assets/img/CSS3.png"
import jsw from "../assets/img/jsw.png"
import angular from "../assets/img/angular.png"
import bootstrap from "../assets/img/bootstrap.png";
import nodejs from "../assets/img/nodejs.png"
import mysql from "../assets/img/MySQL.png"
import psql from "../assets/img/postgresql.png"
import vscode from "../assets/img/vscode.png"
import github from "../assets/img/github.png"
import aws from "../assets/img/aws.png"
import bash from "../assets/img/bash.png"



import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Professional Skillset<br></br><br></br></h2>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider"> */}
                            
                        <h3>Languages</h3>
                            <div className="item">
                              </div>
                              <div className="js">
                                  <img src={meter1}></img>
                              </div>
                              <div className="py">
                                  <img src={meter2}></img>
                              </div>
                              <div className="bash">
                                  <img src={bash}></img>
                              </div>

                              <div className="c">
                                  <img src={meter3}></img>
                            </div>
                              <br></br>
                        {/* <h3><br></br>Web Development</h3> */}
                              <div className="webdev">
                        <h3><br></br>Web Development</h3>
                                
                              </div>
                              <div className="html">
                                  <img src={html}></img>
                              </div>


                              <div className="css">
                                  <img src={css}></img>
                              </div>
                              <div className="jsw">
                                  <img src={jsw}></img>
                              </div>
                              <div className="angular">
                                  <img src={angular}></img>
                              </div>
                              <div className="bootstrap">
                                  <img src={bootstrap}></img>
                              </div>

                              <div className="react">
                                  <img src={react}></img>
                              </div>
                              <div className="nodejs">
                                  <img src={nodejs}></img>
                              </div>
                              <div className="mysql">
                                  <img src={mysql}></img>
                              </div>
                              <div className="psql">
                                  <img src={psql}></img>
                              </div>


                              <div className="tooliuse">
                        <h3><br></br>Tools I use<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></h3>
                              </div>
                              <div className="vscode">
                                  <img src={vscode}></img>
                              </div>
                              <div className="github">
                                  <img src={github}></img>
                              </div>
                              <div className="aws">
                                  <img src={aws}></img>
                              </div>

                        {/* </Carousel> */}
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
