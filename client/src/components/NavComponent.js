import React, {useContext, useEffect, useState} from "react";
import { Avatar, Dropdown, Navbar, Button } from "flowbite-react";
import { useNavigate, useLocation} from "react-router-dom";

export function NavComponent() {
  const name = localStorage.getItem("name");
  const userEmail = localStorage.getItem("email");
  const isLoggedIn = localStorage.getItem("token") !== null;
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  
  const logout = () => {
    if(!localStorage.getItem("token") || !localStorage.getItem("name") || !localStorage.getItem("email")) {
      navigate("/");
    }
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    navigate("/register");
  }

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Codestore</span>
      </Navbar.Brand>
      {isLoggedIn && <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://live.staticflickr.com/2918/14252895345_8180381186_h.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{name}</span>
            <span className="block truncate text-sm font-medium">{userEmail}</span>
          </Dropdown.Header>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>}
      {!isLoggedIn && <div className="flex md:order-2">
        <Button onClick={(e) => navigate('/register')}>Get started</Button>
        <Navbar.Toggle />
      </div>}
      <Navbar.Collapse>
        <Navbar.Link href="/" active={path === '/'}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/notes" active={path === '/notes'}>
          Snippets
        </Navbar.Link>
        <Navbar.Link href="/about" active={path === '/about'}>
          About
        </Navbar.Link>
        <Navbar.Link id="contact" href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
