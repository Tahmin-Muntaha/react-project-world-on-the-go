import React, { use, useState } from 'react';
import Country from './country/country';
import './countries.css'
const Countries = ({countriesPromise}) => {
    const [visitedCountries,setVisitedCountries]=useState([])
    const handles=(country)=>{
        const newVisitedCountries=[...visitedCountries,country]
        setVisitedCountries(newVisitedCountries)

    }
    const [visitedFlags,setVisitedFlags]=useState([])
    const handleFlags=(flag)=>{
        const newVisitedFlags=[...visitedFlags,flag]
        setVisitedFlags(newVisitedFlags)

    }
    const countriesData=use(countriesPromise)
    const countries=countriesData.countries
    console.log(countries)
    
    return (
        <div className='h1'>
            <h1>In the Countries : {countries.length}</h1>
            <h2>Total Country visited : {visitedCountries.length}
                
                    {
                        visitedCountries.map(country=>
                            
                        <p>{country.name.common}</p>
                        
                    )
                    }
                
            </h2>
            <h3 className='visited-flags'>Total Flags Viisted : {visitedFlags.length}
                {
                    visitedFlags.map((flag,index)=><img key={index} src={flag}></img>)
                }
            </h3>
        <div className='countries'>
           
           {
                countries.map(country=><Country key={country.cca3.cca3} country={country} 
                handles={handles}
                handleFlags={handleFlags}></Country>)
           }
        </div>
        </div>
    );
};

export default Countries;