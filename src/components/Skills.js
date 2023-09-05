import {Container, Col, Row} from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
// these are the images for the skills/languages that i know
import htmlLogo from "../assets/img/icons8-html-5-48.png";
import cssLogo from "../assets/img/icons8-css3-48.png";
import jsLogo from "../assets/img/icons8-javascript-48.png";
import reactLogo from "../assets/img/icons8-react-native-48.png";
import nodeLogo from "../assets/img/icons8-node-js-48.png";
import expressLogo from "../assets/img/icons8-express-js-50-white-2.png";
import jqueryLogo from "../assets/img/icons8-jquery-50-white.png";
import mysqlLogo from "../assets/img/icons8-mysql-logo-48.png";
import mongoLogo from "../assets/img/icons8-mongodb-a-cross-platform-document-oriented-database-program-48.png";
// this is a background to give some pisaz yknow?
import colorSharp from "../assets/img/skillsBack.png";


export const Skills = () =>{
    // this is the syntax of the carousel where my skills will go
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

      return(
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                    <div className="skill-box">
                        <h2>
                            My Skills
                        </h2>
                        <p>As a Mern Stack developer here are the skills ive learned! My skills range from the fundamentals of HTML CSS and JavaScript, all the way
                            to coding languages such as React, Node, and SQL databases such as Mongo and MySQL.
                        </p>
                        {/* this is making the responsive so that you can click through and ALSO infinite true is so it keep looping, no end no beginning */}
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={htmlLogo} alt="Html logo"/>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={cssLogo} alt="CSS logo"/>
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={jsLogo} alt="JavaScript logo"/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={reactLogo} alt="React logo"/>
                                <h5>React.JS</h5>
                            </div>
                            <div className="item">
                                <img src={nodeLogo} alt="Node logo"/>
                                <h5>Node.JS</h5>
                            </div>
                            <div className="item">
                                <img src={expressLogo} alt="Express logo"/>
                                <h5>Express.JS</h5>
                            </div>
                            <div className="item">
                                <img src={jqueryLogo} alt="JQUERY logo"/>
                                <h5>JQUERY</h5>
                            </div>
                            <div className="item">
                                <img src={mysqlLogo} alt="MySQL logo"/>
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={mongoLogo} alt="Mongo logo"/>
                                <h5>Mongo.DB</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            < img className="background-image-left"  alt="background image of skills" src={colorSharp}/>
        </section>
        )

}