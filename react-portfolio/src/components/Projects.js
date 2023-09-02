import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/ProjectBack.png";
import projImg1 from "../assets/img/project1.jpg";
import projImg2 from "../assets/img/tech-blog.jpg";




export const Projects= () =>{
    const projects = [
        {
            title:"example",
            description: "example",
            imgUrl: projImg1,
        },
        {
            title:"example",
            description: "example",
            imgUrl: projImg2,
        },
    ]
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Welcome To My Projects!</h2>
                    <p>Some type of description will go here or something</p>
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
                                dfhsduhfuisdhfuisdhfuisdhfuihsduifhsdfs
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