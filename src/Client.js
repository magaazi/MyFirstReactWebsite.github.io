import React from "react";
import images1 from "./images/profile.gif";

const Client = () =>{
    return(
        <>
        <div className="container clients">
            <div className="row">
                <div className="col-12">
            <hr className="w-75 bg-dark mx-auto"></hr>
            <h1 className="title text-center">What Our Client Say</h1>
            </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4 col-sm-5 profile-box">
                    <img src={images1} className="profile mx-auto"/> 
                </div>
      
        <div className="col-md-8 col-sm-7 profile-title">
            <h3 className="title">MAGAAZI</h3>
            <p className="text mt-3">t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
            </div>
        </div>
        </>
    );
};

export default Client;