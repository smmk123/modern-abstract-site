import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm12.18-3.76a1.09 1.09 0 00-1.54-.07c-.33.29-.38.78-.1 1.1l.1.11 1.97 1.99H9.5A1.5 1.5 0 018 12.5v-1c0-.28.22-.5.5-.5h4.76l-1.97 1.97a1.02 1.02 0 00-.1 1.32l.1.11a.997.997 0 001.32.1l.11-.1 3.99-3.99a1.002 1.002 0 000-1.42l-3.99-3.99z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1.464 4.464a.5.5 0 00-.928-.34L11.5 7.56V6.5a.5.5 0 00-1 0v1.06l-.036.063a.5.5 0 00.365.868l.098-.034 2.933-1.464a.5.5 0 00.34-.928zm-2.097 2.092a.5.5 0 01.108.316v3.618a.5.5 0 01-.843.367l-3.185-2.422a.5.5 0 010-.684l3.185-2.422a.5.5 0 01.735.316zm3.323.003a.5.5 0 010 .684l-3.185 2.422a.5.5 0 11-.735-.316l3.185-2.422a.5.5 0 01.843.367v3.618a.5.5 0 01-.108.316zm-5.237 3.302l-.093-.034a.5.5 0 00-.365.868l.036.063V17.5a.5.5 0 101 0v-1.06l.036-.063a.5.5 0 00-.365-.868z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M21 4a1 1 0 01.993.883L22 5v14a1 1 0 01-.883.993L21 20H9a1 1 0 01-.993-.883L8 19V5a1 1 0 01.883-.993L9 4h12zm-2 2H9v14h12V6zm-5 3a3 3 0 100 6 3 3 0 000-6zm-5.27 3.118a5.002 5.002 0 016.155-6.155A7.002 7.002 0 017 17H5a5 5 0 008.944 2.803A7.003 7.003 0 019.73 13.118z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <p className="text-center text-gray-400 text-sm mt-2">
          © 2023 Techn-AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
