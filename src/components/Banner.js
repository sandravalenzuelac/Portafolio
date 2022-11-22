import { useState, useEffect } from "react";
import {Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImage from "../img/astronauta.png";

export const Banner = () => {
    const toRotate = ["Sandra Valenzuela", "Desarrolladora web Full stack", "Operadora de informatica en Administracion y gestion"]
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('')
    const [delta, setDelta] =useState(300 - Math.random() * 100)
    const period = 2000;

   useEffect(()=>{
    let ticket = setInterval(()=>{
       tick();
    },delta)

    return ()=> { clearInterval(ticket)}
   }, [text])

   const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting){
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

 return (
 <section className='banner' id="home">
    <Container>
        <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
                <span className="tagline">Bienvenido a mi Portafolio</span>
                <h1>{`Hola soy `}<span classNam="wrap">{text}</span></h1>
                <p>Actualmente me encuentro estudiando programación backend,ingles y habilidades blandas.Aprendiendo cada día más sobre el área IT. Buscando mi primer experiencia laboral para dedicarle toda mi energía!</p>
                <button onClick={()=> console.log('connect')}>Let's Connect!<ArrowRightCircle size={25}/></button>
            </Col>
            <Col xs={12} md={6} xl={5}>
            <img src={HeaderImage} alt="Header img" />
            </Col>
        </Row>
    </Container>
 </section>
 )
}