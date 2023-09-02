import{useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
// import {ArrowRightCircle} from "react-bootstrap-icons";
// going to add some type of image here
// update image is added i repeat image is added
import heroImg from "../assets/img/hero-img.svg";



export const Hero = () =>{
    // this JS code gonna make the words rotate and give a typing effect come and see!
    const[loopNum, setLoopNum] = useState(0);
    const[isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["The Web Dev", "Front End", "Mern Stack"];
    const[text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 300);
    const period = 900;

    useEffect(() =>{
        let ticker = setInterval(()=>{
            tick();
        }, delta)

        return () =>{clearInterval(ticker)};
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }



    return(
      <section className="Hero" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome! This is my portfolio!</span>
                    <h1>{`Hi, I'm Lucas! `}<span className="wrap">{text}</span></h1>
                    <p>something eventually will go here idk yet but get ready to see!</p>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={heroImg} alt="Hero Image"/>
                </Col>
            </Row>
        </Container>
      </section>  
    )
}