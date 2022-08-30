import React from "react";
import images3 from './images/charector.gif';


const Service = () =>{
    return(
        <>
        <div className="container service-area mt-5">
            <div className="row">
                <div className="col-8 mt-5 sub-area mx-auto">
                    <h4 className="title text-center">Check ability to connect our service in  your area</h4>
                    <div className="email mx-auto col-2 mt-5">
                    <input className="text-center email-box" type="text" placeholder="Enter Your Email"/>
                    <button className="btn btn-primary btn-seven">Submit</button>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Service;