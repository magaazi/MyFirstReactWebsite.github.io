import React from "react";
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';


const Navi =() =>{
    return(
        <>
        <section className="navi fixed-top">
          <div className="Container ">
          <div className="row">
            <div className="col-md-10 mx-auto">
     <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
  <Navbar.Brand href="#home">| M |A | GAAZI |</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#pricing">Product</Nav.Link>
      <Nav.Link href="#pricing">Blog</Nav.Link>
      <Nav.Link href="#pricing">Contect</Nav.Link>
      <button className="btn-1 ">Get Started</button>
     
    </Nav>
    <Nav className="mt-2">
    </Nav>
    <i className="fas fa-user icon" ></i>
    <i class="fa-solid fa-bag-shopping icon"></i>
    <i className="fas fa-search icon"></i>
    {/* <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav> */}
  </Navbar.Collapse>
</Navbar>
</div>
</div>
</div>
</section>
        </>
    );
};

export default Navi;