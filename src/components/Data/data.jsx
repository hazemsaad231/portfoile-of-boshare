import { SiFlutter, SiDart, SiFirebase, SiPostman, SiGit, SiGithub } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaDatabase, FaSave } from "react-icons/fa";
import { MdArchitecture } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import chat from "../../assets/images/chat.jpeg";
import nots from "../../assets/images/nots.jpeg";
import news from "../../assets/images/news.jpeg";
import weather from "../../assets/images/weather.jpeg";
import marsal from "../../assets/images/marsal.webp";
import toku from "../../assets/images/toku.jpeg";
import todo from "../../assets/images/todo.jpeg";
import store from "../../assets/images/store.jpeg";
import tunes from "../../assets/images/tunes.jpeg";
import xo from "../../assets/images/xo.jpeg";
import flash_light from "../../assets/images/flash_light.jpeg";
import counter from "../../assets/images/counter.jpeg";
import birht_day_card from "../../assets/images/birth_day_card.webp";
import business_card from "../../assets/images/business_card.jpeg";
import splash_screen from "../../assets/images/splash_screen.jpeg";



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
        name: "SOLID Principles",
        icon: MdArchitecture,
    },
    {
        name: "Dio",
        icon: BiTransfer,
    },
    {
        name: "HTTP",
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
    {
        name: "Shared Preferences",
        icon: FaSave,
    },
];

export const personal = {
  name: "Bushra",
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
        link:'https://github.com/Bu4ra-3mer/mersal',
        skills: ["Flutter", "RESTful APIs", "AI", "Text-to-Speech"],
        description: "An AI-based sign language translation tool providing bidirectional translation with camera input and text-to-speech features."
    },
    {
        id: 2,
        title: "Notes App",
        img:nots,
        link:'https://github.com/Bu4ra-3mer/notes_app',
        skills: ["Flutter", "ListView.builder", "Hive","Cubit"],
        description: "A task management app built using Clean Architecture, integrating Parse Server for persistence and supporting Anonymous Sign-In."
    },
    {
        id: 3,
        title: "Chat App",
        img:chat,
        link:'https://github.com/Bu4ra-3mer/chat_app',
        skills: ["Flutter", "Firebase Auth", "Cloud Firestore","Navigation"],
        description: "A real-time chat application with secure user authentication and live messaging capabilities."
    },
    {
        id: 4,
        title: "App News",
        img:news,
        link:'https://github.com/Bu4ra-3mer/news_app',
        skills: ["Flutter", "Dio", "RESTful API", "Cached Network Image"],
        description: "A multi-category news application fetching articles from APIs and optimizing image loading."
    },
    {
        id: 5,
        title: "Weather App",
        img:weather,
        link:'https://github.com/Bu4ra-3mer/weather_app',
        skills: ["Flutter", "http", "API Request", "Cached Network Image","Cubit"],
        description: "A weather app displaying real-time weather information using APIs and optimizing image loading."
    },
    {
        id: 6,
        title: "Toku App",
        img:toku,
        link:'https://meet.google.com/oef-adze-wfc',
        skills: ["Flutter", "SetState", "assets_audio_player","Local Data"],
        description: "Created a beginner-friendly Japanese learning app with audio-based interaction."
    },
      {
        id: 7,
        title: "Todo List",
        img:todo,
        link:'https://github.com/Bu4ra-3mer/todo_list.git',
        skills: ["Flutter", "Freezed package ", "Clean Architecture ", "Parse Server","Handling Errors "],
        description: "To-Do app with Clean Architecture, Parse Server for storage, Freezed models, and Anonymous Sign-In."
    },
     {
        id: 8,
        title: "Store App",
        img:store,
        link:'https://github.com/Bu4ra-3mer/store_app.git',
        skills: ["Flutter", "Handling Errors ", "Reset APIs", "Dio","GridView"],
        description: "A sleek and intuitive Store App to explore, manage, and update products effortlessly."
    },
    {
        id: 9,
        title: "Tunes player",
        img:tunes,
        link:'https://github.com/Bu4ra-3mer/tunes_player.git',
        skills: ["Flutter", "SetState ", "audioplayers","Listview",],
        description: "A simple music player with seven note levels, demonstrating audio playback and user interaction."
    },
    {
        id: 10,
        title: "XO Game",
        img:xo,
        link:'https://github.com/Bu4ra-3mer/xo.git',
        skills: ["Flutter", "Handling Errors", "Setstate", "GridView","GestureDetector"],
        description: "Classic XO game with score tracking for X and O players, providing a fun and competitive experience."
    },
    {
        id: 11,
        title: "Flash Light",
        img:flash_light,
        link:'https://github.com/Bu4ra-3mer/flash_light.git',
        skills: ["Flutter", "Icons", "Setstate", ],
        description: "Flashlight app with yellow and gray toggle logo."
    },
    {
        id: 12,
        title: "Counter",
        img:counter,
        link:'https://github.com/Bu4ra-3mer/count.git',
        skills: ["Flutter", "Containers", "Setstate", ],
        description: "A simple counter app demonstrating state management using setState, perfect for tracking increments and decrements."
    },
    {
        id: 13,
        title: "Business Card",
        img:business_card,
        link:'https://github.com/Bu4ra-3mer/business_card.git',
        skills: ["Flutter", "ListTail",  "asset", "UI Design" ],
        description: "An interactive digital business card app to showcase contact information in a sleek, mobile-friendly design."
    },
    {
        id: 14,
        title: "Birthday Card",
        img:birht_day_card,
        link:'https://github.com/Bu4ra-3mer/birth_day_card.git',
        skills: ["Flutter", "asset","UI Design" ],
        description: "A creative birthday card app to send personalized wishes and greetings digitally."
    },
    {
        id: 15,
        title: "Splash Screen",
        img:splash_screen,
        link:'https://github.com/Bu4ra-3mer/splash_screen.git',
        skills: ["Flutter", "RichText","UI Design" ],
        description: "A colorful splash screen app using RichText to display each word in a different color."
    },
];

export const experience = [
     {
    name: "Flutter Mobile Developer Intern",
    title: "ITargs",
    text: "Focused on Clean Architecture (Domain and Data layers), scalable state management using BLOC/Cubit, and backend integration using Parse Server and Freezed.",
    // date: "04/2025 – Present"
  },
   
  {
    name: "Freelance Flutter Developer",
    title: "Self-Employed",
    text: "Developed and deployed custom mobile applications for local clients. Focused on UI/UX implementation, performance optimization, and integrating third-party services like Firebase and Google Maps.",
    // date: "03/2025 – 04/2025"
  },
   {
    name: "Flutter Mobile Developer Intern",
    title: "EGRONX",
    text: "Integrated RESTful APIs for user authentication and core features. Worked within a remote development team mastering professional Git-based workflows like branching and merging.",
    //  date: "01/2025 – 03/2025"
  },

];

export const skills = [
    'Dart',
    'Flutter',
    'Clean Architecture',
    'BLOC/Cubit',
    'SOLID Principles',
    'REST APIs',
    'Dio',
    'HTTP',
    'Firebase',
    'Parse Server',
    'Hive',
    'Shared Preferences',
    'Git & GitHub',
    'Postman',
    'Performance Optimization'
];

export default Flutter;