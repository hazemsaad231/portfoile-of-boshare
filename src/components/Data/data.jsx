import { SiFlutter, SiDart, SiFirebase, SiPostman, SiGit, SiGithub } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import chat from '../../assets/images/chat.jpeg';
import todo from '../../assets/images/nots.jpeg';
import news from '../../assets/images/news.jpeg';
import weather from '../../assets/images/weather.jpeg';
import marsal from '../../assets/images/marsal.webp';




// ملاحظة: قم بتغيير مسارات الصور لتناسب ملفاتك الفعلية
export const Icons = [
    {
        name: "Flutter",
        icon: SiFlutter,
    },
    {
        name: "Dart",
        icon: SiDart,
    },
    {
        name: "Firebase",
        icon: SiFirebase,
    },
    {
        name: "REST APIs",
        icon: TbApi,
    },
    {
        name: "Git",
        icon: SiGit,
    },
    {
        name: "GitHub",
        icon: SiGithub,
    },
    {
        name: "Postman",
        icon: SiPostman,
    },
    {
        name: "Hive/Storage",
        icon: FaDatabase,
    },
];

export const personal = {
  name: "Bushra A'mer",
  email: "boshraamer622@gmail.com",
  phone: "01017823288",
  summary: "Junior Mobile Developer proficient in Flutter with a strong grasp of Clean Architecture and BLOC/Cubit for state management. Experienced in backend integration using RESTful APIs and Firebase.",
  location: "6th of October City, Egypt"
};

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Akhbar El Yom Academy",
    year: "2021 - 2025",
    description: "Graduation Project Grade: A+"
  }
];

// تم تقسيم المشاريع بناءً على التقنيات المستخدمة كما في الملف الأصلي
export const Flutter = [
    {
        id: 1,
        title: "Mersal",
        img:marsal,
        link:'https://github.com/Bu4ra-3mer/marsal.git',
        skills: ["Flutter", "RESTful APIs", "AI", "Text-to-Speech"],
        description: "An AI-based sign language translation tool providing bidirectional translation with camera input and text-to-speech features."
    },
    {
        id: 2,
        title: "To-Do List",
        img:todo,
        link:'https://github.com/Bu4ra-3mer/notes_app.git',
        skills: ["Flutter", "Clean Architecture", "Parse Server", "Freezed"],
        description: "A task management app built using Clean Architecture, integrating Parse Server for persistence and supporting Anonymous Sign-In."
    },
    {
        id: 3,
        title: "Chat App",
        img:chat,
        link:'https://github.com/Bu4ra-3mer/chat_app.git',
        skills: ["Flutter", "Firebase Auth", "Cloud Firestore"],
        description: "A real-time chat application with secure user authentication and live messaging capabilities."
    },
    {
        id: 4,
        title: "App News",
        img:news,
        link:'https://github.com/Bu4ra-3mer/news_app.git',
        skills: ["Flutter", "Dio", "RESTful API", "Cached Network Image"],
        description: "A multi-category news application fetching articles from APIs and optimizing image loading."
    },
    {
        id: 5,
        title: "Weather App",
        img:weather,
        link:'https://github.com/Bu4ra-3mer/weather_app.git',
        skills: ["Flutter", "Dio", "RESTful API", "Cached Network Image"],
        description: "A weather app displaying real-time weather information using APIs and optimizing image loading."
    }
];

export const experience = [
     {
    name: "Flutter Mobile Developer Intern",
    title: "ITargs",
    text: "Focused on Clean Architecture (Domain and Data layers), scalable state management using BLOC/Cubit, and backend integration using Parse Server and Freezed.",
    date: "04/2025 – Present"
  },
   
  {
    name: "Freelance Flutter Developer",
    title: "Self-Employed",
    text: "Developed and deployed custom mobile applications for local clients. Focused on UI/UX implementation, performance optimization, and integrating third-party services like Firebase and Google Maps.",
    date: "03/2025 – 04/2025"
  },
   {
    name: "Flutter Mobile Developer Intern",
    title: "EGRONX",
    text: "Integrated RESTful APIs for user authentication and core features. Worked within a remote development team mastering professional Git-based workflows like branching and merging.",
     date: "01/2025 – 03/2025"
  },

];

export const skills = [
    'Dart',
    'Flutter',
    'Clean Architecture',
    'BLOC/Cubit',
    'REST APIs',
    'Firebase',
    'Parse Server',
    'Hive',
    'Git & GitHub',
    'Postman',
    'Performance Optimization'
];

export default Flutter;