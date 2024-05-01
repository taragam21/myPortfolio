/* myPortfolio's Portfolio file*/
/* Change this file to get your personal Porfolio */

/* Some Tips:
★ Place your images in "src/assets/images" path
★ Place your custom loading animations in assets/lottie
★ Set value to false to hide a section or an entire page
★ Get fontAwesomeClassnames from https://www.fontawesome.com
★ Set blogSection false to hide all kind of blogs
*/

/*
Some informations are kept unchanged according to component owners 
Credits: masterPortfolio(https://github.com/ashutosh1919/masterPortfolio)
         developerFolio(https://github.com/saadpasta/developerFolio)
*/

// Website related settings
// Which pages will be enabled

const pageEnabled = {
  splash: true, // Change this to false if you don't want Splash screen

  education: true, // Change this to false if you don't want education (degrees, certifications) page

  projects: true, // Change this to false if you don't want projects (from github data)

  experience: true, // Change this to false if you don't want experience page

  contact: true // Change this to false if you don't want contact page
};

// Routing with or without '#'
const routerValue =
  "HashRouter"; /* Supported values:
 					1. HashRouter(for github hosted user Pages)
 					2. BrowserRouter (for regular hosting)
 					*/

// Splash Screen

const splashScreen = {
  useLottie: true, // setting it false will show animation of src/components/loader
  animationFile:
    "starLoading" /* Supported Values
    					             1. splashAnimation
    					             2. email
    					             3. build
    					             4. landingPerson
    					             5. codingPerson
    					             6. geometricLoader
    					             7. starLoading
    					             8. ripple
    					             9. nightDay
    					             10. littleRobot
    					             11. poolChartLoading
    					             */,
  duration: 3500 // Set animation duration(milliseconds) as per your animation
};

/**************               Home Page                    ****************/

//SEO Related settings
const seo = {
  title: "Tarabai's Portfolio",
  description: "Portfolio Website of Tarabai",
  og: {
    title: "Tarabai's Portfolio",
    type: "website",
    url: "https://github.com/taragam21"
  }
};

//Home Page
const greeting = {
  title: "Tarabai GAMBARA",
  logo_path: "kas.png",
  nickname: "Ingénieur Data & IA",
  subTitle:
    "Passionné par les sciences des données et l'intelligence artificiel, qui s'efforce toujours de travailler sur des produits complets qui développent des systèmes innovants, techniques durables et évolutifs afin de créer un impact.",
  resumeLink:
    "https://utbm-my.sharepoint.com/:b:/g/personal/tarabai_gambara_utbm_fr/EfeSfH3tkQ5IozMnn3gsyDsBiCwF_TSC8AQqGugIMP7axw?e=EdSpdw",
  portfolio_repository: "https://www.linkedin.com/in/taragam/", //star-me-on-github button
  githubProfile: "https://github.com/taragam21" //more projects button
};

const socialMediaLinks = [
  /* Your Social Media Links */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/taragam21",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717" // Reference https://simpleicons.org/?q=github
  },
  //  {
  //    name: "LinkedIn",
  //    link: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  //    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
  //    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  //  },
  //  {
  //    name: "YouTube",
  //    link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  //  },
  {
    name: "Gmail",
    link: "mailto:tarabai.gambara@utbm.fr",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836" // Reference https://simpleicons.org/?q=gmail
  },
  //  {
  //    name: "Twitter",
  //    link: "https://twitter.com/ashutosh_1919",
  //    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  //  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/taragam/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2" // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Telephone",
    link: "tel:0783710483",
    fontAwesomeIcon: "fa-whatsapp", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#008100" // Reference https://simpleicons.org/?q=facebook
  }
];

// Skill Information
/* Available imageNames: 
      
      FullStackImg, 
      TerminalImg,  
      DesignImg, 
      AppDevelopImg, 
      CloudInfraImg,
      DataScienceImg.
      */

const skills = {
  display: true, // Set it true to display your skills
  data: [
    {
      title: "Data Science & IA",
      imageName: "DesignImg",
      skills: [
        "⚡ Développement des modèles prêts pour la production, hautement évolutifs, pour divers cas d'utilisation en apprentissage profond et en statistiques.",
        "⚡ Expérience dans des algorithmes tels que le K-Means et la recherche du plus court chemin (A*) sur des données complexes.",
        "⚡ Entrainement des algorithmes d'apprentissage profond sur des données complexes tel que la 3D.",
        "⚡ Expérience de travail avec la vision artificiel, intégration des modèles de deep learning avec la vision artificiel."
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent"
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000"
          }
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "logos-flask",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB"
          }
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "logos:jupyter",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB"
          }
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "vscode-icons:file-type-mongo",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB"
          }
        },
        {
          skillName: "SparQL",
          fontAwesomeClassname: "vscode-icons:file-type-sparql",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB"
          }
        },
        {
          skillName: "OWL",
          fontAwesomeClassname: "twemoji:owl",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB"
          }
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png"
        }
      ]
    },
    {
      title: "Développement Full Stack",
      imageName: "AppDevelopImg",
      skills: [
        "⚡ Creation des site web complet et réactif avec diverses technologies et langages.",
        "⚡ Développement d'application backend avec PHP, Flask et Java.",
        "⚡ Développement frontend avec JQuery, HTML, CSS, CodeIgniter et Bootstrap.",
        "⚡ Integration des technologies et outils diverses tel que Springboot, Maven, Github, etc."
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26"
          }
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6"
          }
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E"
          }
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#02569B"
          }
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB"
          }
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933"
          }
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837"
          }
        },
        {
          skillName: "Springboot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#00b300"
          }
        },
        {
          skillName: "JQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#02569B"
          }
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java-wordmark",
          style: {
            color: "#02569B"
          }
        }
      ]
    },
    {
      title: "Bases de données et visualisation",
      imageName: "DataScienceImg",
      skills: [
        "⚡ Gestion et la manipulation des bases de données.",
        "⚡ Analyse et conception de bases de données relationnelles, non relationnelles et orientées objet.",
        "⚡ Capacité à écrire des requêtes complexes et à optimiser les performances des bases de données.",
        "⚡ Utilisation avancée d'Excel pour l'analyse de données, y compris les fonctions complexes, les tableaux croisés dynamiques et la visualisation."
      ],
      softwareSkills: [
        {
          skillName: "SQL",
          fontAwesomeClassname: "tabler:sql",
          style: {
            color: "#1572B6"
          }
        },
        {
          skillName: "PL/SQL",
          fontAwesomeClassname: "vscode-icons:file-type-plsql",
          style: {
            color: "#1572B6"
          }
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
            color: "#61DAFB"
          }
        },
        {
          skillName: "SQL Server",
          fontAwesomeClassname: "devicon:microsoftsqlserver-wordmark",
          style: {
            color: "#339933"
          }
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "file-icons:microsoft-excel",
          style: {
            color: "#339933"
          }
        },
        {
          skillName: "Access",
          fontAwesomeClassname: "file-icons:microsoft-access",
          style: {
            color: "#cd0000"
          }
        }
      ]
    }
  ]
};

const techStack = {
  // Skill Part
  display: true, // Set it to true to view skillbars of language
  title: "Récapitulatif connaissance technique",
  experience: [
    {
      Stack: "Python", // Insert stack or technology or language you have experience in
      progressPercentage: "90%" // Insert relative proficiency in percentage
    },
    {
      Stack: "Deep learning",
      progressPercentage: "80%"
    },
    {
      Stack: "SQL",
      progressPercentage: "80%"
    },
    {
      Stack: "Power BI",
      progressPercentage: "70%"
    },
    {
      Stack: "JavaScript/TypeScript",
      progressPercentage: "80%"
    },
    {
      Stack: "PHP",
      progressPercentage: "60%"
    },
    {
      Stack: "Java",
      progressPercentage: "80%"
    },
    {
      Stack: "C#",
      progressPercentage: "80%"
    },
    {
      Stack: "C/C++",
      progressPercentage: "60%"
    }
  ]
};

const languageStack = {
  // Skill Part
  display: true, // Set it to true to view skillbars of language
  title: "Atouts linguistiques",
  experience: [
    {
      Stack: "Français", // Insert stack or technology or language you have experience in
      progressPercentage: "90%" // Insert relative proficiency in percentage
    },
    {
      Stack: "Anglais",
      progressPercentage: "90%"
    },
    {
      Stack: "Allemand",
      progressPercentage: "30%"
    },
    {
      Stack: "Coréen",
      progressPercentage: "30%"
    }
  ]
};

// Your tweets displayed in a iframe
const twitterUsername = "none"; // set it none to display no tweets

/****************               Education Page          ****************/
// Degrees received from institutions
const degrees = {
  display: true, // Set it false to hide degrees, defaults to true
  degrees: [
    {
      title: "Université Nationale de Jeonbuk, Corée de sud",
      subtitle: "Etudiant en échange en Intelligence artificiel",
      logo_path: "jbnu.png",
      alt_name: "JBNU",
      duration: "2023 - 2024",
      descriptions: [
        "Spécialisé en intelligence artificielle, couvrant l'apprentissage profond, la vision par ordinateur, et la science des données, j'ai également acquis des compétences en algorithmes, bases de données, et programmation. Cette formation complète me prépare à contribuer efficacement à des projets d'IA à l'échelle internationale, enrichissant mon expertise technique et ma perspective globale."
      ],
      website_link: "https://www.jbnu.ac.kr/eng/"
    },
    {
      title: "Université de Technologie de Belfort-Montbéliard",
      subtitle:
        "Diplôme d’Ingénieur en Informatique spécialité Data science & AI",
      logo_path: "utbm.png",
      alt_name: "UTBM",
      duration: "2021 - 2024",
      descriptions: [
        "Au cours de mon cursus, j'ai acquis des connaissances et compétences solides en apprentissage automatique, en exploration de données, en échantillonnage de données, en visualisation de données, etc. Au cours des derniers semestres, j'ai eu l'opportunité d'explorer non seulement toutes les généralités de l'informatique (telles que les réseaux, la programmation, les systèmes d'exploitation, ...) mais j'ai également acquis des connaissances en mathématiques, en gestion de projets, en comportements internationaux et dans de nombreux autres domaines qui ne pourraient être entièrement énumérés."
      ],
      website_link: "https://www.utbm.fr/"
    },
    {
      title: "Université de Ngaoundéré, Cameroun",
      subtitle: "Licence en Informatique",
      logo_path: "ndere.png",
      alt_name: "NDERE",
      duration: "2018 - 2021",
      descriptions: [
        "Cette formation combine une solide base en mathématiques et statistiques avec des compétences avancées en informatique. J'ai développé une expertise en algorithmique, programmation en Python, Java, C++ et SQL, et en structures de données. La licence m'a également permis de maîtriser l'analyse numérique et la modélisation mathématique, tout en renforçant ma capacité à résoudre des problèmes de manière analytique et innovante, préparant ainsi le terrain pour aborder des défis techniques complexes."
      ],
      website_link: "https://www.univ-ndere.cm/"
    }
  ]
};

// Certifications in education page
const certifications = {
  display: true, // Set it false to hide certifications, defaults to true
  certifications: [
    {
      title: "Accelerating End-to-End Data Science",
      subtitle: "- Greg Estes",
      logo_path: "nvidia.png",
      certificate_link:
        "https://learn.nvidia.com/certificates?id=6260060f5c644b76bdb655d82d71e287",
      alt_name: "Nvidia University",
      color_code: "#00000015"
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/PTL97473RK85",
      alt_name: "deeplearning.ai",
      color_code: "#00000099"
    },
    {
      title: "Data Science",
      subtitle: "- Rav Ahuja",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/7ed13e49d22eae8aec00de1d4cc85837",
      alt_name: "IBM",
      color_code: "#1F70C199"
    },
    {
      title: "Crunch Time",
      subtitle: "- UTBM",
      logo_path: "utbm_tech.png",
      certificate_link: "https://openbadgepassport.com/app/badge/info/593744",
      alt_name: "UTBM",
      color_code: "#ffffff"
    },
    {
      title: "Machine Learning with Python",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/VTHRJ934PRK8",
      alt_name: "IBM",
      color_code: "#1F70C199"
    },
    {
      title: "Improving Deep Neural Networks",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/3d4758218f8d0804f4c9a04038e3ca79",
      alt_name: "deeplearning.ai",
      color_code: "#00000099"
    },
  ],
};

/*******************          Experience Page          ****************/

const experience = {
  title: "Expérience",
  description:
    "Mon expérience est acquise non seulement pendant mes périodes de stage dans de grandes multinationales, mais également pendant mes activités extrascolaires.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Extrascolaires",
      experiences: [
        {
          title: "Développeur web",
          company: "Get In UTBM",
          company_url: "",
          logo_path: "ae.png",
          duration: "Octobre 2021 – Juin 2022",
          location: "Belfort, France",
          description:
            "Un site dédié à aider les nouveaux étudiants dans la recherche de logement et l’accompagnement dans la signature du contrat à Belfort, Sevenans et Montbelliard. J’avais la charge de développer le site web en utilisant CodeIgniter et Bootstrap. Pour cela, il a fallu établir un cahier des charges, définir les exigences fonctionnels et non-fonctionnels.",
          color: "#0879bf"
        }
      ]
    },
    {
      title: "Stage",
      experiences: [
        {
          title: "Ingénieur Data Science et Intelligence Artificiel",
          company: "Actemium",
          company_url: "https://www.actemium.fr/",
          logo_path: "actemium.png",
          duration: "Février 2024 - Présent",
          location: "Dole, France",
          description:
            "Afin de classifier des nuages de point d’une maquette 3D et de remplir automatiquement ces classifications, je suis chargé d’entrainer des algorithmes d’IA principalement des reseaux de neuronnes à l’aide des technologies et environnement de développement dédiés ensuite, déployer ces algorithmes. De plus, j'ai utilisé l'agorithme de K-Means pour optimiser la repartition d'équipement dans une zone industriel. J'ai également la charge de développer un algorithme de pathfinding en utilisant A-star pour trouver le chemin entre un équipement et une boîte de jonction. Les langages utilisé sont Python et ses libraries pour l'apprentissage et Javascript pour le K-Means et le pathfinding.",
          color: "#0071C5"
        },
        {
          title: "Développeur web",
          company: "General Electric",
          company_url: "https://www.ge.com/",
          logo_path: "ge.png",
          duration: "Septembre 2022 – Février 2023",
          location: "Belfort, France",
          description:
            "Mon rôle au sein de l’équipe était de transformer un fichier Excel en une application web fonctionnel pour le client plus complexe et plus complet ensuite de l’intégrer dans le portail principal pour qu’il y soit accessible. Comme bonus, il a fallu intégrer un lien dans MTA Viewer qui conduit à une page regroupant les modules qui est lui accessible en lecture seule à toutes utilisateurs de la plateforme. Le but de cette application était une facilité l’ajout, la suppression et la modification d’information pour le client raison pour laquelle elle est directement déployé et déjà en utilisation. Les principaux langages utilisés sont PHP, Java, javascript, JQuery et jqgrid.",
          color: "#0071C5"
        }
      ]
    }
  ]
};

/****************            Projects Page           ********************/

// Projects (Github) Section of Projects Page
const projects = {
  display: true, // Set it false to hide your pinned projects in github, defaults to true
  title: "Projets",
  description:
    "Mes projets sont pour la plupart open source. Cette section illustre mon approche pratique des concepts théoriques et ma capacité à appliquer mes compétences en résolution de problèmes à des scénarios réels.",
  avatar_image_path: "projects_image.svg"
};

/*******************          Contact Page          ****************/

const contactPageData = {
  contactSection: {
    title: "Recrutez-moi",
    profile_image_path: "hire.png",
    description:
      "Merci de me laisser un message et je repondrais dès que possible"
  },
  addressSection: {
    title: "Address",
    subtitle: "Dole, France",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/@47.0932669,5.4776202,11z?entry=ttu"
  },
  phoneSection: {
    title: "Téléphone",
    subtitle: "0783710483"
  }
};

// Send a message in emailjs account
const contactMessage = {
  display: true, // Set it false if you don't have emailjs account or you don't want message, defaults to true
  emailjsUserID: "uv3goGdSY2iJeEeAT",
  templateID: "template_j8lj1as",
  serviceID: "service_n0v5cjn"
};

export {
  pageEnabled,
  routerValue,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  techStack,
  languageStack,
  degrees,
  certifications,
  experience,
  projects,
  contactPageData,
  contactMessage,
  twitterUsername,
  splashScreen
};
