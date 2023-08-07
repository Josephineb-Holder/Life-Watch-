// import { Button, Navbar } from 'flowbite-react';
import NavbarWithDropdown from './components/Navbar.jsx';
import { Dropdown } from 'flowbite-react';
import HospitalCard from './components/HospitalCard';
import React, { useState } from 'react';
function App() {
  const [hospitals, setHospitals] = useState([
    'JFk',
    'Catholic Hospital',
    'SOS',
  ]);

  const [gender, setGender] = useState(['Male', 'Female']);
  const [year, setYear] = useState(['2023']);
  const [hospitaldetails, setHospitaldetails] = useState([
    {
      name: 'JFK',
      location: 'Sinkor',
      numberOfBirth: '150',
      numberOfDeaths: '5 ',
      county: 'Monrovia',
    },

    {
      name: 'Catholic Hospital',
      location: 'Congo Town',
      numberOfBirth: '200',
      numberOfDeaths: '4 ',
      county: 'Monrovia',
    },

    {
      name: 'Jamale',
      location: 'ELWA',
      numberOfBirth: '50',
      numberOfDeaths: '8',
      county: 'Montserrado',
    },

    {
      name: 'Redemption',
      location: 'Bushord Island',
      numberOfBirth: '500',
      numberOfDeaths: '100',
      county: 'Montserrado',
    },

    {
      name: 'SOS Clinic',
      location: 'Congo Town',
      numberOfBirth: '150',
      numberOfDeaths: '8',
      county: 'Montserrado',
    },

    {
      name: 'Mawah',
      location: 'Via Town',
      numberOfBirth: '300',
      numberOfDeaths: '5',
      county: 'Montserrado',
    },

    {
      name: 'ELWA',
      location: 'Elwa',
      numberOfBirth: '375',
      numberOfDeaths: '5 ',
      county: 'Montserrado',
    },
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
          className="w-full min-h-[500px] mx-2 px-2 relative"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&w=1600 )',
            backgroundSize: 'cover',
            backgruondRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="w-full mz-auto absolute bottom-0">
            <div className="flex justify-center items-center place-items-center text-center gap-4 p-8 mt-10">
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

              <Dropdown label="Gender">
                {gender.map((gender) => {
                  return <Dropdown.Item>{gender}</Dropdown.Item>;
                })}
              </Dropdown>

              <Dropdown label="Year">
                {year.map((year) => {
                  return <Dropdown.Item>{year}</Dropdown.Item>;
                })}
              </Dropdown>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-4 justify items-center p-4">
            {hospitaldetails.map((details) => {
              return (
                <HospitalCard
                  name={details.name || 'no name'}
                  location={details.location || 'No Location'}
                  numberOfBirth={details.numberOfBirth || '0'}
                  numberOfDeaths={details.numberOfDeaths || '0'}
                ></HospitalCard>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
