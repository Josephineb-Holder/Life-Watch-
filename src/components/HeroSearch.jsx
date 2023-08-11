import React, { useState } from 'react';
import HeroDropdown from './HeroDropdown';
import { TextInput } from 'flowbite-react';
import { getHopitals } from '/utils/firebase';

function HeroSearch({ counties, setHopitals }) {
  const [text, setText] = useState('');

  async function loadHopitalsData(e) {
    e.preventDefault();
    const data = await getHopitals(true, text);
    const filteredData = data.filter((datum) =>
      datum.name.toLower().caseincludes(text.toLocaleLowerCase())
    );
    setHopitals(filteredData);
  }
  return (
    <>
      <div
        id="hero-section"
        className="w-full min-h-[500px] mx-2 px-2 relative"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&w=1600 )',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-full mz-auto absolute bottom-0">
          <div className="flex justify-center items-center place-items-center text-center gap-4 p-8 mt-10">
            <HeroDropdown data={counties} label={'All'} />
            <div className="w-2/3">
              {/* <h2>This text:{text || "No text"}</h2> */}
              <TextInput
                onChange={(e) => loadHopitalsData(e)}
                type="search"
                placeholder="Search by hospital name"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSearch;
