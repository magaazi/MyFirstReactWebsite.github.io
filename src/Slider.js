import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import images1 from './images/charector.gif';
// import images1 from './images/wl.jpg';
// import images1 from './images/wl.jpg';


const Slider =() =>{
    return(
        <>

        
        {/* <section id="section-1">
        <Carousel className="crsl">
      <Carousel.Item >
        <img
          className="d-block w-100 img"
          src={images1}
          alt="First slide"
        />
       
        <Carousel.Caption>
        <div className="row">
          <div className="col-md-6 article text-justify col-12">
            <h3>Your Favorite</h3>
            <h1>Shows And Movies</h1>
            <p>Web design is the planning and creation of websites. This includes a number of separate skills that all fall under the umbrella of web design. Some examples of these skills are information architecture, user interface, site structure, navigation, layout, colors, fonts, and overall imagery.</p>
          </div>
          <div className="col-md-6 col-12 mx-auto">
          <img
          className="d-block w-100"
          src={images1}
          alt="Second slide"
        />
          </div>
          </div>
          
        </Carousel.Caption>

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images1}
          alt="Second slide"
        />

        <Carousel.Caption>
         
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section> */}
    

    <div className="container slider">
      <div className="row">
        <div className="col-md-6 sli mt-5 col-12">
    <h3 className="title ">Learning</h3>
    <h1 className="title">Graphic And WebDesign</h1>
    <p className="text">Web design is the planning and creation of websites. This includes a number of separate skills that all fall under the umbrella of web design. Some examples of these skills are information architecture, user interface, site structure, navigation, layout, colors, fonts, and overall imagery.</p>
    <button className="btn btn-two mt-3">Start Now</button>
    <button className="btn btn-three mt-3 ml-4">Read More</button>
    </div>
    <div className="col-md-6 col-12 img-box">
    <img src={images1}   className="mx-auto img"/>
    </div>
      </div>
      <div className="row gallery text-center">
        <div className="col-md-4 col-12 col-one">
        <i class="fa-solid fa-chart-column"></i>
        <h4>Graphic Design</h4>
        <p>Web design is the planning and creation of websites.
           This includes a number of separate skills</p>
        </div>
        <div className="col-md-4 col-12 col-one">
        <i class="fa-solid fa-bomb"></i>
        <h4>Web Design</h4>
        <p>Web design is the planning and creation of websites.
           This includes a number of separate skills</p>
        </div>
        <div className="col-md-4 col-12 col-one">
        <i class="fa-brands fa-android"></i>
        <h4>Android Development</h4>
        <p>Web design is the planning and creation of websites.
           This includes a number of separate skills</p>
        </div>
      </div>
    </div>
        </>
    )
};

export default Slider;
