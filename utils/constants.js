export const techStack = [
    "React JS",
    "React Native",
    "Javascript",
    "HTML",
    "CSS",
]

export const experiences = [
    {
        id: 1,
        position: "Junior Software Developer",
        company: "MYT SoftDev Solutions, Inc.",
        date: "April 2022 - Present",
        description: [
            "Developed and implemented robust ERP systems to streamline operations of around 75 local branches, enabling effective tracking and management of key business processes.",
            "Created hybrid mobile apps using React Native that enhanced employee productivity by enabling attendance tracking, order recording, stock requests, receiving transfers, and generating reports, both online and offline.",
            "Built responsive, visually appealing, and user-friendly eCommerce website with a content management system (CMS), empowering seamless product listing maintenance by business owners.",
            "Collaborated closely with backend developers, project managers, and QA specialists to ensure smooth integration and delivery of high-quality solutions.",
            "Provided supervision to interns, contributed to the establishment of company-wide frontend development guidelines, and conducted thorough code reviews to ensure adherence to coding standards and best practices.",
            "Designed effective and easy-to-navigate user interfaces using Figma."
        ],
    },
    {
        id: 2,
        position: "Software Developer Intern",
        company: "MYT SoftDev Solutions, Inc.",
        date: "November 2021 - April 2022",
        description: [
            "Collaborated with the development team to integrate new features and assisted to debug and enhance existing projects.",
            "Utilized Figma to design and prototype an eCommerce website, ensuring a visually appealing and user-friendly interface and implemented it on Shopify.",
            "Created Entity Relationship Diagrams (ERDs) to visualize data relationships, ensuring efficient data management and system performance."
        ],
    },
]

export const projects = [
    {
        name: "Mask ON: Real-time mask detector",
        short_description: "Face mask usage detector using the YOLOv8 object detection algorithm.",
        long_description: `This system aims to minimize virus transmission by categorizing individuals into three categories: "Uncovered," "Fully Covered," and "Not Covered." Leveraging computer vision and machine learning techniques, this system ensures adherence to face mask guidelines to mitigate the spread of infectious diseases. This innovative technology represents a significant step toward safeguarding public health and promoting safety in our communities.`,
        link: "https://scraus.github.io/special-problem/",
        tech_stack: ["YOLOv8", "React JS"],
        thumbnail: require("../assets/projects/mask_on/mask_on.png"),
        screenshots: [require("../assets/projects/mask_on/mask_on.png")],
    },
]

export const skills = [
    {
        name: "Web development",
        tech_stack: [
            "React JS",
            "Next JS",
            "Chakra UI",
            "Tailwind CSS",
            "Bootstrap",
            "Ant Design",
            "Javascript",
            "HTML",
            "CSS"
        ],
        main: true,
        icon: require("../assets/images/web_dev.png")
    },
    {
        name: "Mobile development",
        tech_stack: [
            "React Native", 
            "Expo"
        ],
        main: true,
        icon: require("../assets/images/mobile_dev.png")
    },
    {
        name: "Tools",
        tech_stack: [
            "Git", 
            "Postman", 
            "cPanel", 
            "Sentry", 
            "Figma", 
            "Canva"
        ],
        main: false
    },
    {
        name: "Soft",
        tech_stack: [
            "Self-learning", 
            "Adaptability", 
            "Attention to detail", 
            "Organized", 
            "Time management", 
            "Team work"
        ],
        main: false
    },
    {
        name: "Others",
        tech_stack: [
            "YOLOv8 Object Detection Algorithm"
        ],
        main: false
    },
]

export const education = [
    {
        id: 1,
        title: "University of the Philippines Cebu",
        place: "",
        date: "July 2023",
        description: [
            "Bachelor of Science in Computer Science, Magna Cum Laude, GWA: 1.32",
            "Undergraduate thesis: Face mask compliance detection using the YOLOv8"
        ],
        certificate_link: "https://www.upcebu.edu.ph/"
    },
    {
        id: 2,
        title: "Advanced React",
        place: "Coursera",
        date: "July 2023",
        description: [],
        certificate_link: "https://coursera.org/verify/ZH4QT888ZNL7"
    },
    {
        id: 3,
        title: "Front-end Web UI Frameworks and Tools: Bootstrap 4",
        place: "Coursera",
        date: "November 2021",
        description: [],
        certificate_link: "https://coursera.org/verify/WYDP42MNBB3P"
    },
]