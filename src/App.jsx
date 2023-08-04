// import { Button, Navbar } from 'flowbite-react';
import NavbarWithDropdown from './components/Navbar.jsx';
import { Dropdown } from 'flowbite-react';
import React, { useState } from 'react';
function App() {
  const [hospitals, setHospitals] = useState([
    'JFk',
    'Catholic Hospital',
    'SOS',
  ]);
  const [counties, setCounties] = useState([
    'Montserrado',
    'Grand Kru',
    'Grand Cape Mount',
    'Grand Gedeh',
    'Lofa',
    'Sinoe',
    'Bong',
    'Bomi',
    'Grand Bassa',
    'River Gee',
    'Gbopolu',
    'Margibi',
    'Maryland',
    'Grand Kru',
    'Grand Kru',
  ]);
  return (
    <>
      <div className="max-w7xl">
        {/* https://picsum.photos/200/300 */}
        <NavbarWithDropdown />
        <div
          id="hero-section"
          className="w-full min-h-[500px] mx-2 px-2 "
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&w=1600 )',
            backgroundSize: 'cover',
            backgruondRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <Dropdown label="All">
            {counties.map((counties) => {
              return <Dropdown.Item>{counties}</Dropdown.Item>;
            })}
          </Dropdown>

          <Dropdown label="Hospitals/Clinics">
            {hospitals.map((hospitals) => {
              return <Dropdown.Item>{hospitals}</Dropdown.Item>;
            })}
          </Dropdown>
        </div>
      </div>
    </>
  );
}

export default App;
