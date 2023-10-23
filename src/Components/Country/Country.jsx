import React from 'react';
import './country.css'

const Country = ({country}) => {
    const {flags,name,timezones,area ,independent, languages
    } = country;
    console.log(country)
    // console.log('gggggggggggggg',languages);
    console.log(country);
    return (
        <div className='box'>
            <h1>Name: {name?.common}</h1>
            {/* <h2>Mother Language :{languages?.[0]} </h2> */}
            <h2>Area: {area}</h2>
            <h2>independent: {independent ? 'True' : 'False' }</h2>
            {/* <p>languages: {languages}</p> */}
            <p>TimeZone: {timezones?.[0]}</p>

            <img src={flags?.png} alt="" />
      

        </div>
    );
};

export default Country;