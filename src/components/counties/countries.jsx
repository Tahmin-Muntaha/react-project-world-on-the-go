import React, { use } from 'react';
import Country from './country/country';
import './countries.css'
const Countries = ({countriesPromise}) => {
    const countriesData=use(countriesPromise)
    const countries=countriesData.countries
    console.log(countries)
    
    return (
        <div class='h1'>
            <h1>In the Countries : {countries.length}</h1>
        <div className='countries'>
           
           {
                countries.map(country=><Country key={country.cca3.cca3} country={country}></Country>)
           }
        </div>
        </div>
    );
};

export default Countries;