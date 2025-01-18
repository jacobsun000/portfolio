'use client';

import Link from 'next/link';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { renderCanvas } from '@/components/ui/render-canvas';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

const words = [
  {
    text: 'Full',
    className: 'text-3xl'
  },
  {
    text: 'Stack',
    className: 'text-3xl'
  },
  {
    text: 'Developer',
    className: 'text-blue-500 dark:text-blue-500 text-3xl'
  }
];

export function LandingPage() {
  useEffect(() => {
    renderCanvas();
  }, []);
  return (
    <div>
      <div
        id="landing-page"
        className="bg- relative flex  h-screen w-full flex-col items-center justify-center bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]"
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black" />
        <p className="text-5xl text-neutral-600 dark:text-neutral-200 sm:text-5xl">Jacob Sun</p>
        <TypewriterEffectSmooth words={words} />
        <div className="z-30 flex flex-col items-center space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <Link href="https://drive.google.com/file/d/14z_jl8Yo8GfpXk2fbLFUgG0lkh9x2Sfg/view?usp=sharing">
            <Button>Download CV</Button>
          </Link>
          <Link href="#contact-me">
            <Button variant="secondary">Contact Me</Button>
          </Link>
        </div>
      </div>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0 z-50" id="canvas"></canvas>
    </div>
  );
}
