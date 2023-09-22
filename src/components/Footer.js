import {Container, Row, Col} from "react-bootstrap";
import logo from "../assets/img/LOGObackGround.jpg";
import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import github from '../assets/img/github-mark-white.svg'
export const Footer = () =>{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} id="footer-img" alt="logo image"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/lucas-wysoczanski-77436b239/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} /></a>
                            <a href="https://instagram.com/lukaszwysoczanski?igshid=OGQ5ZDc2ODk2ZA==/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} /></a>
                            <a href="https://github.com/LucasWyski001" target="_blank" rel="noopener noreferrer"><img src={github} alt=""/></a>
                        </div>
                        <p>CopyRight 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}