import React, { useState } from 'react';
import './country.css'
const Country = ({country,handles,handleFlags}) => {
    const [visited,setVisited]=useState(false)
    const handle=()=>{

        if(visited){
            setVisited(false)
            
        }
        else{
            setVisited(true)
            handles(country)
        }
        
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}></img>
            <h3>Name : {country.name.common} </h3>
            <p>Population : {country.population.population}</p>
            <p>Area : {country.area.area}
                       {country.area.area > 30000?" Big Country ":" Small Country "}
            </p>
            <button onClick={handle}>
                {visited?" Visited ":" Not Visited "}
            </button>
            <button onClick={()=>handleFlags(country.flags.flags.png)}>
                Add Flags
            </button>
        </div>
    );
};

export default Country;