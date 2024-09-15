import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Guddu Giri",
  title: "Hi all, I'm Guddu",
  description:
    "I'm a passionate Full Stack Web developer with experience developing Full Stack web applications with Python, Django, React.js, and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "https://drive.google.com/file/d/1zdKJ7XWuAebfoNVAz9lX_vCrP-LOksXv/view?usp=sharing",
};

export const openSource = {
  githubUserName: "Guddugiri1",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:guddugiri216@gmail.com",
  linkedin: "https://www.linkedin.com/in/guddu-giri-505597266/",
  github: "https://github.com/Guddugiri1",
  instagram: "https://www.instagram.com/guddu_giri07",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "98",
  },
  {
    Stack: "Web Development",
    progressPercentage: "96",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Gurukul Mission Sr.Sec. School",
    subHeader: "Higher Secondary Certificate (HSC)",
    duration: "S April 2020 - July 2021",
    desc: "",
    grade: "63 %",
    descBullets: [],
  },
  {
    schoolName: "Aditya Silver Oak Institute Of Technology",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2022 - Present",
    desc: "",
    grade: "Current SPI 7.13",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Fullstack Software Engineer",
    company: "StaytunedLLP",
    companyLogo: "/img/icons/common/download.png",
    date: "June 12,2023 - Sept 02,2023",
    desc: " I have gained a solid foundation in Rust programming through thorough learning and practical experience. This includes building a functional calculator application, demonstrating proficiency in key programming concepts. Additionally, I've applied Rust in both front-end and back-end development, gaining full-stack experience. These experiences have sharpened my problem-solving, analytical thinking, and teamwork skills through collaborative projects.",
  },

  {
    role: "Fullstack Stack Developer",
    company: "RAAPYD",
    companyLogo: "/img/icons/common/download1.jpeg",
    date: "August 12,2024 - Present",
    desc: " I am currently working as a Full Stack Developer at Raapy, where I have gained expertise in HTML, CSS, JavaScript, AngularJS, Java Spring Boot, and Bootstrap. I have worked on multiple projects, focusing on both front-end and back-end development, applying the knowledge I’ve acquired through hands-on experience. My work at Raapy has allowed me to enhance my skills and deepen my understanding of these technologies.",
  },
  // {
  //   role: "Full Stack Developer",
  //   company: "Duseca Software",
  //   companyLogo: "/img/icons/common/duseca_software_logo.jpeg",
  //   date: "Jan 2022 - Sept 2023",
  //   desc: "Crafted robust mobile application backends employing Django, Python, and REST APIs. Leveraged Django REST Framework, PostgreSQL, AWS, Firebase, Stripe, and WebSocket for efficient development. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface.",
  // descBullets: [
  // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
  // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  // ],
  // },
  // {
  //   role: "Full Stack Developer",
  //   company: "ZRTechnologies",
  //   companyLogo: "/img/icons/common/zrtech.jpeg",
  //   date: "Aug 2022 - Jun 2023",
  //   desc: "Crafting diverse web applications, I've elevated functionality and user engagement. Spearheaded Visual Portfolio, leveraging AI for captivating presentations from parsed text. Proficiently set up and optimized applications on Linux servers, guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
  // },
  // {
  //   role: "Backend Developer",
  //   company: "Bleed-AI",
  //   companyLogo: "/img/icons/common/bleedAI.jpg",
  //   date: "Sept 2021 - Oct 2021",
  //   desc: "As a Django developer at Bleed AI, I integrated a computer vision AI model to process YouTube URLs on a website. I used Django Channels and Websockets to show real-time processing and implemented threading to run multiple instances of the AI model. I also used jQuery for UI rendering and deployed the website on a Heroku server.",
  // },
];

// define project type

export const projects: ProjectType[] = [
  {
    name: "My Portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/Guddugiri1/gudduportfolio",
    link: "https://gudduportfolio.vercel.app/",
  },
  {
    name: "Cluix Pvt.Ltd",
    desc: "Successfully led the development and implementation of an e-commerce platform for Cluix LLP Water Testing Company, enabling seamless online product ordering for customers through integrated payment gateway solutions.",
    link: "https://www.cluix.in/",
  },
  {
    name: "Sportskomaki",
    desc: "Developed a dynamic and user-friendly website for SportsKomaki, a leading bike showroom. The website provides an immersive online experience for customers to explore the latest models, check specifications, and even schedule test rides.",
    link: "https://sportskomaki.in/",
  },
  {
    name: "Jugaad Business",
    desc: " Led the development team in designing and building a professional website for a business consulting firm specializing in strategy, operations, and organizational development. The website serves as a key marketing and client engagement platform.",
    link: "https://www.jugaadbusiness.com/",
  },
  {
    name: "Anjaneya Sewa Samiti",
    desc: " Designed and developed the Anjaneya Sewa Samiti food donation charity trust website from front to back-end, ensuring seamless user experience and efficient management of donations",
    link: " https://anjaneyasewasamiti.com/",
  },
  {
    name: "Uniqueprint4u",
    desc: " This project is an All-in-One Print Portal developed using PHP, HTML, CSS, Laravel, and various APIs. The portal allows users to easily upload documents and place printing orders, offering a seamless user experience. It integrates APIs for real-time processing, payment gateways, and order tracking. The front-end, built with HTML and CSS, ensures a responsive and user-friendly interface, while Laravel is used to manage the back-end, ensuring smooth functionality, security, and scalability.",
    link: " https://uniqueprint4u.in/",
  },
  {
    name: "Instagram Web Page Clone",
    desc: "Developed a fully responsive Instagram web page clone using only HTML and CSS. Focused on recreating the user interface, layout, and design to closely mimic the original platform while ensuring compatibility across different screen sizes.",
    link: "https://raapydinstaclone.netlify.app/",
  },
  {
    name: "Titan Ecommerce Web Page Clone",
    desc: "Developed a responsive home page for a Titan eCommerce website clone using HTML, CSS, and Bootstrap. Focused on clean design, layout, and cross-device compatibility to replicate the brand's user experience.",
    link: "https://titan-website-clone.vercel.app/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "S.K Rana",
    role: "CEO at Jugaad Business",
    feedback:
      "Guddu Services is an invaluable part of our software development team. & always goes the extra mile to ensure we are satisfied and happy with the results. & has come to understand",
  },
  {
    name: "Robin Singh",
    role: "CEO at Cluix Pvt.Ltd.",
    feedback:
      " I just launched my website last month. The designers at Guddu. are very much worthy for this.  Now, I am having my website as I wanted it and with also some other features that worked good suggested by them, and I can't think of.",
  },
  {
    name: "Aisa Sharma",
    role: "CEO at Sportskomaki",
    feedback:
      "Guddu is a highly trusted partner and offers quality work to its client. They are cost-effective and timely in all their undertakings. Being its client, I am impressed by the quality standard they maintain in their website development services.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Guddu Giri",
  description: greetings.description,
  author: "Guddu Giri",
  image: "/img/icons/common/guddu.jpg",
  url: "https://gudduportfolio.vercel.app/",
  keywords: ["Guddu", "Guddu Giri", "@Guddugiri1", "Portfolio", "Guddu Portfolio ", "Guddu Giri Portfolio"],
};
