/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  vasetkala,
  CoGymProject,
  tailwindcssIcon,
  avatar,
  iranCity,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  tailwindcssIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! (:",

    "My name is Mohammad, I'm 23 and a computer science student based in Rafsanjan. I have a strong passion for the technologies related to the Front-end web development",

    "Outside of my regular activities, I'm into designing, making content in my channel, develoaping npm packages, SEO and learning new stuff  whenever I have some free time. .",

    "I'm continuously thrilled to partner with individuals and teams who wholeheartedly embrace my fervor for crafting extraordinary experiences. Your visit to my portfolio is deeply appreciated !",
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: 'CoGymProject',
    description: 'I am currently working on CoGymProject. We are a small group of developers who are trying to develop a fitness club application',
    image: CoGymProject,
    source_code_link: 'https://github.com/CoGymProject',
    demo_link: 'https://github.com/CoGymProject',
  },
  {
    name: 'iran-city',
    description: 'One of the packages that I have recently worked on is iran-city, which allows you to use the list of all cities in Iran based on the category of province in your code.',
    image: iranCity,
    source_code_link: 'https://github.com/mohammad-hassani/iran-city',
    demo_link: 'https://www.npmjs.com/package/iran-city',
  },
  {
    name: 'VasetKala',
    description: 'I recently worked in VasetKala for 3 years. There, I worked on many projects, including the application(React Native) and its interface(vasetkala.com) and store site(vasetshop.com), all in React JS. Also on the chat system and other things. Finally, I have been working as the head of the development department for 4 months.',
    image: vasetkala,
    source_code_link: 'https://github.com/vasetkala',
    demo_link: 'https://vasetshop.com',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react & react native',
    title: 'React & React native',
    icon: reactIcon,
    description:
      'I am well-versed in React and ReactNative, proficient in creating reusable components and managing application state using hooks and context.',
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
    description:
      'I have experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
  },
  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
    description: 'In my figma skills, I\'m new to sketching and can sketch at a beginner level. But I know most of the rules related to the design and use of Figma',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes,reviewing pull requests, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'psql',
    title: 'Postgresql',
    icon: psqlIcon,
    description:
      'I have mastered PostgreSQL which includes a wide range of skills such as database normalization, triggers, front-end connectivity and data analysis. I have also been involved in data mining for some time',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'With 3 years of Python experience, I am good at coding functions and algorithms.',
  },
  // {
  //   id: 'node',
  //   title: 'Node',
  //   icon: nodeIcon,
  //   description:
  //     'When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
  // },
  {
    id: 'eslint',
    title: 'Eslint',
    icon: eslintIcon,
    description:
      'I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.',
  },
  {
    id: 'tailwind css',
    title: 'Tailwind css',
    icon: tailwindcssIcon,
    description:
      'I use Tailwind for styling HTML documents, which is very changeable. I am fully familiar with all its parts',
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
