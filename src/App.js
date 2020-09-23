import React, {useState, useEffect} from 'react';
import './App.css';
import BusinessCard from './BusinessCard';


const App = ()=> {
 const [results, setResults] = useState([]);
  
  useEffect(() =>{
  fetch("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setResults(data.results)
    });
  }, [])
  
  return(
    <div>
      {results.map((result, index)=>{
        return(
        <BusinessCard key={index}
          faceURL= {result.picture.medium} 
          name= {result.name.first}
          email= {result.email}
          phone= {result.phone}/>
        )
      
       })}
  </div>
 );
};

export default App;