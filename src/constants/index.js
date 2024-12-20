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
  stellarAssociation,
  poggio,
  ngc2403,
  armsm83,
  wr124,
  galaxyIsophotes
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
    name: 'Star Cluster Identification',
    description:
      "This repository is a little extract of my thesis, 'Identification of Star Clusters in Gaia DR3 to "+
      "Correlate Them with the Spiral Arms of the Milky Way,' which presents a catalog of 534 star clusters " +
      "identified using clustering algorithms like DBSCAN and pyUPMASK. Isochrone fitting determined parameters "+
      "such as age, metallicity, and distance. The study highlights the correlation between young clusters and "+
      "the Milky Way's spiral arms, showing high consistency with major catalogs. This entire process was carried "+
      "out using Python, extracting data from a database containing over 7.1 billion records.",
    tags: [
      // {
      //   name: 'python',
      //   color: 'blue-text-gradient',
      // },
      // {
      //   name: 'Redux',
      //   color: 'text-neutral-100',
      // },
      // {
      //   name: 'Node - Express',
      //   color: 'text-purple-600',
      // },
      // {
      //   name: 'mongodb',
      //   color: 'green-text-gradient',
      // },
      // {
      //   name: 'tailwind',
      //   color: 'pink-text-gradient',
      // },
    ],
    image: poggio,
    source_code_link: 'https://github.com/slastrar/Thesis-Catalogue',
  },
  {
    name: 'Estimation of the Age of a Stellar Association',

    description:
      'In this project, I analyzed and processed astrophysical data to estimate the age of a stellar association. The work '+
      'began with data cleaning, where I used a crossmatch of two astronomical catalogs to ensure accuracy and consistency. '+
      'Next, I applied astrophysical calculations to assign kinematic properties to the stars in the association. After '+
      'identifying and removing outliers, I successfully estimated the age of the stellar association.', 

    tags: [
      // {
      //   name: 'react',
      //   color: 'blue-text-gradient',
      // },
    ],
    image: stellarAssociation,
    source_code_link: 'https://github.com/slastrar/Age-of-stellar-association/',
  },
  {
    name: 'Arms of Galaxy',

    description:
      'University project to map the arms of the M83 galaxy using Gaussian Mixture Models for pattern identification and '+
      'advanced interpolation techniques from SciPy. The data was sourced from two different databases, and the '+
      'correspondence of the stars in both datasets was analyzed.',

    tags: [
      // {
      //   name: 'react',
      //   color: 'blue-text-gradient',
      // },
    ],
    image: armsm83,
    source_code_link: 'https://github.com/slastrar/M83-Galaxy-Arms/',
  },
  {
    name: 'Mass of Galaxy',
    description:
      'In a university project, I calculated the mass of a galaxy using only its rotation curve. To do this, I '+
      'implemented several astrophysical models in Python, combining theory and programming to tackle an interesting '+
      'problem in astrophysics.',
    tags: [
      // {
      //   name: 'python',
      //   color: 'pink-text-gradient',
      // },
    ],
    image: ngc2403,
    source_code_link: 'https://github.com/slastrar/Mass-of-NGC2403',
  },
  {
    name: 'Identification of a Wolf-Rayet Star',

    description:
      'This university project aimed to identify a Wolf-Rayet star in a densely populated stellar region. These rare and massive stars '+
      'are in the late stages of their evolution, characterized by strong stellar winds and the loss of their outer layers. The '+
      'analysis involved extracting data from the Gaia astronomical database, applying astrophysical methods to identify the star '+
      'among surrounding objects, and calculating additional astrophysical parameters to further understand its properties.',

    tags: [
      // {
      //   name: 'react',
      //   color: 'blue-text-gradient',
      // },
    ],
    image: wr124,
    source_code_link: 'https://github.com/slastrar/Stellar-characteristics-of-WR124/',
  },
  {
    name: 'Inclination Angle Calculation of Two Galaxies',

    description:
      'This university project calculated the inclination angles of two galaxies using images from the MAST database. The process '+
      'involved analyzing galaxy images, identifying high-luminosity regions, and fitting isophotes (equal luminosity regions). '+
      'Astrophysical methods were then applied to determine the inclination angles, showcasing skills in image analysis, data '+
      'extraction, and astrophysical techniques.',

    tags: [
      // {
      //   name: 'react',
      //   color: 'blue-text-gradient',
      // },
    ],
    image: galaxyIsophotes,
    source_code_link: 'https://github.com/slastrar/Galaxy-Isophotes/',
  },
       
];

export { services, technologies, experiences, testimonials, projects };
