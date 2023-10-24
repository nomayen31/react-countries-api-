const CountryData = ({country , handleVisitedCountry, handleVisitedFlag}) => {
    return (
        <div>
            <p>Country Data : {country.name.common} </p>
        </div>
    );
};

export default CountryData;