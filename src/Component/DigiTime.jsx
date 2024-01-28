import React, { useState } from 'react'







const DigiTime = () => {
let newTime = new Date().toLocaleTimeString();

const [cTime, setCtime] = useState(newTime);

const UpdateTime = () => {
  newTime = new Date().toLocaleTimeString();
  setCtime(newTime)
}
 
setInterval(UpdateTime, 1000);
return(
  <>
    <h1> {cTime}</h1>
  </>
)
}

export default DigiTime;