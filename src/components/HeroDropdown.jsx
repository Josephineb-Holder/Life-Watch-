import { Dropdown } from 'flowbite-react'
import React from 'react'

function HeroDropdown({label, data}){
  return(
    <>
    <Dropdown label={label || "No label"}>
    {data.map((datum)=>{
      return<Dropdown.Item>{datum}</Dropdown.Item>
    })}
    </Dropdown>
    
    </>
  )
}

export default HeroDropdown