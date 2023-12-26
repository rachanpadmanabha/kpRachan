import React from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Project } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";

import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={
          <div>
            <Home />

          </div>} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Project />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/" element={<div><Home /><About /></div>} />
      </Routes>
    </CSSTransition>
  </TransitionGroup >
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />

    </div>
  );
}

export default AppRoutes;
