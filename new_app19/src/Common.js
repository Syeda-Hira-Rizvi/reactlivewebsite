import React from "react";
import web from "../src/images/img2.svg";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
    {/* <h1> Welcome Common Page </h1> */}
    <section id="header" className="d-flex align-items-center">
    <div className="container-fluid">
        <div className="row">
           <div className="col-10 mx-auto">
            <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"></div>
            {/* <h1> Welcome to Common page <strong className="brand-name">ThapaTechnical</strong></h1> */}
            <h1> {props.name} <strong className="brand-name">ThapaTechnical</strong></h1>
            <h2 className="my-3">We are the team of talented developer making websites</h2>
            <div className="mt-3">
            {/* <NavLink to="/service" className="btn-get-started">Contact Now</NavLink> */}
              <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
            </div>
            </div> 
            <div className="col-lg-6 order-1 order-lg-2 header-img">
            {/* <img src={web} className="img-fluid animated" alt="home img" /> */}
              <img src={props.imgsrc} className="img-fluid animated" alt="home img" />
            </div>
            </div>
        </div>
        </div>
    </section>
    </>
  );
};

export default Common;