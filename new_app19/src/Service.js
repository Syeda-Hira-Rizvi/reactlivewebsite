import React from "react";
// import web from "../src/images/img2.svg";
import Sdata from "./Sdata";
import Card from "./Card";

const Service = () => {
  return (
    <>
    {/* <h1> Welcome Service Page </h1> */}
    <div className="my-5">
     <h1 className="text-center">Our Services</h1>
    </div>
    <div className="container-fluid mb-5">
        <div className="row">
           <div className="col-10 mx-auto">
            <div className="row gy-4">
           {
            Sdata.map((val,ind) => {
              return <Card 
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              />
            }) }

              {/* <Card /> */}

            {/* <div className="col-md-4 col-10 mx-auto">
            <div class="card"> */}
  {/* <img src="..." class="card-img-top" alt="..." /> */}
  {/* <img src={web} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div className="col-md-4 col-10 mx-auto">
            <div class="card">
            <img src={web} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>


<div className="col-md-4 col-10 mx-auto">
            <div class="card">
  <img src={web} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>

<div className="col-md-4 col-10 mx-auto">
            <div class="card">
  <img src={web} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>

<div className="col-md-4 col-10 mx-auto">
            <div class="card">
  <img src={web} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>

<div className="col-md-4 col-10 mx-auto">
            <div class="card">
  <img src={web} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div> */} 

        </div>
        </div>
        </div> 
        </div>
    </>
  );
};

export default Service;