import { Dropdown } from 'flowbite-react';
import React from 'react';

function HeroDropdown({ label, data }) {
  return (
    <>
      <Dropdown label={label || 'No label'}>
        {data.map((datum) => {
          return (
            <Dropdown.Item id={datum.slug} key={datum.id}>
              {datum.name}
            </Dropdown.Item>
          );
        })}
      </Dropdown>
    </>
  );
}

export default HeroDropdown;
