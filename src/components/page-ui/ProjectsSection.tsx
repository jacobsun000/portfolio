import React from 'react';

import { HeroParallax } from '@/components/ui/hero-paralax';

export function ProjectsSection() {
  return <HeroParallax products={products} />;
}

const products = [
  {
    title: 'ULead Education',
    link: 'https://en.ulead-edu.com',
    thumbnail: '/projects/ulead.png'
  },
  {
    title: 'UForum',
    link: 'https://umich.uforum.cc',
    thumbnail: '/projects/uforum.png'
  },
  {
    title: 'Ray Tracing Renderer',
    link: 'https://github.com/jacobsun000/RayTracing',
    thumbnail: '/projects/raytracer.png'
  },
  {
    title: 'Fresh Smart',
    link: 'https://microbotech.jacobsun.xyz',
    thumbnail: '/projects/freshsmart.png'
  },
  {
    title: 'RustVim',
    link: 'https://github.com/jacobsun000/rustvim',
    thumbnail: '/projects/rustvim.png'
  },
  {
    title: 'Mathellm',
    link: 'https://github.com/jacobsun000/Mathellm',
    thumbnail: '/projects/mathellm.png'
  },
  {
    title: 'Factorio Planner',
    link: 'https://github.com/jacobsun000/factorio-planner',
    thumbnail: '/projects/factorio.png'
  },
  {
    title: 'UMN Student Writing Support',
    link: 'https://c4w.cla.umn.edu/sws/index.php?page=MySWS_Home',
    thumbnail: '/projects/sws.png'
  },
  {
    title: 'Chess Engine in Rust',
    link: 'https://github.com/jacobsun000/chess',
    thumbnail: '/projects/chess.png'
  }
];
