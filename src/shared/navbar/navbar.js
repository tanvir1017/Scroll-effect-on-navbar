import React from 'react';

const Navbar = () => {
    const body = document.body;
    let topPosition = 0
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset
        if (currentScroll <= 0) {
            body.classList.remove('scroll-up')
        }
        if (currentScroll > topPosition && !body.classList.contains('scroll-down')) {
            body.classList.remove('scroll-up')
            body.classList.add('scroll-down')
        }
        if (currentScroll < topPosition && body.classList.contains('scroll-down')) {
            body.classList.remove('scroll-down')
            body.classList.add("scroll-up");
        }

        topPosition = currentScroll
    })
    return (
      <header>
        <nav className="container nav-items">
          <ul className="logo-ul">
            <li>LOGO</li>
          </ul>
          <ul className="nav-ul">
            <li>
              Home
              <span className="nav-li-span"> </span>
            </li>
            <li>
              About
              <span className="nav-li-span"></span>
            </li>
            <li>
              Contact
              <span className="nav-li-span"></span>
            </li>
            <li>
              Login
              <span className="nav-li-span"></span>
            </li>
          </ul>
        </nav>
      </header>
    );
};

export default Navbar;