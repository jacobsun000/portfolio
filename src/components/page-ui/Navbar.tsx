'use client';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { ThemeSwitch } from './ThemeSwitch';

const navigationLinks = [
  { href: '#landing-page', title: 'Home' },
  { href: '#experience', title: 'Experience' },
  { href: '#skills', title: 'Skills' },
  { href: '#projects', title: 'Projects' },
  { href: '#contact-me', title: 'Contact Me' },
];

export function Navbar() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
      <header className="z-40 bg-transparent py-5 md:py-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <Link
              href="/"
              className='horizontal-underline-active hidden text-3xl font-extrabold sm:block'
              aria-label="J.S."
            >
              J.S.
            </Link>
          </div>
          <div className="flex items-center space-x-3 text-base leading-5">
            <div className="mr-2 hidden space-x-5 sm:flex">
              {navigationLinks.map(({ title, href }) => {
                const active = title === 'Home';
                return (
                  <Link
                    prefetch
                    key={title}
                    href={href}
                    className={cn('horizontal-underline hover:horizontal-underline-active text-base', {
                      'horizontal-underline-active': active,
                    })}
                    aria-label={title}
                  >
                    <span className="font-semibold tracking-wide text-gray-900 dark:text-gray-100">
                      {title}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center space-x-4">
              <ThemeSwitch />
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}


import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';

function MobileNav() {
  const [navShow, setNavShow] = useState(false);

  const variants = {
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '100vw' },
  };

  useEffect(() => {
    if (navShow) {
      // Prevent scrolling
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [navShow]);

  return (
    <div className="sm:hidden">
      <button type="button" aria-label="Toggle Menu" onClick={() => setNavShow(!navShow)}>
        <HiOutlineMenu size={30} className="mt-1.5" />
      </button>
      <AnimatePresence>
        <motion.div
          key="MobileNav"
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          animate={navShow ? 'enter' : 'exit'}
          initial="exit"
          exit="exit"
          variants={variants}
          className={cn(
            'fixed inset-0 z-20 h-full w-full bg-white opacity-95 dark:bg-black'
          )}
        >
          <header className="flex justify-end px-4 py-5">
            <button
              type="button"
              aria-label="toggle modal"
              className="size-8 rounded"
              onClick={() => setNavShow(!navShow)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-gray-900 dark:text-gray-100"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </header>
          <nav className="fixed mt-8 h-full">
            {navigationLinks.map(({ title, href }) => {
              const active = title === 'Home';

              return (
                <div key={title} className="px-12 py-4">
                  <Link
                    href={href}
                    onClick={() => setNavShow(!navShow)}
                    className={cn(
                      'horizontal-underline font-bold tracking-widest text-gray-900 backdrop:text-2xl dark:text-gray-100',
                      { 'horizontal-underline-active': active }
                    )}
                    aria-label={title}
                  >
                    {title}
                  </Link>
                </div>
              );
            })}
          </nav>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
