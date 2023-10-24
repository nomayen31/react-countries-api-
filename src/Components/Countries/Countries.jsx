import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [ visitedCountry , setVisitedCountry] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))


    }, [])


    const handleVisitedCountry = (country)=>{
            console.log('add to ths on visited country');
           const newVisitedCountry = [...visitedCountry,country];
           setVisitedCountry(newVisitedCountry)
    }

    const handleVisitedFlag = flag =>{
        const newVisitedFlag = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlag)
    }

    
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>Visited Country :{visitedCountry.length} </h5>
                <ul>
                        {
                            visitedCountry.map(country => <li  key={country.cca3} >{country.name.common}</li>)
                        }
                </ul>
            </div>
            <div className="flag-container">
                    {
                        visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                    }
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlag={handleVisitedFlag}
                        key={country.cca3}
                        country={country}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;