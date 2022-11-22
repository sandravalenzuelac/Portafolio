import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import iconLinkedin from "../img/iconLinkedin.png";
import iconGithub from "../img/iconGithub.png";
import logo from "../img/logo.png";
export const NavBar = () => {
const [linkActive, setLinkActive] = useState('home');
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
 const onScroll = () => {
  if(window.scrollY > 50){
    setScrolled(true);
  } else {
    setScrolled(false);
  }
 }

 window.addEventListener("scroll", onScroll);

 return () => window.removeEventListener("scroll", onScroll)

}, []);

const onUpdateLinkActive = (value) => {
  setLinkActive(value);
}

  return (
<Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={linkActive === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateLinkActive ('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={linkActive === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateLinkActive ('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={linkActive === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateLinkActive ('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={iconGithub} alt=""/></a>
              <a href="#"><img src={iconLinkedin} alt=""/></a>
            </div>
          <button className="buttonForm" onClick={()=> console.log("connect")}><span>Let's connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}