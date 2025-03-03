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
    <Navbar fluid rounded className="bg-black">

      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Codestore</span>
      </Navbar.Brand>

      
      <div className="flex items-center md:order-2">
        {isLoggedIn && (
          <Dropdown arrowIcon={false} inline label={<Avatar alt="User settings" img="https://cdn-icons-png.flaticon.com/512/1802/1802977.png" rounded />}>
            <Dropdown.Header>
              <span className="block text-sm">{name}</span>
              <span className="block truncate text-sm font-medium">{userEmail}</span>
            </Dropdown.Header>
            <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
          </Dropdown>
        )}

        <Navbar.Toggle />
      </div>


      {!isLoggedIn ? <div className="order-2 hidden items-center md:flex">
        <a
            href="/login"
            className="mr-1 rounded-lg px-4 py-2 text-base font-medium text-white hover:text-[#6FEB2A] transition delay-100 duration-150 ease-in-out  bg-black md:mr-2 md:px-5 md:py-2.5"
          >
            Login
          </a>
        <Button as="span" className="bg-[#6FEB2A] text-black hover:bg-[#53992d] cursor-pointer" onClick={(e) => navigate('/register')}>Get Started</Button>
      </div> : undefined}
      
      <Navbar.Collapse>
        <Navbar.Link href="/" className={`text-white hover:text-[#6FEB2A] hover:bg-gray-700 ${path === "/" ? "font-bold" : ""}`}>Home</Navbar.Link>
        <Navbar.Link href="/notes" className={`text-white hover:text-[#6FEB2A]  hover:bg-gray-700 ${path === "/notes" ? "font-bold" : ""}`}>Snippets</Navbar.Link>
      </Navbar.Collapse>

    </Navbar>
  );
}
