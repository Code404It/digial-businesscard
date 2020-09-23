import React, { useState} from 'react'

const BusinessCard = (props) =>{
    const [showPhone, setShowPhone] = useState(false);
  
    return(
        <div className="business-card">
          <img src={props.faceURL} alt='profile'></img>
          <div className="business-details">
            <p>Name: {props.name}  </p>
            <p>Email: {props.email} </p>
            <button onClick={()=>setShowPhone(!showPhone)}>Show Phone</button>
            {showPhone && <p>Phone: {props.phone} </p>}
          </div>
    
       </div>
    );
};
export default BusinessCard;