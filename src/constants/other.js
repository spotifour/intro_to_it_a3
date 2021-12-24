import { AiOutlineTeam, AiFillProject } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { MdGroups } from "react-icons/md";
import { VscReferences } from "react-icons/vsc";

export const HomepageContent = [
  {
    section: "Team Profile",
    description:
      "Erat et ipsum diam voluptua vero clita ea ipsum sed. Diam et elitr et rebum diam duo tempor. No duo.",
    icon: <AiOutlineTeam />,
    url: '/teamProfile'
  },
  {
    section: "Tools",
    description:
      "Erat et ipsum diam voluptua vero clita ea ipsum sed. Diam et elitr et rebum diam duo tempor. No duo.",
    icon: <FaTools />,
    url: '/tools'
  },
  {
    section: "Project Description",
    description:
      "Erat et ipsum diam voluptua vero clita ea ipsum sed. Diam et elitr et rebum diam duo tempor. No duo.",
    icon: <AiFillProject />,
    url: '/projectDescription'
  },
  {
    section: "Skills And Jobs",
    description:
      "Erat et ipsum diam voluptua vero clita ea ipsum sed. Diam et elitr et rebum diam duo tempor. No duo.",
    icon: <GrUserManager />,
    url: '/skillsAndJobs'
  },
  {
    section: "Group Reflection",
    description:
      "Erat et ipsum diam voluptua vero clita ea ipsum sed. Diam et elitr et rebum diam duo tempor. No duo.",
    icon: <MdGroups />,
    url: '/groupReflection'
  },
  {
    section: "References",
    description:
      "Erat et ipsum diam voluptua vero clita ea ipsum sed. Diam et elitr et rebum diam duo tempor. No duo.",
    icon: <VscReferences />,
    url: '/references'
  },
];

export const sections = [
  {
    name: 'Team Profile',
    path: '/teamProfile'
  },
  {
    name: 'Tools',
    path: '/tools'
  },
  {
    name: 'Project Description',
    path: '/projectDescription'
  },
  {
    name: 'Skills And Jobs',
    path: '/skillsAndJobs'
  },
  {
    name: 'Group Reflection',
    path: '/groupReflection'
  },
  {
    name: 'References',
    path: '/references'
  },
]
