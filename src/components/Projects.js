import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/ProjectBack.png";
import projImg1 from "../assets/img/project1.jpg";
import projImg2 from "../assets/img/tech-blog.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';




export const Projects= () =>{
    const projects = [
        {
            title:"Dungeons & Dragons Story Generator",
            description: "This project uses Bulma CSS, JavaScript, and HTML. This project is able to generate a story using API's to generate a D&D story for future game use.",
            imgUrl: projImg1,
            projectLink: "https://bantachristopher.github.io/DnD-quest-for-glory/",
        },
        {
            title:"The Tech Blog",
            description: "This project uses Node.JS, Express, HandleBars, MySQL2. This application is a place where users can create an account, comment on other posts, and edit/delete there own posts.",
            imgUrl: projImg2,
            projectLink: "https://tech-bloggers-5fd0dafa339d.herokuapp.com/",
        },
    ]
    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                    {({isVisible}) =>
                    <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                    <h2>Welcome To My Projects!</h2>
                    <p>Here your gonna find some of my work created by me wether with collaboration or sole projects! Also in the about me tab you can find out about who I am
                        not just as a person but my developer journey!
                    </p>
                    </div>}
                    </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Projects</Nav.Link>
                                </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">About Me</Nav.Link>
                                    </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((projects, index) =>{
                                            return(
                                                <ProjectCard
                                                key={index}
                                                {...projects}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey ="second">
                                Hello! I am Lucas Wysoczanski. I started my Web Development Journey around 2021, where I started learning self taught. There I learned the fundamentals of<br>
                                </br> HTML, CSS, and JavaScript. Being highly motivated for this field and learning amazing things and the power of code, I decided to enroll into UT FullStack<br></br>
                                Bootcamp, where I learned how to be proficient in the MERN Stack development.
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}