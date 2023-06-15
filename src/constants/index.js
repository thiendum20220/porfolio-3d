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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    query,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    tma,
    freelance,
    music,
    sport
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Mobile Developer",
        icon: mobile,
    },
    // {
    //     title: "Backend Developer",
    //     icon: backend,
    // },
    {
        title: "Game Developer",
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
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "query",
        icon: query,
    },
];

const experiences = [
    {
        title: "ReactJS Developer",
        company_name: "TMA Solutions",
        project_name: "Control of Work (CoW)",
        icon: tma,
        iconBg: "#383E56",
        date: "February 2022 - April 2023",
        points: [
            "Developing and maintaining web application using React.js and other related technologies.",
            "Collaborating with cross-functional teams including Team Leader, Scrum Master, Test team and other developers to create high-quality products.",
            "Implementing new features and fix bugs.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "ReactJS Developer",
        company_name: "TMA Solutions",
        project_name: "Altiplano Extension (Nokia)",
        icon: tma,
        iconBg: "#383E56",
        date: "February 2023 - April 2023",
        points: [
            "Access Extension System is a system to focus on manage the network devices based on YANG (Data Modelling Language) and NETCONF (Protocol). It provides services via Web UI Apps to control the network easily.",
            "Being trained internally on helm setup: learn helm, k8s, docker and do exercises.",
            "Being trained internally on extensions: Netconf, Yang, XML/XPath, FreeMarker and do exercises.",
        ],
    },
    {
        title: "Frontend Developer - ReactJS",
        company_name: "Freelance",
        project_name: "Chatbot Admin",
        icon: freelance,
        iconBg: "#E6DEDD",
        date: "June 2022 - Present",
        points: [
            "Chatbot Website is allowing users to create, deploy, and manage chatbots. It allows users to create chatbots with different features and functions to solve problems ranging from customer support, answering questions, etc.",
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including Designers, NLP BE Team, and Team Leader to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Build UI of Intents, Entities, Models, Chat Messages with CRUD Form; Develop new features: Dialog Flow Component.",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#383E56",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
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
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Music",
        description:
            "Web application that allows users to  search for songs, artists, add songs to favorite playlists, and listen to music by albums. Customize the currently playing song and much more.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "node",
                color: "orange-text-gradient",
            },
            {
                name: "Expressjs",
                color: "pink-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
        ],
        image: music,
        source_code_link: "https://github.com/thiendum2020/toryo-sport",
    },
    {
        name: "Toryo Sport",
        description:
            "Web application that allows users to search, view product details, place orders, check order history, and make online payments using Paypal. It also enables administrators to manage products and orders.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "node",
                color: "orange-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "Expressjs",
                color: "pink-text-gradient",
            },
        ],
        image: sport,
        source_code_link: "https://github.com/thiendum2020/toryo-sport",
    },
    // {
    //     name: "Trip Guide",
    //     description:
    //         "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //     tags: [
    //         {
    //             name: "nextjs",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "supabase",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "css",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: tripguide,
    //     source_code_link: "https://github.com/",
    // },
];

export { services, technologies, experiences, testimonials, projects };
