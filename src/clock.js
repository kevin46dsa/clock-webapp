import React, {  useState, useEffect } from 'react';
import '../src/clock.css';



const Clock = () => {

const [time, setTime] = useState(new Date().toLocaleTimeString());

useEffect(() => {
    setTimeout(() => {
        updateClock();
      }, 1000);
  });


function updateClock(){
setTime(
new Date().toLocaleTimeString()
);
}

return (
    <div className="container">
    <div className="row">
      
      <div className="col">
      <div className="Time">
        <p> {time}</p>
        </div>
        
      </div>
     
    </div>
  </div> 

);
}
export default Clock;