import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
  sql,
  powerbi,
  tableau,
  postgresql,
  sqlserver,
  mariadb,
  vue,
  react,
  mysql,
  codeConnect,
  analitica,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'languages',
    title: 'Languages',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
];

const services = [
  {
    title: 'Data Engineer',
    icon: web,
  },
  {
    title: 'Machine Learning Engineer',
    icon: mobile,
  },
  {
    title: 'Data Scientist',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'SQL Server',
    icon: sqlserver,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Power BI',
    icon: powerbi,
  },
  {
    name: 'Tableau',
    icon: tableau,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'PostreSQL',
    icon: postgresql,
  },
  //{
  //  name: 'MongoDB',
  //  icon: mongodb,
  //},
  {
    name: 'MariaDb',
    icon: mariadb,
  },
  {
    name: 'Vue',
    icon: vue,
  },
  {
    name: 'React',
    icon: react,
  },
];

const experiences = [
  {
    title: 'Python Developer',
    icon: python,
    iconBg: '#383E56',
    points: [
      'As a Python Developer, I specialize in data analysis and modeling, leveraging '+
      'powerful libraries to process, analyze, and visualize data. My expertise includes '+
      'utilizing Pandas for data manipulation, NumPy for numerical computations, SciPy '+
      'for advanced statistical analysis, and Matplotlib for creating insightful visualizations. '+
      'I also work with Scikit-learn to build machine learning models and TensorFlow for deep '+
      'learning solutions.' //, ensuring robust and scalable data-driven applications.',
    ],
  },

  {
    title: 'SQL Developer',
    icon: sql,
    iconBg: '#383E56',
    points: [
      'I specialize in working with relational databases, where I design and optimize SQL queries '+
      'for efficient data extraction, transformation, and analysis. My skills include developing '+
      'stored procedures, ensuring data integrity, and enhancing database performance. Additionally, '+
      'I perform complex database queries to retrieve and analyze data, creating efficient workflows '+
      'for data processing.',
    ],
  },
  {
    title: 'Power Bi',
    icon: powerbi,
    iconBg: '#E6DEDD',
    points: [
      'I use Power BI to create data models, design interactive dashboards, and write complex DAX queries '+
      'for data analysis. I focus on integrating diverse data sources, optimizing report performance, and '+
      'ensuring efficient data transformation for actionable insights.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Code Connect',
    description:
      'Code Connect is a social network tailored for developers, crafted as a part of my thesis project. This endeavor was developed using React with Redux and Redux Toolkit for the frontend, while the backend was implemented with Node.js, incorporating sockets for real-time communication. The objective behind Code Connect was to foster the creation of a community where developers could share knowledge and collaborate effectively on projects.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Redux',
        color: 'text-neutral-100',
      },
      {
        name: 'Node - Express',
        color: 'text-purple-600',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: codeConnect,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Analitica',
    description:
      'Analitica was developed with the purpose of providing businesses with data organization capabilities. This platform allows businesses to input service data for each client, enabling them to visualize and analyze this data through various graphs. The goal is to derive intelligent insights and conclusions from the presented analytics, empowering businesses to make informed decisions based on the data collected.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'React Query',
        color: 'text-green-600',
      },
      {
        name: 'Node - Express',
        color: 'text-purple-600',
      },
      {
        name: 'SQL',
        color: 'text-yellow-600',
      },
    ],
    image: analitica,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Diverse Project Portfolio',

    description:
      'Throughout my career, I ve crafted a range of projects, from movie search engines to expense management apps and web platforms dedicated to organizing favorite book collections. These endeavors span from straightforward and practical solutions to more comprehensive applications, showcasing my ability to adapt to diverse needs and deliver effective solutions.',

    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
    ],
    image: '',
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
