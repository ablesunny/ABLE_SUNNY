import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaHtml5, FaCss3Alt, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaDatabase, FaBrain } from 'react-icons/fa'
import { SiJavascript, SiVercel, SiFramer, SiOpenai, SiTailwindcss, SiExpress, SiMongodb, SiMongoose, SiPostman, SiMysql } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { TbApi } from 'react-icons/tb'

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
]

export const techStack = {
  'Web Development': [
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'JavaScript (ES6+)', icon: SiJavascript },
    { name: 'React', icon: FaReact },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Framer Motion', icon: SiFramer },
  ],
  'Backend & Database': [
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Mongoose', icon: SiMongoose },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Sequelize ORM', icon: FaDatabase },
    { name: 'REST API', icon: TbApi },
  ],
  'AI & Tools': [
    { name: 'Git & GitHub', icon: FaGitAlt },
    { name: 'Postman', icon: SiPostman },
    { name: 'Figma', icon: FaFigma },
    { name: 'Vercel', icon: SiVercel },
    { name: 'AI-Assisted Development', icon: SiOpenai },
    { name: 'LangChain & OpenAI', icon: FaBrain },
  ],
}

export const projects = [
  {
    title: 'Vision Track',
    subtitle: 'Intelligent Monitoring & Management System',
    description: 'Developed an innovative tracking platform to centralize data monitoring and management processes. The system was designed to enhance efficiency through structured data handling, intuitive navigation, and real-time information accessibility. Utilized AI-assisted development techniques to accelerate implementation and improve functionality while maintaining a user-focused design approach.',
    image: '/images/project-ai-vision.jpg',
    tech: ['HTML', 'CSS', 'JavaScript', 'AI-Assisted Development', 'Web Technologies'],
    github: 'https://github.com/ablesunny',
    live: '#',
    category: 'Web Application',
    role: 'Solo Developer',
  },
  {
    title: 'Portfolio Website',
    subtitle: 'Personal Brand & Showcase',
    description: 'Designed and developed this premium editorial portfolio from scratch using React and Framer Motion. Focused on achieving a high-end magazine aesthetic with smooth scroll-triggered animations, parallax effects, and micro-interactions.',
    image: '/images/project-portfolio.jpg',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/ablesunny',
    live: 'https://ablesunny.vercel.app',
    category: 'Frontend',
    role: 'Designer & Developer',
  },
  {
    title: 'E-Commerce Platform',
    subtitle: 'Full Stack Shopping Experience',
    description: 'A full-stack MERN e-commerce application with user authentication, product listings, cart management, and admin panel. Built to practice the full request lifecycle from database to UI.',
    image: '/images/project-ecommerce.jpg',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
    github: 'https://github.com/ablesunny',
    live: '#',
    category: 'Full Stack',
    role: 'Solo Developer',
  },
  {
    title: 'Task Manager',
    subtitle: 'Productivity Application',
    description: 'A task management application with CRUD operations, user authentication, and drag-and-drop interface. Built during BCA coursework to practice backend development and RESTful API design.',
    image: '/images/project-taskmanager.jpg',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'React'],
    github: 'https://github.com/ablesunny',
    live: '#',
    category: 'Full Stack',
    role: 'Solo Developer',
  },
]

export const education = [
  {
    degree: 'AI-Powered Full Stack Web Development (MERN + SQL + AI)',
    institution: 'Techmindz',
    period: '2026 – Present',
    status: 'Pursuing',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Don Bosco Arts and Science College',
    university: 'Kannur University',
    period: '2023 – 2026',
    status: 'Pursuing',
  },
  {
    degree: 'Higher Secondary Education (Plus Two)',
    department: 'Computer Science',
    institution: 'St. Mary\'s Higher Secondary School, Edoor',
    period: '2021 – 2023',
    score: '82%',
  },
  {
    degree: 'Secondary School (SSLC)',
    institution: 'St. Thomas High School, Karikkottakari',
    period: '2019 – 2021',
    score: '95%',
  },
]

export const milestones = [
  {
    title: 'Secondary School — SSLC',
    period: '2021',
    description: 'Completed SSLC at St. Thomas High School, Karikkottakari with 95% marks. Developed early interest in computers and technology.',
    highlights: ['95% Score', 'Computer Science', 'Mathematics', 'Academic Excellence'],
  },
  {
    title: 'Higher Secondary — Computer Science',
    period: '2023',
    description: 'Completed Plus Two at St. Mary\'s Higher Secondary School, Edoor with 82%. Started exploring web technologies and programming fundamentals.',
    highlights: ['82% Score', 'Computer Science', 'First Steps in Coding', 'Problem Solving'],
  },
  {
    title: 'BCA',
    period: '2023 – Present',
    description: 'Enrolled in BCA at Don Bosco Arts and Science College, Kannur University. Learning HTML, CSS, JavaScript and building real websites with AI-assisted development.',
    highlights: ['HTML & CSS', 'JavaScript', 'Web Development', 'AI-Assisted Tools'],
  },
  {
    title: 'Full Stack AI Development',
    period: '2026 – Present',
    description: 'Enrolled in AI-Powered Full Stack Web Development at Techmindz. Mastering MERN stack, MySQL, Sequelize ORM, and integrating AI features using OpenAI API and LangChain.',
    highlights: ['MERN Stack', 'MySQL & Sequelize', 'OpenAI & LangChain', 'AI Integration'],
  },
]

export const services = [
  {
    title: 'Modern Web Development',
    description: 'Architecting high-performance, responsive user interfaces using React, JavaScript, and modern CSS frameworks. Focused on delivering premium digital experiences with fluid animations and clean code.',
    features: ['React & UI/UX', 'Tailwind CSS', 'Framer Motion', 'Responsive Design', 'Performance Optimization'],
  },
  {
    title: 'Full Stack Engineering',
    description: 'Developing robust, scalable backend architectures and complete web applications. Proficient in both NoSQL (MongoDB) and Relational (MySQL) ecosystems with seamless API integrations.',
    features: ['Node.js & Express', 'MongoDB & Mongoose', 'MySQL & Sequelize', 'RESTful APIs', 'Secure Authentication'],
  },
  {
    title: 'AI Integration & Solutions',
    description: 'Building intelligent applications by integrating cutting-edge AI technologies. Leveraging OpenAI APIs and LangChain to create smart workflows, chatbots, and advanced AI-powered features.',
    features: ['OpenAI API Integration', 'LangChain Framework', 'AI Chatbots', 'Prompt Engineering', 'AI-Assisted Workflows'],
  },
]

export const personalInfo = {
  name: 'Able Sunny',
  title: 'BCA Student & Web Developer',
  location: 'Iritty, Kannur, Kerala',
  phone: '+91 9526815773',
  email: 'ablesunnyofficial@gmail.com',
  portfolio: 'https://ablesunny.vercel.app',
  github: 'https://github.com/ablesunny',
  linkedin: 'https://linkedin.com/in/ablesunny',
  languages: ['English', 'Malayalam', 'Hindi', 'Tamil (Basic)'],
  interests: ['Software Development', 'Artificial Intelligence', 'Website Development', 'Learning Emerging Technologies'],
  hobbies: ['MMA Athlete', 'Sub-District Football Player', 'Exploring New Technologies', 'Website Building'],
  strengths: ['Fast Learner', 'Strong Work Ethic', 'Self-Motivated', 'Creative Thinking', 'Time Management'],
}

export const socialLinks = [
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/ablesunny' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/ablesunny' },
  { name: 'Email', icon: FaEnvelope, url: 'mailto:ablesunnyofficial@gmail.com' },
]

export const contactInfo = [
  { icon: FaEnvelope, label: 'Email', value: 'ablesunnyofficial@gmail.com', href: 'mailto:ablesunnyofficial@gmail.com' },
  { icon: FaPhone, label: 'Phone', value: '+91 9526815773', href: 'tel:+919526815773' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Iritty, Kannur, Kerala' },
  { icon: FaGithub, label: 'GitHub', value: 'github.com/ablesunny', href: 'https://github.com/ablesunny' },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/ablesunny', href: 'https://linkedin.com/in/ablesunny' },
]
