import {
  FcManager,
  FcCommandLine,
  FcAdvertising,
  FcEngineering,
} from "react-icons/fc";

const iconSize = 100;

export const jobs = {
  Project_Manager: {
    text: [
      "Job Description:",
      [
        "Establish a product strategy and roadmap for all team members to follow.",
        "Examine the offerings of other competitors who provide similar services, and seek opportunities for differentiation.",
        "Lead the research and analysis of the customer behavior, as well as current Internet trends to identify and fill the product gaps.",
        "Make sure the development of the web application with new features and the resolution of issues encountered while using the site, come up with innovative ideas to help customers have a better experience.",
        "Collaborate closely with developers, marketing specialists, and quality assurance to make a web application that meets the requirements of venture capitalists.",
        "Ensure alignment with cross-functional stakeholders.",
      ],
      "Requirements:",
      [
        "A bachelor degree in Information Technology or related fields such as Computer Science, Software Engineering, etc.",
        "At least 1 year of experience working as a product manager in a technology company.",
        "Solid technological background with the knowledge or hands-on experience in the field of website development.",
        "Exceptional English skills, communicate fluently with international venture capitalists (IELTS 7.0 or higher is a plus).",
        "Great strategic thinking and analytical skills. Ability to acquire and analyze massive amounts of data, and transform them into compelling product vision, including economics and business plans.",
        "Good at identifying and solving problems, as well as coming up with solutions",
        "Excellent written and oral communication skills, effectively interacting with other professionals (developers, marketing specialist, designer, ...).",
      ],
    ],
    image: <FcManager size={iconSize} />,
  },
  Digital_Marketing_Specialist: {
    text: [
      "Job Description:",
      [
        "Develop orientation and phased promotion plans for different campaigns on digital media channels.",
        "Implement and optimize advertising campaigns on various platforms such as Facebook, Youtube, Tiktok, etc to promote the website application.",
        "Conduct market research, discover customer insights, as well as observe the activities of other businesses in the same industry.",
        "Learn and propose new digital marketing solutions to increase efficiency.",
        "Measure and report the performance of Digital Marketing campaigns to direct management as required.",
        "Develop plans to strengthen the Google ranking of our website.",
      ],
      "Requirements:",
      [
        "A bachelor degree in marketing or related fields such as Advertising, Communication, etc.",
        "1-2 years of experience working in digital marketing. Having experience as a website manager or a similar role is preferred.",
        "Good English writing and speaking skills (IELTS 7.0 or higher is a plus).",
        "Thorough knowledge of Search Engine Optimization (SEO) [13] and Paid Per Click (PPC) [14].",
        "Deep understanding of Digital Marketing measurement tools, a basic understanding of applications like Photoshop, Ai, Premiere, ...",
        "Comprehensive knowledge in marketing automation technology is a plus.",
        "Strong writing and presenting skills on a variety of social media platforms.",
        "Ability to evaluate, analyze issues quickly, exceptional problem-solving skills.",
        "Good interpersonal, teamwork, and time management skills.",
      ],
    ],
    image: <FcAdvertising size={iconSize} />,
  },
  Fullstack_Developer: {
    text: [
      "Job Description:",
      [
        "Develop the website application both in terms of the frontend and the backend.",
        "Modify or add additional features to the website in accordance with the requirement of the leader.",
        "Take part in the process of developing APIs [15] for application systems, and contribute to the design and maintenance of the application.",
        "Undertake different programming tasks and report progress to the Product Manager.",
        "Work closely with designers to ensure the technical feasibility of UI/UX.",
        "Collaborate with other professions and international stakeholders.",
      ],
      "Requirements:",
      [
        "A bachelor degree in Information Technology or a related field such as Software Engineering, Computer Engineering, etc (Minor major in Website Development is preferred).",
        "At least 2-year experience working with website programming languages HTML and CSS.",
        "Excellent understanding of the front-end technologies, including ReactJS.",
        "Knowledge of different back-end technologies, in particular Firebase and MySQL.",
        "Having experience in developing API is preferred.",
        'Proficient use of source code management tools such as Git and GitHub.',
        'Good communication and teamwork skills.',
        'Eager to research new technologies, swiftly adapt to new fields.'
      ],
    ],
    image: <FcCommandLine size={iconSize} />,
  },
  Quality_Assurance: {
    text: [
      "Job Description:",
      [
        "Develop detailed policies and procedures for quality assurance.",
        "Carry out tests and inspections of website designs and functionalities, as well as user experience.",
        "Investigate the root cause of errors, monitor the debugging process, and propose solutions to resolve issues before launching in production.",
        "Write automation test cases to check various features of the website, and scope each testing activity.",
        "Take responsibility for the overall quality of delivery for the website application, collaborate with other developers to ensure the high-level quality of the product.",
        "Give recommendations and present useful data to stakeholders."
      ],
      "Requirements:",
      [
        "A bachelor degree in Information Technology or related fields such as Computer Science, Process Management, or Quality Management.",
        "Have previous experience in developing web applications and working with bug management tools as well as API testing.",
        "Strong ability to employ automation tests in assessing the quality of the product.",
        "Good understanding of ISO, CMNI, and other quality frameworks [16].",
        "Excellent mathematical and logical thinking skills.",
        "Great communication and teamwork skills, be able to work under high pressure.",
        "Willing to research the latest technologies and quickly adapt to new fields."
      ],
    ],
    image: <FcEngineering size={iconSize} />,
  },
};
