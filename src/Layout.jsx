import { Outlet, Link, useLocation } from "react-router-dom";
import Menu from "./Components/Menu";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef } from "react";

function Layout() {
  const location = useLocation();
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scroll({
        top: 0,
        behavior: "instant",
      });
    }
  }, [location.pathname]);

  return (
    <>
      <div className="home-container">
        <div className="sidebar">
          <Menu />
        </div>
        <div ref={divRef} className="home-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
