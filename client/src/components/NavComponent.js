import React from "react";
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
          <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>}
      {!isLoggedIn && <div className="order-2 hidden items-center md:flex">
        <a
            href="/login"
            className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
          >
            Login
          </a>
        <Button  color="dark" onClick={(e) => navigate('/register')}>Get Started</Button>
        <Navbar.Toggle />
      </div>}
      <Navbar.Collapse>
        <Navbar.Link href="/" active={path === '/'}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/notes" active={path === '/notes'}>
          Snippets
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
