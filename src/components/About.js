import React, { useState } from "react";

export default function About() {
  const [mystyle,setmyStyle] =  useState({
    color: "black",
    backgroundColor: "white",
    border: "1px solid black"
  })
const [btntext,setbtntext]=useState("Enable Dark mode")
const toggleStyle=()=>{
    if (mystyle.color==='black'){
        setmyStyle({
            color:'white',
            backgroundColor:'black',
            border:"1px solid white"
        })
        setbtntext("Enable light mode")
    }
    else{
        setmyStyle({
            color:'black',
            backgroundColor:'white'
            
        })
        setbtntext("Enable dark mode")
    }
}
  return (
    <div className="container my-3" style={mystyle}>
      <h2>About Us</h2>
      <div className="accordion" id="accordionExample">
        
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
              <strong>This is the first item's accordion body.</strong> It is shown by default. You can modify it with custom styles or override default variables.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
              <strong>This is the second item's accordion body.</strong> You can write any HTML here, styled with your own CSS.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
              <strong>This is the third item's accordion body.</strong> Use this to show more info about your TextUtils website.
            </div>
          </div>
        </div>
        
      </div>

      <div className="container my-3">
        <button  onClick={toggleStyle}type="button" className="btn btn-primary">{btntext}</button>
      </div>
    </div>
  );
}
