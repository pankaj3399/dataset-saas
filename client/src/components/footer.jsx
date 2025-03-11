import React from 'react';
import Container from './container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 mt-16 bg-primary-strong">
      <Container>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-primary-soft rounded-xl px-6 py-6 md:py-14 md:px-20 -mt-40 mb-16">
          <div>
            <h3
              className="text-2xl text-primary-medium font-semibold max-w-sm md:pr-6 leading-8">
              All the news straight to your inbox.
              <span className="text-primary-strong">Signup weekly newsletter</span>
            </h3>
          </div>
          <form>
            <div
              className="relative flex flex-col gap-5 sm:gap-0 sm:flex-row rounded-2xl shadow-sm">
              <input
                type="email"
                name="email"
                className="py-5 px-6 ps-14 border-2 border-white block flex-1 rounded-lg sm:rounded-s-2xl text-sm focus:z-10 focus:border-primary focus:outline-none"
                placeholder="Email address"
              />
              <div
                className="absolute top-5 sm:inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-5 opacity-60">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.8027 3.71094H2.19727C0.988184 3.71094 0 4.69478 0 5.9082V19.0918C0 20.3057 0.988818 21.2891 2.19727 21.2891H22.8027C24.0118 21.2891 25 20.3052 25 19.0918V5.9082C25 4.69448 24.0113 3.71094 22.8027 3.71094ZM22.4653 5.17578C21.7549 5.88853 13.4104 14.2603 13.0676 14.6042C12.7812 14.8914 12.2189 14.8916 11.9324 14.6042L2.53467 5.17578H22.4653ZM1.46484 18.8225V6.17749L7.76685 12.5L1.46484 18.8225ZM2.53467 19.8242L8.80098 13.5375L10.895 15.6383C11.7531 16.4992 13.2473 16.4989 14.1051 15.6383L16.1991 13.5375L22.4653 19.8242H2.53467ZM23.5352 18.8225L17.2332 12.5L23.5352 6.17749V18.8225Z"
                    fill="#00AC8A">
                  </path>
                </svg>
              </div>
              <button
                type="submit"
                className="py-5 px-8 justify-center items-center gap-x-2 text-md font-semibold rounded-lg sm:rounded-e-2xl border border-transparent bg-primary text-white hover:bg-primary-strong">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-10">
          <div>
            <h2 className="text-4xl text-white font-semibold opacity-75 mb-4">Riverlytics</h2>
          </div>
          <div>
            <ul className="leading-10">
              <li>
                <a
                  href="#"
                  className="text-white opacity-75 text-lg font-light transition hover:opacity-100">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white opacity-75 text-lg font-light transition hover:opacity-100">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white opacity-75 text-lg font-light transition hover:opacity-100">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="leading-10">
              <li>
                <a
                  href="#"
                  className="text-white opacity-75 text-lg font-light transition hover:opacity-100">
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white opacity-75 text-lg font-light transition hover:opacity-100">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white opacity-75 text-lg font-light transition hover:opacity-100">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="leading-10">
              <li>
                <a
                  href="#"
                  className="text-white opacity-75 text-lg font-light transition hover:opacity-100">
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white opacity-75 text-lg font-light transition hover:opacity-100">
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white opacity-75 text-lg font-light transition hover:opacity-100">
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white opacity-75 text-lg font-light transition hover:opacity-100">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="border-t flex flex-col md:flex-row gap-2 text-center md:text-start md:justify-between border-white border-opacity-20 mt-16 py-10">
          <p className="text-white opacity-75 font-light">
            Copyright ©️ {currentYear} Riverlytics. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;