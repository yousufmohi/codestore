import React, { useContext } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
export function NavComponent() {
  const {name,userEmail} = useContext(AuthContext);
  const isLoggedIn = localStorage.getItem("token") !== null;
  const navigate = useNavigate();
  const logout = () => {
    if(!localStorage.getItem("token")) {
      navigate("/");
    }
    localStorage.removeItem("token");
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
      
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Snippets</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
