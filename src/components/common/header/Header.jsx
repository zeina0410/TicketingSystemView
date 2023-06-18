import React, { useState, useEffect } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const api = process.env.REACT_APP_API_LOCAL;

const Header = () => {
  const navigate = useNavigate();
  const [navList, setNavList] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    handleLogin();
  }, []);

  const handleLogin = () => {
    try {
      setLoggedIn(document.cookie);
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };
  
  const handleLogout = async () => {
    try {
      setLoggedIn(false);
      await axios.get(api + "/logout", 
      {headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: true
      });
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="./images/logo.png" alt="" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="button flex">
            {loggedIn ? (
              <button className="btn1" onClick={handleLogout}>
                <i className="fa fa-sign-out"></i> Logout
              </button>
            ) : (
              <Link to={"login"}>
                <button className="btn1" onClick={handleLogin}>
                  <i className="fa fa-sign-in"></i> Sign In
                </button>
              </Link>
            )}
          </div>
          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;