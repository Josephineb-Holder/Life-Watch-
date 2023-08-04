'use client';

import { Dropdown, Navbar, Avatar, Card } from 'flowbite-react';

export default function NavbarWithDropdown() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="Life Watch">
        <div className="logo">
        <img
          alt="Flowbite React Logo"
          className="h-6 sm:h-9"
          src="./public/lifewatch.png"
        />
        </div>
        
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Life Watch
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        <Navbar.Link href="#">Upload</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
