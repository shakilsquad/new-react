import { useEffect, useState } from "react";
import Contrie from "../Contrie/Contrie";


const Contries = () => {
      const [contries, setContries] = useState([])
      const [visitedContries, setVisitedContries] = useState([])
      const [visitedFlag, setVisitedFlag] = useState([])


      useEffect(() => {
            fetch('https://restcountries.com/v3.1/all')
                  .then(res => res.json())
                  .then(data => setContries(data));
      }, [])

      const handelVisitedCountry = country => {
            console.log('add this to your visited country')
            // console.log(country);
            const newSetVisitedCounty = [...visitedContries, country]
            setVisitedContries(newSetVisitedCounty);
      }

      const handelVisitedFlag = flag => {
            // console.log(flag)
            const newVisitedFlag = [...visitedFlag, flag]
            setVisitedFlag(newVisitedFlag);
      }

      return (
            <div>
                  <h3 className="text-center text-2xl font-bold ">Total Contries:{contries.length}</h3>
                  <div className="container mx-auto Contrie">
                        <h4>Visited Country : {visitedContries.length}</h4>
                        <ul>
                              {
                                    visitedContries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                              }
                        </ul>
                  </div>
                  {/* country falg  */}
                  <div className="container  gap-1  mx-auto Contrie">
                        <div className="flag-size ">
                              {
                                    visitedFlag.map(flag => <img src={flag} key={contries.cca3} ></img>)
                              }
                        </div>
                  </div>
                  {/* // total country  */}
                  <div className=" container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                        {
                              contries.map(contre => <Contrie
                                    key={contre.cca3}
                                    handelVisitedCountry={handelVisitedCountry}
                                    handelVisitedFlag={handelVisitedFlag}
                                    contrie={contre} ></Contrie>)
                        }
                  </div>

            </div>
      );
};

export default Contries;