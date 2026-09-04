import { useState } from "react";

import {
  Bell,
  Menu,
  X,
  Home,
  LayoutDashboard
} from "lucide-react";

import {
  Link,
  NavLink,
  Outlet
} from "react-router-dom";


function Layout() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">

      <header className="navbar">

        <Link
          to="/"
          className="brand"
        >

          <div className="brand-icon">
            C
          </div>

          <div className="brand-text">

            <strong>
              CivicConnect
            </strong>

            <span>
              Citizen Service Portal
            </span>

          </div>

        </Link>


        <button
          className="mobile-menu"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <X />
          ) : (
            <Menu />
          )}
        </button>


        <nav
          className={
            menuOpen
              ? "nav-links open"
              : "nav-links"
          }
        >

          <NavLink
            to="/"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            <Home size={18} />
            Home
          </NavLink>


          <NavLink
            to="/dashboard"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>


          <Link
            to="/complaints/new"
            className="nav-report"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Report Problem
          </Link>

        </nav>


        <div className="nav-actions">

          <button
            className="icon-button"
            aria-label="Notifications"
          >
            <Bell size={20} />
          </button>


          <div className="avatar">
            HK
          </div>

        </div>

      </header>


      <main>
        <Outlet />
      </main>


      <footer className="footer">

        <div>

          <strong>
            CivicConnect
          </strong>

          <p>
            Making citizen-government
            communication simpler.
          </p>

        </div>


        <p>
          © 2026 CivicConnect.
          All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default Layout;