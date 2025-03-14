import React, { useState } from 'react';
import Container from './container';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuitems = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Pricing",
      path: "/pricing",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="bg-primary-soft">
      <Container>
        <header className="flex flex-col lg:flex-row justify-between items-center py-5">
          <div className="flex w-full lg:w-auto items-center justify-between">
            <a href="/" className="text-lg">
              <span className="font-bold text-primary-strong text-3xl">
                Riverlytics
              </span>
            </a>
            <div className="block lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-primary-strong"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex w-full lg:w-auto mt-2 lg:mt-0`}
          >
            <ul className="flex flex-col lg:flex-row lg:gap-3">
              {menuitems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    className="flex lg:px-3 py-2 items-center text-primary-strong font-medium hover:text-primary"
                  >
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="lg:hidden flex items-center mt-3 gap-4">
              <a
                href="#"
                className="px-5 py-2.5 text-sm font-medium text-black rounded-lg border border-primary-strong hover:bg-gray-50 w-full text-center"
              >
                Sign In
              </a>
              <a
                href="#"
                className="px-5 py-2.5 text-sm font-medium text-black bg-primary rounded-lg hover:bg-primary-strong w-full text-center"
              >
                Start free trial
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="/login"
              className="flex gap-1 text-black font-medium transition hover:text-primary"
            >
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_183_341)">
                  <path
                    d="M5.90721 21.2031H2.72643C2.34289 21.2031 2.1115 20.9891 2.00773 20.8615C1.82858 20.6411 1.75917 20.3543 1.81744 20.0745C2.75042 15.593 6.70534 12.3202 11.271 12.214C11.3471 12.2169 11.4233 12.2188 11.5 12.2188C11.5773 12.2188 11.6542 12.2168 11.731 12.2139C12.8474 12.2394 13.9379 12.4493 14.976 12.8391C15.4404 13.0136 15.9584 12.7784 16.1329 12.3138C16.3073 11.8494 16.0721 11.3314 15.6076 11.1569C15.4589 11.101 15.3091 11.0488 15.1586 10.9992C16.6456 9.88376 17.6094 8.10701 17.6094 6.10938C17.6094 2.74068 14.8687 0 11.5 0C8.13125 0 5.39061 2.74068 5.39061 6.10938C5.39061 8.1088 6.35607 9.88695 7.84528 11.0022C6.48096 11.4513 5.20068 12.1498 4.08024 13.0714C2.02588 14.7612 0.597494 17.1182 0.0582968 19.7083C-0.110699 20.5198 0.0917187 21.3534 0.613666 21.9951C1.13296 22.6338 1.90306 23 2.72643 23H5.90721C6.40342 23 6.80565 22.5978 6.80565 22.1016C6.80565 21.6054 6.40342 21.2031 5.90721 21.2031ZM7.18749 6.10938C7.18749 3.73144 9.12205 1.79688 11.5 1.79688C13.8779 1.79688 15.8125 3.73144 15.8125 6.10938C15.8125 8.41688 13.9907 10.3068 11.71 10.4167C11.64 10.4155 11.5701 10.4144 11.5 10.4144C11.4297 10.4144 11.3595 10.4154 11.2893 10.4167C9.00889 10.3064 7.18749 8.41665 7.18749 6.10938Z"
                    fill="#00AC8A"
                  ></path>
                  <path
                    d="M22.3122 15.4804C21.9276 14.6201 21.0614 14.0627 20.1031 14.0605H17.3013C17.2993 14.0605 17.2974 14.0605 17.2953 14.0605C16.2846 14.0605 15.4027 14.6562 15.0479 15.5792C15.0007 15.702 14.943 15.8567 14.8827 16.0371H9.00039C8.7575 16.0371 8.52498 16.1354 8.35576 16.3097L6.81242 17.8994C6.4725 18.2495 6.47421 18.8069 6.81624 19.155L8.38851 20.7547C8.55741 20.9266 8.78831 21.0234 9.02927 21.0234H11.9492C12.4454 21.0234 12.8476 20.6212 12.8476 20.125C12.8476 19.6287 12.4454 19.2265 11.9492 19.2265H9.40599L8.71293 18.5213L9.38034 17.834H15.5567C15.9706 17.834 16.3309 17.5512 16.4293 17.1492C16.502 16.8524 16.5932 16.5671 16.7251 16.224C16.8121 15.9978 17.0305 15.8574 17.2975 15.8574C17.298 15.8574 17.2986 15.8574 17.2992 15.8574H20.101C20.3551 15.858 20.5738 15.9946 20.6718 16.2137C20.913 16.7533 21.2009 17.5887 21.2031 18.5041C21.2053 19.4263 20.9176 20.2808 20.6758 20.8353C20.5783 21.0589 20.3578 21.2031 20.1115 21.2031C20.1111 21.2031 20.1106 21.2031 20.1101 21.2031H17.2744C17.0258 21.2025 16.793 21.0426 16.6951 20.8052C16.59 20.5505 16.4989 20.2596 16.4167 19.9159C16.3012 19.4333 15.8162 19.1358 15.3338 19.2512C14.8512 19.3667 14.5537 19.8516 14.6692 20.3341C14.7734 20.7698 14.8928 21.148 15.034 21.4903C15.4113 22.4051 16.2891 22.9977 17.2723 23H20.108C20.1099 23 20.1117 23 20.1137 23C21.0728 22.9999 21.9396 22.4326 22.3229 21.5534C22.6334 20.8414 23.0029 19.7336 23 18.4999C22.9971 17.2695 22.6244 16.1787 22.3122 15.4804Z"
                    fill="#00AC8A"
                  ></path>
                  <path
                    d="M19.3613 19.4062C19.8575 19.4062 20.2598 19.004 20.2598 18.5078C20.2598 18.0116 19.8575 17.6094 19.3613 17.6094C18.8651 17.6094 18.4629 18.0116 18.4629 18.5078C18.4629 19.004 18.8651 19.4062 19.3613 19.4062Z"
                    fill="#00AC8A"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_183_341">
                    <rect width="23" height="23" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <a href="/login">Sign In</a>
            </a>
            <a
              href="/trial"
              className="px-6 py-3 bg-white text-black font-medium rounded-lg transition hover:bg-primary hover:text-white"
            >
              Start free trial
            </a>
          </div>
        </header>
      </Container>
    </div>
  );
};

export default Navbar;