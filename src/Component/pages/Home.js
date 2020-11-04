import React from 'react';
import ActOne from '../ActOne'
import ActTwo from '../ActTwo';
import ActThree from '../ActThree'

function Home() {
  return (
    <>
      <div className="Home" id="Home">
          <ActOne />
          
      </div>
      <div className="Services" id="Services">
        <ActTwo />
      </div>
      <div className="Contact" id="Contact">
        <ActThree />
      </div>
    </>
  );
}

export default Home;
