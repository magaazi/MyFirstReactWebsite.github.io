import React from "react";
import images2 from './images/team.gif';

const Art = () =>{
    return(
        <>
<div className="container mt-5 article">
    <div className="row">
        <div className="col-md-12 col-12 col-lg-6 img-col">
            <img src={images2} className="mx-auto img"/>
        </div>
        <div className="col-md-12 col-12 col-lg-6 mt-5">
            <h3 className="title mt-2">Develope creativity and learning for best friends</h3>
            <p className="text mt-3">Thinking creatively comes naturally to designers but it should come as no surprise that you reserve most of your creative brain power on ...</p>
            <button className="btn btn-four mt-3">4k ultra HD Quality</button>
            <button className="btn btn-five mt-3">200+ online channels</button><br></br>
            <button className="btn btn-three mt-5">Read More</button>
        </div>
    </div>
</div>
        </>
    )
}
export default Art;