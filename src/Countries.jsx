
import React, { useEffect, useState } from 'react';
import Country from './Country';
const Countries = () => {
    const [country, setCountries] =useState([])
    const [visitedCountry, setVisitedCountry] = useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
          .then((res) => res.json())
          .then((data) => setCountries(data));
    },[])
    function handleVisitedCountry (country){
      const newVisitedCountry = [...visitedCountry, country]
      setVisitedCountry(newVisitedCountry)
        

    }

    return (
      <div>
        <div>
          <h1 className="my-10 text-5xl font-bold">Visited country</h1>
          <ul className="flex flex-wrap gap-4">
            {visitedCountry.map((country) => (
              <>
                <p className="px-4 py-2 bg-purple-200 rounded-lg text-purple-600">
                  {country?.name?.common}
                </p>
                <img className='w-[50px] h-[30px]' src={country?.flags?.png} alt="" />
              </>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 my-5">
          <h1 className="text-3xl font-bold">Countries : {country.length}</h1>
          {country.map((countryCard, index) => {
            return (
              <div key={index}>
                <Country
                  country={countryCard}
                  handleVisitedCountry={handleVisitedCountry}
                ></Country>
              </div>
            );
          })}
        </div>
      </div>
    );
};

export default Countries;