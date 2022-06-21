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
    strings: ["Clean","Dynamic","Organized"],
    });
    }, []);
  
    return (
    <div className="intro" id="intro">
        <div className="wrapper">
          <div className="text-box">
          <h2>Hi there, I'm</h2>
          <h1>Mary Egenbacher</h1>
          <h3>
            A Front End Developer creating <br> 
            </br><span ref={textRef}></span>Code.
          </h3>
          </div>
          
          
          
</div>
</div>
        
      
        
        
  )
};

