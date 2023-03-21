import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  
  useEffect(() => {
    init(textRef.current, { 
    showCursor: true,
    backDelay: 1500, 
    backSpeed: 60,
    strings: ["Unique","Beautiful","Magical"],
    });
    }, []);
  
    return (
    <div className="intro" id="intro">
        <div className="wrapper">
          <div className="text-box">
          <h2>Let's Go To</h2>
          <h1>Mexico!</h1>
          <h3>
            Get Excited to See One of the Most <br> 
            </br><span ref={textRef}></span>Places.
          </h3>
          </div>
          
          
          
</div>
</div>
        
      
        
        
  )
};

