import React from 'react';
import {Dropdown} from 'flowbite-react'

function HeroSearch({ counties }) {
  return (
    <>
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
            <HeroDropdown data={counties} label={'All'} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSearch;
