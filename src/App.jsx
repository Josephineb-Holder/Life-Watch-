// import { Button, Navbar } from 'flowbite-react';
import NavbarWithDropdown from './components/Navbar.jsx';
import { Dropdown } from 'flowbite-react';
import HospitalCard from './components/HospitalCard';
import React, { useEffect, useState } from 'react';
import { getCounties } from '/utils/firebase.js';
import { getHopitals } from '/utils/firebase.js';
import HeroSearch from './components/HeroSearch.jsx';
function App() {
  // const [hospitals, setHospitals] = useState([]);

  const [gender, setGender] = useState(['Male', 'Female']);
  const [year, setYear] = useState(['2023']);
  const [hospitaldetails, setHospitaldetails] = useState([]);
  const [counties, setCounties] = useState([]);
  const [hopitals, setHopitals] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await getCounties();
      console.log({ data });
      setCounties(data);
    }

    loadData();
  }, []);

  useEffect(() => {
    async function loadHopitalsData() {
      const data = await getHopitals();
      console.log({ 
        hospitals: data });
      setHospitaldetails(data);
    }

    loadHopitalsData();
  }, []);
  return (
    <>
      <div className="max-w7xl">
        {/* https://picsum.photos/200/300 */}
        <NavbarWithDropdown />
        <HeroSearch counties={counties} setHopitals={setHospitaldetails}/>
      

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-4 justify items-center p-4">
            {hospitaldetails.map((details) => {
              return (
                <HospitalCard
                  key={details.id}
                  name={details.name || 'no name'}
                  location={details.location || 'No Location'}
                  birthRate={details.birthRate || '0'}
                  deathRate={details.deathRate|| '0'}
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
