import photo from '../assets/photo.png'

export interface ContactLink {
  label: string
  href: string
}

export interface Experience {
  title: string
  company: string
  location: string
  start: string
  end: string
  highlights: string[]
}

export interface Education {
  degree: string
  school: string
  location: string
  start: string
  end: string
  details?: string
}

export interface SkillGroup {
  name: string
  items: string[]
}

export interface Project {
  name: string
  description: string
  href?: string
  tech: string[]
}

export interface Resume {
  name: string
  role: string
  location: string
  email: string
  phone?: string
  photoUrl?: string
  links: ContactLink[]
  summary: string
  experience: Experience[]
  education: Education[]
  skills: SkillGroup[]
  projects: Project[]
  lastUpdated: string
}

export const resume: Resume = {
  name: 'SwayanPrabha Panda',
  role: 'Software Developer',
  location: 'Bangalore, India',
  email: 'swayanprabhapanda993@gmail.com',
  phone: '+91-9827615974',
  photoUrl: photo,
  links: [
    { label: 'linkedin.com/in/swayanprabha', href: 'https://www.linkedin.com/in/swayanprabha' },
    { label: 'github.com/Swayanprabha', href: 'https://github.com/Swayanprabha' },
  ],
  summary:
    'Software Developer with ~2 years of experience in backend development, with hands-on experience in Java, Spring Boot, SQL, REST APIs, and web applications. Strong foundation in Core Java, Object-Oriented Programming, Data Structures and Algorithms, and database management. Experienced in developing backend modules, business logic, APIs, and internal software solutions while working with Git and Agile practices. Adaptable and quick to learn new technologies, with a strong interest in problem-solving, backend engineering, and continuously improving technical skills.',
  experience: [
    {
      title: 'FrontEnd Developer(Intern)',
      company: 'Squbix Digital Solutions Pvt Ltd',
      location: 'Bhubaneswar, India',
      start: 'Aug 2023',
      end: 'Sept 2023',
      highlights: [
        'Developed and maintained web applications using React.js, HTML, CSS, and JavaScript.',
        'Collaborated with cross-functional teams to gather requirements and implement new features.',
        'Optimized application performance and ensured responsiveness across different devices and browsers.',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Knowledgist Pvt Ltd',
      location: 'Bhubaneswar, India',
      start: 'July 2024',
      end: 'Nov 2024',
      highlights: [
        'Developed and tested 100+ RESTful APIs using Java and Spring Boot for in-house software applications.',
        'Developed and implemented business logic and backend functionalities based on application requirements.',
        'Contributed to backend architecture and design following established coding and development practices.',
        'Debugged and resolved backend issues, bugs, and software defects to improve application reliability.',
        'Implemented caching strategies and optimized database queries to enhance application performance and reduce response times upto 20%.',
        'Assisted in technical documentation, including API specifications and backend workflows.',
        'Managed JIRA tickets for development tasks, bug fixes, testing, and issue tracking.',
      ],
    },
  ],
  education: [
    {
      degree: 'Master of Computer Applications',
      school: 'Silicon Institute of Technology, Bhubaneswar',
      location: 'Bhubaneswar, India',
      start: 'July 2022',
      end: 'June 2024',
    },
    {
      degree: 'Bachelor of Science(Physics)',
      school: 'Fakir Mohan University,Balasore',
      location: 'Odisha, India',
      start: 'Jul 2018',
      end: 'Jul 2021',
    },
  ],
  skills: [
    {
      name: 'Programming Languages',
      items: ['Java', 'Python', 'PHP', 'SQL', 'JavaScript', 'C'],
    },
    {
      name: 'Backend & Frameworks',
      items: [
        'Spring Boot',
        'Spring MVC',
        'Hibernate',
        'REST APIs',
        'Django',
        'Clean Architecture',
      ],
    },
    {
      name: 'Design & Engineering',
      items: [
        'Object-Oriented Programming',
        'SOLID Principles',
        'Microservices',
        'Event-Driven Architecture',
        'Low-Latency Architecture',
        'Scalable Backend Systems',
      ],
    },
    {
      name: 'Cloud & DevOps',
      items: ['AWS','Docker', 'Jenkins', 'Git', 'Maven','CI/CD'],
    },
    {
      name: 'Databases',
      items: ['PostgreSQL','Redis', 'MongoDB', 'MySQL'],
    },
    {
      name: 'Messaging',
      items: ['Kafka','Redis Pub/Sub'],
    }
  ],
  projects: [
    {
      name: 'Bhoomi',
      description:
       'A PHP based e-commerec platfrom for woman hygiene products, with features like product catalog, shopping cart, user authentication with an intrigration of blogging facilities for health awareness and user engagement.',
      tech: ['HTML', 'PHP', 'JavaScript', 'MySQL', 'CSS', 'Ajax'],
    },
    {
      name: 'FMS-File Management System',
      description:
        'A web based file management system for secure storage, retrieval, and sharing of files with user authentication, access control, and versioning features.',
      tech: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'REST APIs', 'React.js'],
    },
    {
      name: 'Weither-App',
      description:
        'A web based weather application for providing real-time weather updates and forecasts.',
      tech: ['Java', 'Spring Boot', 'REST APIs', 'Polling','Multithreading','OpenWeatherMap API'],
    },
    {
      name: 'Task Management System',
      description:
        'A backend application for Task Management with features like OTP Authentication,User Management, CRUD operations, Task Assignment, and Notifications for alarts and reminders.',
      tech: ['Java', 'REST APIs','Spring Boot', 'Hibernate', 'PostgreSQL', 'REST APIs', 'Mail Service', 'Session Management', 'Queue Service','Multithreading'],
    }
  ],
  lastUpdated: 'Sept 2026',
}

 