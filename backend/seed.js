const mongoose = require('mongoose');
require('dotenv').config();
const Skill = require('./models/Skill');
const Internship = require('./models/Internship');
const Project = require('./models/Project');

const skills = [
  { name: 'HTML', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'JavaScript', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'React', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Tailwind', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Next.js', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
  { name: 'MongoDB', category: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'SQL', category: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
  { name: 'GitHub', category: 'Tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
  { name: 'Figma', category: 'Design', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'Docker', category: 'Tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Java', category: 'Programming', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'Python', category: 'Programming', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'NPM', category: 'Tech Tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg' },
  { name: 'Git', category: 'Tech Tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'VS Code', category: 'Tech Tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
  { name: 'Bruno', category: 'Tech Tools', logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23d946ef"><path d="M12 2C6.48 2 2 4.02 2 6.5s4.48 4.5 10 4.5 10-2.02 10-4.5S17.52 2 12 2zm0 1.5c4.7 0 8.5 1.57 8.5 3.5S16.7 10.5 12 10.5 3.5 8.93 3.5 7 7.3 3.5 12 3.5zm0 7.5c-4.85 0-8.91-1.66-9.84-3.8.04.14.16.33.16.33.86 1.88 4.7 3.47 9.68 3.47 4.98 0 8.82-1.59 9.68-3.47 0 0 .12-.19.16-.33C20.91 7.34 16.85 9 12 9zm0 5c-4.85 0-8.91-1.66-9.84-3.8.04.14.16.33.16.33.86 1.88 4.7 3.47 9.68 3.47 4.98 0 8.82-1.59 9.68-3.47 0 0 .12-.19.16-.33C20.91 12.34 16.85 14 12 14z"/></svg>' },
  { name: 'Netlify', category: 'Tech Tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg' },
  { name: 'MongoDB Atlas', category: 'Tech Tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Vercel', category: 'Tech Tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
  { name: 'Render', category: 'Tech Tools', logo: 'https://cdn.simpleicons.org/render/bf61ff' },
  { name: 'Google Cloud', category: 'Tech Tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg' }
];

const internships = [
  {
    company: 'Syntecxhub',
    role: 'Front-End Development Intern',
    duration: '27th Feb 2026 – 28th March 2026',
    responsibilities: [
      'Developing and refining responsive web interfaces using HTML, CSS, JavaScript, and React.js.',
      'Collaborating with designers to implement UI/UX improvements and ensure cross-browser compatibility.'
    ],
    achievements: []
  },
  {
    company: 'CODETECH IT SOLUTIONS',
    role: 'Full-stack Web Development Intern',
    duration: '10th Mar 2026 – 7th Apr 2026',
    responsibilities: [
      'Developing and maintaining full-stack applications using the MERN stack, focusing on responsive design and seamless front–back integration.',
      'Expanding expertise in API design, database optimization, and cloud deployment, preparing to deliver scalable, production-ready solutions.'
    ],
    achievements: []
  }
];

const projects = [
  {
    title: 'Weather Forecasting Webapp',
    description: 'A responsive weather forecasting application displaying real-time weather data and forecasts.',
    githubLink: 'https://github.com/Suryanshu2006/weather_app',
    liveLink: 'https://weather-app-puce-ten.vercel.app/',
    image: '/projects/project1.png',
    technologies: ['React', 'API']
  },
  {
    title: 'Todo App',
    description: 'A productivity application for managing daily tasks efficiently.',
    githubLink: 'https://github.com/Suryanshu2006/Syntecxhub_-To-Do-List-App',
    liveLink: 'https://syntecxhub-to-do-list-app.vercel.app/',
    image: '/projects/project2.png',
    technologies: ['React', 'Node.js']
  },
  {
    title: 'News App',
    description: 'A dynamic news aggregator delivering the latest updates across various categories.',
    githubLink: 'https://github.com/Suryanshu2006/news_app',
    liveLink: 'https://news-app-five-lyart.vercel.app/',
    image: '/projects/project3.png',
    technologies: ['React', 'News API']
  },
  {
    title: 'Quiz App',
    description: 'An interactive quiz platform designed to test knowledge on multiple subjects.',
    githubLink: 'https://github.com/Suryanshu2006/Syntecxhub_Quiz_App',
    liveLink: 'https://syntecxhub-quiz-app.vercel.app/',
    image: '/projects/project4.png',
    technologies: ['JavaScript', 'React']
  },
  {
    title: 'Kanban Board',
    description: 'A project management tool simulating agile workflow visually.',
    githubLink: 'https://github.com/Suryanshu2006/Syntecxhub_-Project_Kanban_Board-',
    liveLink: 'https://syntecxhub-project-kanban-board.vercel.app/',
    image: '/projects/project5.png',
    technologies: ['MERN Stack', 'Drag-and-Drop']
  },
  {
    title: 'SuryaSphere',
    description: 'A fully-featured real-time chat application for seamless communication.',
    githubLink: 'https://github.com/Suryanshu2006/suryasphere',
    liveLink: 'https://suryasphere-rood.vercel.app/',
    image: '/projects/project6.png',
    technologies: ['MERN', 'Socket.io']
  },
  {
    title: 'SuryaDocs',
    description: 'A collaborative document editor with real-time updates.',
    githubLink: 'https://github.com/Suryanshu2006/Suryadocs',
    liveLink: 'https://suryadocs.vercel.app/',
    image: '/projects/project7.png',
    technologies: ['React', 'Express', 'MongoDB']
  },
  {
    title: 'Dhonipedia',
    description: 'A premium fan website dedicated to MS Dhoni, capturing his legendary journey, career statistics, and iconic achievements in Indian cricket.',
    githubLink: 'https://github.com/Suryanshu2006/Dhonipedia',
    liveLink: 'https://dhonipedia.vercel.app/',
    image: '/projects/project8.png',
    technologies: ['HTML', 'CSS', 'JavaScript']
  }
];

const certificates = [
  {
    title: 'Enterprise Design Thinking Practitioner',
    issuer: 'IBM SkillsBuild',
    date: 'Feb 2026',
    description: 'Demonstrated expertise in user-centered design, problem framing, hypothesis testing, prototyping, and iterative feedback through playback sessions. Strengthened skills in storytelling, empathic design, and collaborative innovation.',
    image: '/certificates/cert1.png'
  },
  {
    title: 'Java Basics',
    issuer: 'Programiz',
    date: 'Mar 2025',
    description: 'Gained hands-on experience with Java fundamentals, including syntax, data types, control structures, and object-oriented programming concepts.',
    image: '/certificates/cert2.png'
  },
  {
    title: 'Software Engineering Job Simulation',
    issuer: 'Accenture Nordics (Forage)',
    date: 'Aug 2025',
    description: 'Applied practical skills in software development, debugging, and collaborative problem-solving in agile workflows.',
    image: '/certificates/cert3.png'
  },
  {
    title: 'Learn Java Basics',
    issuer: 'Programiz',
    date: 'Mar 2025',
    description: 'Developed proficiency in core Java programming, focusing on classes, methods, loops, and exception handling.',
    image: '/certificates/cert4.png'
  },
  {
    title: 'Learn HTML',
    issuer: 'Programiz',
    date: 'Dec 2024',
    description: 'Acquired skills in structuring web pages, semantic markup, and responsive design principles. Built a solid base for front-end development.',
    image: '/certificates/cert5.png'
  }
];

const Certificate = require('./models/Certificate');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio').then(async () => {
  console.log('Connected to DB for seeding');
  
  await Skill.deleteMany({});
  await Internship.deleteMany({});
  await Project.deleteMany({});
  await Certificate.deleteMany({});

  await Skill.insertMany(skills);
  await Internship.insertMany(internships);
  await Project.insertMany(projects);
  await Certificate.insertMany(certificates);

  console.log('Seed successful: Populated skills, internships, projects, and certificates.');
  process.exit();
}).catch(err => {
  console.log('Seeding error:', err);
  process.exit(1);
});
