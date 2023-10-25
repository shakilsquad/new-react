import { useState } from 'react';
import './contrie.css'

const Contrie = ({contrie,handelVisitedCountry,handelVisitedFlag}) => {
      console.log(contrie)
      const {name,flags,capital,coatOfArms } = contrie;

      const [visited , setVisited] = useState(false);
      const handelButton = () =>{
            setVisited(!visited);
      }
      console.log(handelVisitedCountry);
      // const passWidthParam = () =>handelVisitedCountry(contrie)

      return (
            <div className={`Contrie ${visited &&'visited'}`}>
                  <h3 className='text-xl font-bold py-2'>Contre Name: {name.common}</h3>
                  <img src={flags.png} alt="" />
                  <h3 className='py-2'>City Name:{capital} </h3>
                  <div className='Contrie'>
                        <p className='py-2'>CoatOfArms</p>     
                  <img className='img-size' src={coatOfArms.png} alt="" />
                  </div>
                  <button onClick={ () =>handelVisitedCountry(contrie)} className='btn btn-warning'>Mark Visited</button>
                  <br /><br />
                  <button onClick={() =>handelVisitedFlag(contrie.flags.png)} className='btn btn-success'>Add Flag</button>
                  <br /> <br />
                  <button onClick={handelButton} className="btn btn-success mr-1">{visited?'Visited':'Going On'}</button>
                  {visited ? 'I have visited this Country' : 'I want to visit this country'}
            </div>
      );
};

export default Contrie;