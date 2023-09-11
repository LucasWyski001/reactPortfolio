import {useState, useEffect} from "react";
import{Navbar, Nav, Container} from "react-bootstrap";
import logo from '../assets/img/LOGObackGround.jpg';
import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import github from '../assets/img/github-mark-white.svg'

export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () =>{
            if (window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    },[]);

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home">
            {/* this is where a potential logo will go for future reference when we find something cool */}
            <img src={logo} alt="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"> 
          <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills"className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects"className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/lucas-wysoczanski-77436b239/"  target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt=""/></a>
                    <a href="https://github.com/LucasWyski001" target="_blank" rel="noopener noreferrer"><img src={github} alt=""/></a>
                    <a href="https://instagram.com/lukaszwysoczanski?igshid=OGQ5ZDc2ODk2ZA==/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt=""/></a>
                </div>
                <a href="mailto:lucaswyski01@gmail.com">
                <button className="vvd" onClick={()=> console.log('connect')}><span>Let's Connect!</span></button>
                </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}