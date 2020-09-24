import React,{useState,useEffect,useRef} from "react";
import "./style.css";

export default function App() {
  const elementRef = React.useRef(null)
  
  const toTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
     
    })
  }
  // If back to element (use Ref)
  const toElemnt = () => {
     if(!elementRef) return
    // Get element coords from Ref
    const element =
      elementRef.current.getBoundingClientRect().top + window.scrollY

    window.scroll({
      top: element,
      behavior: "smooth"
    })
  }
  
  return (
    <div className="App">
      <div className="content" style={{ height: 1500 }}>Scroll Down <span>&#8595;</span>
      
        <div ref={elementRef} style={{ marginTop: 750 }}>
          Element - continue scrolling <span>&#8595;</span>
        </div>
      </div>
       <button onClick={toElemnt}>Back to Element <span>&#8593;</span></button>
      <button onClick={toTop}>Back to to <span>&#8593;</span></button>
    </div>
  )
}

