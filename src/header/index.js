import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import { Button } from "react-bootstrap";



const Headermain = (settheme) => {
  const [isActive, setActive] = useState("false");
  const isMobile = window.innerWidth <= 768;
  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };
  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <>
      <header className="fixed-top site__header" >
        <div className="d-flex align-items-center justify-content-between">
          {<div className="navbar-brand nav_ac" >
            {logotext}
          </div>}
          <div className="d-flex align-items-center" style={{ direction: 'rtl' }}>
            <Themetoggle settheme={settheme} />
            <button className="menu__button  nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>

          </div>
        </div >

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                    <Link onClick={handleToggle} to="/" className="my-3">Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/portfolio" className="my-3"> Project</Link>
                  </li>

                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/contact" className="my-3"> Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header >
    </>
  );
};

export default Headermain;
