/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Paulo Espinola",
  title: "Hola, soy Paulo",
  subTitle: emoji(
    "Un apasionado Desarrollador Web con experiencia en crear sitios web y aplicaciones con WordPress / Drupal / Strapi / JavaScript / React.js / Node.js y otras tecnologías modernas."
  ),
  resumeLink:
    "https://drive.google.com/file/d/TU_CV_AQUI/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/PauloFicher",
  linkedin: "https://www.linkedin.com/in/pauloespinola/",
  gmail: "pauloespinola3@outlook.com",
  // gitlab: "",
  // facebook: "",
  // medium: "",
  // stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Soluciones que ofrezco",
  subTitle: "CONVIERTO NECESIDADES DE NEGOCIO EN SOLUCIONES DIGITALES EFECTIVAS",
  skills: [
    emoji("Diseño y desarrollo de landing pages estratégicas para captar leads y aumentar conversiones."),
    emoji("Creación de sitios web administrables con WordPress (Elementor, WooCommerce) para negocios que buscan autogestionarse."),
    emoji("Desarrollo de aplicaciones web a medida con React y Next.js para proyectos que requieren escalabilidad y personalización."),
    emoji("Optimización de rendimiento, SEO técnico y analítica para maximizar el retorno de inversión."),
    emoji("Consultoría en estrategia digital para alinear la tecnología con los objetivos de negocio.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "Elementor",
      fontAwesomeClassname: "fab fa-elementor"
    },
    {
      skillName: "drupal",
      fontAwesomeClassname: "fab fa-drupal"
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "UCOM - Universidad Comunera",
      
      subHeader: "Licenciatura en Marketing Digital",
      duration: "2023",
      desc: "Enfoque en estrategias digitales y desarrollo web.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, // Cambiado a false como solicitaste - no mostrar barras de progreso
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Web Developer & Administrador Web",
company: "Tigo Paraguay",
companylogo: require("./assets/images/millicom_international_cellular_tigo_logo.jpeg"), // Cambiar logo después
date: "JUN 2025 – Presente",
desc: "Desarrollo frontend y administración web de la plataforma principal de Tigo Paraguay, incluyendo optimización SEO y análisis de datos.",
descBullets: [
  "Desarrollo y mantenimiento de componentes frontend con tecnologías modernas",
  "Implementación de mejoras SEO, datos estructurados y optimización de rendimiento", 
  "Análisis de métricas web con Google Analytics 4 y generación de reportes",
  "Administración de contenido, actualizaciones y desarrollo de nuevas páginas",
  "Optimización de Core Web Vitals y experiencia de usuario"
]
    },
    {
  role: "Website Content Editor & E-commerce",
  companylogo: require("./assets/images/nestle_s_a__logo.jpeg"),
  company: "Nestlé Business Services", 
  date: "FEB 2024 – JUN 2025", // Agrega las fechas reales
  desc: "Gestión de contenido web y desarrollo de landing pages para múltiples marcas del portafolio Nestlé, incluyendo Purina, CatChow, DogChow y Nestlé Profesional.",
  descBullets: [
    "Desarrollo y mantenimiento de landing pages para campañas de marketing de marcas Purina",
    "Administración de CMS Drupal para gestión de contenido multiplataforma", 
    "Gestión de e-commerce con Magento para Nestlé Profesional (productos para chefs)",
    "Creación y adaptación de contenido web optimizado para diferentes audiencias",
    "Mantenimiento y actualización de catálogos de productos en plataformas e-commerce"
  ]
},
    {
  role: "Data Extraction Specialist & Web Scraping Developer",
  companylogo: require("./assets/images/globalnewsgroup_logo200x200.webp"),
  company: "GlobalNews Group",
  date: "OCT 2021 – FEB 2024", 
  desc: "Desarrollo de sistemas automatizados para extracción y replicación de contenido noticioso de múltiples fuentes digitales.",
  descBullets: [
    "Desarrollo de scripts con regex para extracción automatizada de contenido web",
    "Extracción de metadatos estructurados (body, datetime, h1) desde código fuente", 
    "Automatización de recolección de noticias de medios como Infobae para newsletter",
    "Desarrollo de interfaces para replicación de contenido en formato newsletter",
    "Optimización de procesos de scraping para múltiples fuentes de noticias"
  ]
}
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Proyectos Destacados",
  subtitle: "ALGUNOS PROYECTOS EN LOS QUE HE TRABAJADO",
  projects: [
    {
      image: require("./assets/images/BannercardLANDING.png"), // Cambiar imagen después
      projectName: "Landing Page Moderna",
      projectDesc: "Landing page con diseño innovador y animaciones fluidas",
      footerLink: [
        {
          name: "Ver Proyecto",
          url: "https://modern-landing-page-lake.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/INTERMISSION.png"), // Cambiar imagen después
      projectName: "Intermission Acousctics",
      projectDesc: "Soluciones acústicas de alta calidad en Paraguay.",
      footerLink: [
        {
          name: "Ver Proyecto",
          url: "https://intermissionacoustics.com/"
        }
      ]
    },
    {
      image: require("./assets/images/CasaRamirezBanner.png"),
      projectName: "Casa Ramirez Hospedaje",
      projectDesc: "Un Lugar Ideal para Hospedarse en Caraguatay, Paraguay",
      footerLink: [
        {
          name: "Ver Proyecto",
          url: "https://casaramirezhospedaje.com/"
        }
      ]
    },
    {
      image: require("./assets/images/ToDoAppTaskflow.png"),
      projectName: "TaskFlow To Do App",
      projectDesc: "Una aplicación de gestión de tareas sencilla y eficiente.",
      footerLink: [
        {
          name: "Ver Proyecto",
          url: "https://modern-landing-page-lake.vercel.app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Logros y Certificaciones"),
  subtitle:
    "¡Logros, Certificaciones y algunas cosas geniales que he hecho!",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contacto"),
  subtitle:
    "¿Quieres discutir un proyecto?",
  number: "+595-984-175-707", // Agrega tu número si quieres
  email_address: "pauloespinola3@outlook.com"
};

// Resume Section - Agregado para arreglar el error
const resumeSection = {
  title: "Resume",
  subtitle: "Descarga mi CV para más detalles",
  resumeLink: "https://drive.google.com/file/d/TU_CV_AQUI/view?usp=sharing", // Reemplaza con tu link real
  display: true // Set false to hide the download resume button
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  resumeSection,
  twitterDetails,
  isHireable
};