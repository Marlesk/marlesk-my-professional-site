import { DiMsqlServer } from "react-icons/di";
import { FaReact, FaJs, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb, SiBootstrap, SiPostman, SiVercel, SiRender, SiPostgresql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export type Project = {
  title: string;
  description: string;
  tech: string;
  github: string;
  demo?: string;
  howToUse?: string[];
}

export const icons = [
  { icon: FaJs, label: 'JavaScript', color: 'text-yellow-500' },
  { icon: SiTypescript, label: 'TypeScript', color: 'text-blue-500' },
  { icon: FaReact, label: 'React', color: 'text-blue-500' },
  { icon: FaHtml5, label: 'HTML5', color: 'text-orange-500' },
  { icon: FaCss3Alt, label: 'CSS3', color: 'text-blue-500' },
  { icon: SiTailwindcss, label: 'TailwindCSS', color: 'text-cyan-500' },
  { icon: SiBootstrap, label: 'Bootstrap', color: 'text-purple-700' },
  { icon: FaNodeJs, label: 'Node.js', color: 'text-green-600' },
  { icon: SiPostman, label: 'Postman', color: 'text-orange-500' },
  { icon: SiMongodb, label: 'MongoDB', color: 'text-green-700' },
  { icon: DiMsqlServer, label: 'MSSQL', color: 'text-red-700' },
  { icon: GrMysql, label: 'MySQL', color: 'text-sky-700' },
  { icon: SiPostgresql, label: 'PostgreSQL', color: 'text-blue-700' },
  { icon: FaGitAlt, label: 'Git', color: 'text-red-500' },
  { icon: SiRender, label: 'Render', color: 'text-gray-600' },
  { icon: SiVercel, label: 'Vercel', color: 'text-black' },       
]

export const projects = [
  { 
    title: "Library Management Frontend", 
    description: "A modern and responsive web interface for managing books, users, and borrowing records, including both user-facing and admin dashboard functionalities.", 
    tech: "React (Vite) + Tailwind", 
    github: "https://github.com/Marlesk/library-management-frontend",
    demo: "https://libraryappdemofrontend.vercel.app/",
    howToUse: [
      "👉 Use the demo account to log in as admin:",
      "• Username: admin",
      "• Password: Demo123!",
      "",
      "📌 Features:",
      "• Add books manually or via Google API",
      "• Register user accounts",
      "• Make requests and test features",
      "• Borrow and return books",
      "• Manage users and books",
      "• Demo database resets every 3 days"
    ]
  },

  { 
    title: "Library Management Backend", 
    description: "RESTful API that powers the library system with book inventory, user authentication, role-based access, and borrowing system management.", 
    tech: "Node.js + Express + MongoDB", 
    github: "https://github.com/Marlesk/library-management-backend",
    demo: ""
  },

  {
    title: "To-Do App",
    description: "A simple task management app where users can add, edit, complete, and delete tasks. Includes real-time statistics: total, active, and completed tasks.",
    tech: "React (Vite) + Tailwind",
    github: "https://github.com/Marlesk/cf7-pro-todo-app",
    demo: "https://marlesk.github.io/cf7-pro-todo-app/",
    howToUse: [
      "✨ No login required.",
      "• Add new tasks",
      "• Edit tasks",
      "• Mark tasks as completed",
      "• Delete tasks",
      "• View total, active, and completed task statistics"
    ]
  }
]

export const schools = [
  {
    title: 'Coding Factory Program',
    year: 'Oct 2024 – Sep 2025',
    university: 'Athens University of Economics & Business',
    description: 'Full-Stack Development & Programming Training'
  },
  {
    title: 'AWS re/Start Program',
    year: 'Mar 2024 – June 2024',
    university: 'Big Blue Data Academy',
    description: 'Cloud Computing & IT Fundamentals Training'
  },
  {
    title: 'M.Sc. in Biostatistics',
    year: 'Oct 2017 – Nov 2020',
    university: 'National and Kapodistrian University of Athens | Departments of Medicine & Mathematics'
  },
  {
    title: 'B.Sc. in Mathematics',
    year: 'Oct 2012 – Jul 2017',
    university: 'National and Kapodistrian University of Athens | Departments of Mathematics',
    description:'Statistics and Operations Research'
  }
]

export const certifications = [
  {
    title: 'AWS Cloud Practitioner',
    year: 'June 2024',
    university: 'Amazon Web Services'
  },
  {
    title: 'HTML5 and JavaScript',
    year: 'Sep 2021',
    university: 'E-Learning, National and KapodistrianUniversity of Athens',
  },
  {
    title: 'Data Science in Python',
    year: 'Oct 2020',
    university: 'E-Learning, National and KapodistrianUniversity of Athens'
  },
  {
    title: 'ECDL Certificate',
    year: 'Jan 2019',
    university: 'PeopleCert'
  }
]

export const experiences = [
  {
    title: "Freelance Data Analyst",
    company: "Self-Employed",
    period: "Mar 2023 – Present",
    responsibilities: [
      "Analyzed datasets in education, healthcare, and finance sectors.",
      "Worked with Python, R, SQL, STATA for data cleaning and statistical analysis.",
      "Built interactive dashboards with Power BI to present insights.",
      "Collaborated with clients, improving problem-solving and project delivery skills."
    ]
  },
  {
    title: "Teaching Assistant – Mathematics & Data Analysis",
    company: "Self-Employed & Private Tutoring",
    period: "Sep 2020 – Present",
    responsibilities: [
      "Provided tutoring in mathematics, statistics, and data analysis.",
      "Explained complex technical concepts to non-technical audiences.",
      "Designed custom learning material, improving communication and teaching skills."
    ]
  }
]

