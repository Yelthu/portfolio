import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  hoco,
  mpt,
  dat,
  mit,
  threejs,
  hrmax,
  eplant,
  giftlink,
  itasset,
  pew,
  rfm,
  EDIRQ
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Senior Backend Engineer",
    icon: backend,
  },
  {
    title: "Senior Full Stack Engineer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Backend Engineer",
    company_name: "EDIRQ",
    icon: EDIRQ,
    iconBg: "#E6DEDD",
    date: "July 2024 - Current",
    points: [
     `Led backend development, implementing over 70% of core APIs for the frontend team, enabling timely delivery of key product features for web and mobile platforms.`,
      `Optimized existing APIs and database queries, resulting in a 20% improvement in system performance and reduced latency across high-traffic endpoints.`,
      `Mentored junior developers by providing technical guidance, conducting code reviews, and promoting clean coding practices, which improved team productivity and code quality.`,
    ],
  },
  {
    title: "Senior Full Stack Engineer",
    company_name: "MPT-KSGM",
    icon: mpt,
    iconBg: "#383E56",
    date: "March 2019 - May 2024",
    points: [
      "Spearheaded automation solutions using JavaScript & Google Apps Script,transforming manual processes into digital workflows that significantly improved company revenue.",
      "Designed and implemented various systems that enhanced operational efficiency,collaborating with multiple teams to ensure alignment with business objectives.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Conducted in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "DIR-ACE Technology (DAT)",
    icon: dat,
    iconBg: "#E6DEDD",
    date: "April 2015 - March 2019",
    points: [
      "Led a team of 5 software engineers in the design and implementation of the AERON Microfinance System.",
      "Implemented best practices for code quality, testing, and deployment, resulting in an improvement of code to an accelerated stock matching algorithm of the Yangon Stock Exchange (YSX) System",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Attained membership in the projects of the year with the AERON Microfinance System",
    ],
  },
  {
    title: "Software Developer",
    company_name: "MIT (Myanmar Information Technology)",
    icon: mit,
    iconBg: "#383E56",
    date: "Sept 2013 - Mar 2015",
    points: [
      "Designed and developed the banking systems for the local banks, such as iCBS Banking,iCBM Banking, including the Loan and Interest Module and the Expenditure Module.",
      "Implemented clean, efficient, and maintainable code following best practices and coding standards.",
      "Assisted in troubleshooting and resolving software issues, ensuring smooth operation of applications.",
      "Optimized database queries to improve system performance by 15%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Mr.Ye Lin Thu to any organization looking for a skilled full-stack developer and a team player who excels at both delivering results and fostering a collaborative culture.",
    name: "Theingi Win",
    designation: "Regional Manager",
    company: "HOCO TELECITY",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Throughout his tenure at MPT-KSGM, Mr.Ye Lin Thu has excelled in his role, consistently delivering high-quality work and exceeding performance expectations.",
    name: "Nyo Nyo Seint",
    designation: "Department General Manager - CTO",
    company: "MPT-KSGM",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Working with Mr. Ye Lin Thu has been an incredible experience. His technical expertise and problem-solving skills are truly impressive.He consistently brings creative solutions to complex problems, and his approach to full-stack development, especially in backend integration and automation, has been invaluable to our team",
    name: "CA Team",
    designation: "CA Teams - CTO",
    company: "MPT-KSGM",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HRMax",
    description:
      "Web-based platform of HRM (SaaS) system incorporating Time management, Leave management, Scheduling Rota, and Employee Management with JWT authentication,resulting in a 40% increase in HR process efficiency",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hrmax,
    source_code_link: "https://github.com/",
  },
  {
    name: "Paradise Nursey",
    description:
      "Web application with redux that enables users to search for plants, checkout as online shopping and incorporated NLP for sentiment analysis.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: eplant,
    source_code_link: "https://github.com/",
  },
  {
    name: "Gift Link",
    description:
      "A comprehensive platform that allows users to search and upload the variety of items incorporated NLP for sentiment analysis. Facilitated connections between users for recycling household items, boosting user engagement by 30% and promoting sustainable living.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: giftlink,
    source_code_link: "https://github.com/",
  },
  {
    name: "IT Asset Management",
    description:
      "Web-based platform of IT Asset Management (SaaS) system incorporating Asset Request & Return, Asset Stock Summary and Reporting, integrated JavaScript, Google Apps Script with RESTful API to seamlessly synchronize IT asset data across different departments, resulting in a 40% increase in productivity.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Google Apps Script",
        color: "blue-text-gradient",
      },
      {
        name: "KissFlow",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Design Architecuture",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX",
        color: "pink-text-gradient",
      },
    ],
    image: itasset,
    source_code_link: "https://github.com/",
  },
  {
    name: "Change Management",
    description:
      "A web-based platform of change management (SaaS) system integrated JavaScript and Google Apps Script with RESTful APIs to seamlessly incorporate across different departments and flawless approval processes, resulting in a 50% increase in productivity.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Google Apps Script",
        color: "blue-text-gradient",
      },
      {
        name: "KissFlow",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Design Architecuture",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX",
        color: "pink-text-gradient",
      },
    ],
    image: pew,
    source_code_link: "https://github.com/",
  },
  {
    name: "Request Fullfillment",
    description:
      "A web-based platform of change management (SaaS) system that helps organizations manage and fulfill service requests efficiently, often leading to improved employee experiences and reduced costs.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Google Apps Script",
        color: "blue-text-gradient",
      },
      {
        name: "KissFlow",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Design Architecuture",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX",
        color: "pink-text-gradient",
      },
    ],
    image: rfm,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
