import React, { useState } from 'react';
function HospitalCard({ name, location, numberOfBirth , numberOfDeaths}) {
  return (
    <>
      <div className=" bg-[#102C57] text-white p-3 border-2 rounded-lg border-grey-500">
        <h3>Hospital Name: {name}</h3>
        <p>Location: {location || 'No Location'}</p>
        <div className="flex gap-4 items-center justify-center">
          <div className="w-full ">
            <h4 className="text-md text-gray-700 font-md">Number of Birth:</h4>
            <p className="font-bold text-md text-center text-green-900">
              {numberOfBirth || 0}
            </p>
          </div>
          <div className="w-full">
            <h4 className="text-md text-gray-700 font-md">
              Number of Death:
            </h4>
            <p className="font-bold text-md text-center text-green-900">
                {numberOfDeaths || 0}
              </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HospitalCard;
