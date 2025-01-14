'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { TracingBeam } from '@/components/ui/tracing-beams';

export function ExperienceSection() {
  return (
    <>
      <h1 id="experience" className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
        Experience
      </h1>
      <TracingBeam className="px-6">
        <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
          {experience.map((item, index) => (
            <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
              <h2 className={twMerge('text-xl text-black dark:text-white')}>{item.title}</h2>
              <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">{item.badge}</span>
              <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">{item.description}</div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
}

function HyprLink({ href }: { href: string }) {
  return (
    <a className="text-blue-400">{href}</a>
  )
}

const experience = [
  {
    title: 'JOJO Tech LLC',
    description: (
      <ul className="list-disc">
        <li><b>Founded</b> and led a software development company with 15 employees, utilizing Agile methodologies and modern technology stacks like React, Node.js, and AWS, resulting in delivering over <b>20 successful projects</b> for clients across various industries.</li>
        <li>Led the design, development, and deployment of outsourced software solutions using TS, Python, and AWS for businesses across diverse industries, delivering high-quality products that met client requirements and achieved a <b>100% satisfaction rate</b>, while balancing technical innovation.</li>
        <li>Developed a high-traffic online shopping platform supporting over <b>5,000 active users monthly</b>, featuring a robot-based inventory management system and an AI-powered conversational shopping assistant, utilizing MongoDB, Express.js, and React.js technologies.</li>
        <li>Developed a scalable math quiz platform for over <b>1,000 students</b>, incorporating automated math problem generation using a Computer Algebra System (CAS) and LLM technologies, and leveraging React, FastAPI, and PyTorch for the tech stack. <HyprLink href="github.com/jacobsun000/mathellm" /></li>
        <li>Developed a commercial website portal for an education & visa consulting company using React.js, ensuring optimal user experience through responsive design and intuitive navigation. <HyprLink href="en.ulead-edu.com" /></li>
        <li>Due to strict client confidentiality agreements, I am unable to provide further details on rest projects.</li>
      </ul>
    ),
    badge: 'Founder, CEO, and Main Software Engineer | May 30, 2024 - Current'
  },
  {
    title: 'Leica Geosystems',
    description: (
      <ul className="list-disc">
        <li>Designed and implemented a subsystem for high-accuracy and high-performance fitting of pipes in point clouds, leveraging <b>C++</b>, <b>OpenGL</b>, and <b>Qt</b>, resulting in a <b>15% increase in processing speed</b> and a <b>50% improvement in accuracy</b>.</li>
        <li>Developed supporting tools using <b>C++</b> and <b>Qt</b> for manual creation and modification of pipes in CAD software, enhancing user workflows and precision.</li>
        <li>Utilized Jira and SVN to contribute to large-scale software projects by facilitating effective communication and delivering innovative solutions to complex technical challenges.</li>
        <li>Optimized point cloud processing algorithms and 3D modeling techniques using CUDA to improve project <b>efficiency by 25%</b> and scalability.</li>
      </ul>
    ),
    badge: 'Software Engineer Intern | May 2023 - Sep 2023'
  },
  {
    title: 'University of Minnesota, Center for Writing',
    description: (
      <ul className="list-disc">
        <li>Developed and maintained writing support website application for writing consultation using <b>Express.js</b> and <b>React.js</b>, providing reliable service for over <b>7,000 active student annually</b> at the University of Minnesota.</li>
        <li>Led the team to overhauled a legacy PHP/MySQL system with 36,000 lines of PHP and 20,000 lines of JavaScript, utilizing modern and maintainable technologies: <b>React</b>,  <b>Express.js</b>, and <b>MySQL</b>, resulting in a 500% increase in system performance.</li>
        <li>Ensured the project adhered to <b>best practices</b>, creating detailed <b>documentation</b> to facilitate long-term maintainability and scalability.</li>
        <li>Led the team in completing the refactor within <b>5 months</b>, replacing the legacy system while significantly enhancing performance, maintainability, and scalability.</li>
      </ul>
    ),
    badge: 'Senior Full Stack Developer | June 2022 - Current'
  }
];
