import React, { useState } from 'react';
import './country.css'
const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
    const { flags, name, timezones, area, independent, 
    } = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }



    // console.log(country)
    return (
        <div className={`box ${visited ? 'visited' : 'non-visited'}`}>
            <h1>Name: {name?.common}</h1>
            <img src={flags?.png} alt="" />

            <h2>Area: {area}</h2>
            <h2>independent: {independent ? 'True' : 'False'}</h2>
            <p>languages: </p>
            <p>TimeZone: {timezones?.[0]}</p>


            <button onClick={()=>handleVisitedCountry(country)}>MArk Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlag(country.flags.png)}>Add Visited Flag</button>
            <br />
            <button onClick={handleVisited}> {visited  ? 'visited' : 'Going'} </button>
            {visited ? '  i have visited this country ' : ' i Want to Visited'}


        </div>
    );
};

export default Country;