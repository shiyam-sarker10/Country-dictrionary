
const Country = ({country,handleVisitedCountry}) => {
    const { name, flags, capital, population } = country;
    function PopulationCalculator(population){
        const core = parseInt(population /10000000)
        const lakh = parseInt((population % 10000000) / 100000);
        const thousend = parseInt(((population % 10000000) % 100000)/ 1000);
        const hundred = parseInt((((population % 10000000) % 100000) % 1000 )/ 100);
        return `${core} core  ${lakh} lakh  ${thousend}k    ${hundred} hundred`
    }
    
    return (
      <div className=" shadow-md px-4 py-10 grid justify-center space-y-4">
        <h1 className=" text-lg font-medium text-gray-500">
          Name : {name?.common}
        </h1>
        <img className="w-[300px] h-[200px]" src={flags?.png} alt="country" />
        <h1 className=" text-lg font-medium text-gray-500">
          capital : {capital}
        </h1>
        <h1 className=" text-gray-500">
          population : {PopulationCalculator(population)}
        </h1>
        <button
          onClick={() => handleVisitedCountry(country)}
          className="bg-lime-100 rounded-md py-4 px-8 font-semibold text-gray-400 w-max mx-auto"
        >
          Mark Visited
        </button>
      </div>
    );
};

export default Country;
