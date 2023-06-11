'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 }
  };

  return (<>
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">           
            <Link href="/">
              <span className="text-white font-bold text-2xl"><img src="/white_logo.svg" alt="Logo" className="inline-block h-12 w-12" />  Techn-AIA</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</span>
              </Link>
              <Link href="/about">
                <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</span>
              </Link>
              <Link href="/services">
                <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</span>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            className="md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/">
                <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</span>
              </Link>
              <Link href="/about">
                <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</span>
              </Link>
              <Link href="/services">
                <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>
  );
};

export default Navbar;
