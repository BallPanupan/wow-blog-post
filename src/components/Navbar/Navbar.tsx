import React, { useState } from 'react';
import Link from 'next/link';
import styles from "./navbar.module.css";
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';

const Navbar: React.FC<any> = ({profile, setProfile}: any) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentUrl = `${pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`;
  const btnActive = {
    'home': currentUrl === '/' ? 'active' : '',
    'ourBlog': currentUrl === '/ourBlog' ? 'active' : '',
  }

  const handleSignOut = async () => {
    localStorage.removeItem('accesstoken');
    setProfile({})
    return true
  } 

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
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-2">
              <li>
                {
                  profile && profile?.username ?
                    <div className='d-flex align-items-center gap-3'>
                      <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          {profile.username}
                        </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#" onClick={handleSignOut}>Sign out</a></li>
                        </ul>
                      </div>
                      <Image
                        className=""
                        alt="arrow"
                        src={'/images/profile.png'}
                        height={35}
                        width={35}
                      />
                    </div> :
                    <Link
                      className={`${styles.signIn}`}
                      aria-current="page" href="/login">
                      Sign In
                    </Link>
                }
              </li>
              <li className={`nav-item ${styles.desktop}`}>
                <Link className={`nav-link d-flex gap-2 ${btnActive.home}`} aria-current="page" href="/">
                  <Image 
                    src={'./icon/home-line.svg'} 
                    alt='Home'
                    width={24}
                    height={24}
                  />
                  Home
                </Link>
              </li>
              <li className={`nav-item ${styles.desktop}`}>
                <Link className={`nav-link d-flex gap-2 ${btnActive.ourBlog}`} href="/ourBlog">
                  <Image 
                    src={'./icon/edit-05.svg'} 
                    alt='Home'
                    width={24}
                    height={24}
                  />
                  Our Blog
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
