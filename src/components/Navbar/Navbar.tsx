import React from 'react';
import Link from 'next/link';
import styles from "./navbar.module.css";
import Image from 'next/image';
const Navbar: React.FC = () => {
  return (
    <nav className={`${styles.navbarBGColor} navbar navbar-expand-lg navbar-dark fixed-top`}>
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          <i>a Board</i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`offcanvas offcanvas-end ${styles.navbarBGColor} ${styles.navbarWidth}`}
          tabIndex={-1}
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close-white border-top-0"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <Image
                src={'./icon/arrowRight.svg'}
                alt='login board'
                width={20}
                height={20}
              />
            </button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li>
                <Link className="nav-link active" aria-current="page" href="#">
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Link
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
