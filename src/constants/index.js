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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
} from "../assets";



import angular from "../assets/tech/angular.png";
import powerapps from "../assets/tech/powerapps.png";
import power from "../assets/tech/power.png";
import powerbi from "../assets/tech/powerbi.png";
import ieee from "../assets/tech/ieee.png";
import gdsc from "../assets/tech/gdsc.png";
import forvia from "../assets/tech/forvia.png";
import platana from "../assets/tech/platana.png";
import powervirt from "../assets/tech/powervirt.png";
import faurecia from "../assets/faurecia.png";
import spam from "../assets/spam.png";
import restau from "../assets/restau.png";
import med from "../assets/med.png";
import jee from "../assets/jee.png";
import bigdata from "../assets/bigdata.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Power Platform Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
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
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Power Apps",
    icon: powerapps,
  },
  {
    name: "Power Automate",
    icon: power,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
  {
    name: "Power Virtual Agents",
    icon: powervirt,
  },

];

const experiences = [
  {
    title: "Vice Chair",
    company_name: "IEEE",
    icon: ieee,
    iconBg: "#ffffff",
    date: "Jun 2022 - Jan 2023",
    points: [
      "Events creation and management involves planning, organizing, and executing events of different types with a focus on achieving specific goals while adhering to budgets and timelines.",
      "Media responsibility involves using various forms of media ethically and responsibly, with a focus on providing accurate and unbiased information while adhering to legal and regulatory standards.",
      "Organization and maintenance involve managing resources, systems, and processes to support the smooth functioning of an organization or project, with a focus on creating policies and procedures, managing finances and staff, and ensuring compliance with legal and regulatory requirements."
    ],
  },
  {
    title: "Angular developer",
    company_name: "Platana",
    icon: platana,
    iconBg: "#2f3239",
    date: "Jul 2022 - Aug 2022",
    points: [
      "Migrating 2 applications from Angular v10 to Angular v14 involves updating the applications to comply with the newer version of the Angular framework, including updating any deprecated features, modifying any incompatible code, and testing the applications thoroughly.",
      "Adding more functionalities to an application involves identifying areas where additional features or improvements can be made, developing new components or modules, integrating new APIs or services, testing thoroughly, and considering user feedback and usage analytics."
    ],
  },
  {
    title: "Content Manager",
    company_name: "Google developer Student Club",
    icon: gdsc,
    iconBg: "#ffffff",
    date: "Sep 2022 - Jan 2023",
    points: [
      "Organizing sessions involves scheduling and coordinating different events or activities within a program, conference, or meeting to ensure they run smoothly and efficiently.",
      "Preparing all the necessary tools for a workshop involves gathering and arranging all the equipment, materials, and resources required for the workshop's successful delivery, including handouts, presentation materials, equipment, and any other necessary supplies."
    ],
  },
  {
    title: "Power Platform Developer",
    company_name: "Forvia",
    icon: forvia,
    iconBg: "#ffffff",
    date: "Feb 2023 - May 2023",
    points: [
      "Developing and maintaining 2 applications using Power Apps, Power Automate and Power BI involves creating and supporting two applications using Microsoft's suite of low-code tools. This includes designing and building the applications, as well as ensuring their ongoing maintenance and support.",
      "Implementing responsive design and ensuring cross-browser compatibility involves creating web pages that automatically adjust to different screen sizes and devices, while also ensuring that the web pages function correctly across different web browsers.",
      "Developing a chatbot using Power Virtual Agents involves designing and building a conversational interface that can interact with users and provide them with information or assistance. This includes creating chatbot flows, configuring triggers and events, and training the chatbot to respond to user inquiries.",
      "Implementing the backend using SharePoint involves using Microsoft's SharePoint platform to create and manage the server-side functionality for an application. This includes configuring SharePoint lists and libraries, creating workflows, and managing user permissions and security settings.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "On-Call Duty Management",
    description:
      "The project involves developing two Microsoft Power Apps applications: a mobile app for on-call agents and a desktop software for HR and team leads. It also includes developing a Chatbot using Microsoft Power Virtual Agent to assist team leaders and agents in searching for incidents within SharePoint, integrated into Microsoft Teams. The goal is to create a comprehensive and streamlined system for managing on-call duties and incident reporting, resulting in increased productivity and efficiency.",
    tags: [
      {
        name: "powerapps & powerautomate",
        color: "blue-text-gradient",
      },
      {
        name: "powervirtualagents",
        color: "green-text-gradient",
      },
      {
        name: "sharepoint",
        color: "pink-text-gradient",
      },
    ],
    image: faurecia,
    source_code_link: "https://github.com/Larousse2001",
  },
  {
    name: "Restaurant Website",
    description:
      "The project is a restaurant website developed using Angular. The website provides a user-friendly online platform for customers to order food. The homepage features a menu contact information, and food image gallery. Customers can create an account, access their order history, and place orders securely using the website's login page. Real-time order tracking and delivery status updates enhance the customer experience. Overall, the website provides a streamlined and efficient process for customers to order food online, making it a valuable asset to the restaurant's business.",
    tags: [
      {    
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: restau,
    source_code_link: "https://github.com/Larousse2001/NgProject",
  },
  {
    name: "Mail Spam Detection",
    description:
      "The machine learning project involves developing a spam detection system that can identify if an email is spam or not based on a pre-labeled dataset. The dataset is preprocessed, split into training and testing sets, and several machine learning algorithms are implemented, including Naive Bayes and Support Vector Machines. The model's accuracy is evaluated using metrics such as precision, recall, and F1-score. The final model can be deployed for real-world use in email services to reduce unwanted emails and improve user experience.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "sklearn",
        color: "green-text-gradient",
      },
      {
        name: "model",
        color: "pink-text-gradient",
      },
    ],
    image: spam,
    source_code_link: "https://github.com/Larousse2001/MailSpam",
  },
  {
    name: "Med4Life",
    description:
      "The UX/UI project involves designing a medical application that enables patients to establish online consultations with doctors and get advice securely. The app includes features such as secure messaging and video consultations and ensures a responsive design optimized for mobile devices. The project also includes user testing to gather feedback and improve the app's usability and user experience. Overall, the medical application provides an efficient and secure way for patients to receive medical advice and consultations from doctors online.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
    ],
    image: med,
    source_code_link: "https://github.com/Larousse2001/SolutionChallengeGoogle_DebugEntity_FlutterApp",
  },
  {
    name: "Elastic Search Project",
    description:
      "The project involves using Elastic Search to manage a simple dataset with custom mapping and data pipelines for data quality and consistency. It uses big data technologies like Apache Hadoop and Spark for efficient data processing and analysis. Elastic Search provides powerful search and analysis capabilities for the dataset, allowing users to easily search, filter, and sort the data. The project provides a robust and scalable solution for managing and maintaining a simple dataset using Elastic Search.",
    tags: [
      {
        name: "bigdata",
        color: "blue-text-gradient",
      },
      {
        name: "elasticsearch",
        color: "green-text-gradient",
      },
      {
        name: "model",
        color: "pink-text-gradient",
      },
    ],
    image: bigdata,
    source_code_link: "https://github.com/Larousse2001/BigDataElasticSearch",
  },
  {
    name: "Calculating Center Management",
    description:
      "The JEE project is a web-based application that calculates a student's overall average based on their marks in various subjects. It is built using JEE technology and includes a user interface, a database to store information and marks, and authentication and authorization features for different users. The project is scalable and provides a reliable way to manage student marks.",
    tags: [
      {
        name: "jee",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "eclipse",
        color: "pink-text-gradient",
      },
    ],
    image: jee,
    source_code_link: "https://github.com/Larousse2001/CalculatingCenterManagement",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
