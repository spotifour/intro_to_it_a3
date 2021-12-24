import { AiOutlineTeam, AiFillProject } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { MdGroups, MdOutlineManageAccounts } from "react-icons/md";
import { VscReferences } from "react-icons/vsc";

const sectionIconSize = 70;
const sectionIconColor = '#4ec1fc';

export const sections = [
  {
    name: 'Team Profile',
    path: '/teamProfile',
    icon: <AiOutlineTeam size={sectionIconSize} color={sectionIconColor} />
  },
  {
    name: 'Tools',
    path: '/tools',
    icon: <FaTools size={sectionIconSize} color={sectionIconColor} />
  },
  {
    name: 'Project Description',
    path: '/projectDescription',
    icon: <AiFillProject size={sectionIconSize} color={sectionIconColor} />
  },
  {
    name: 'Skills And Jobs',
    path: '/skillsAndJobs',
    icon: <MdOutlineManageAccounts size={sectionIconSize} color={sectionIconColor} />
  },
  {
    name: 'Group Reflection',
    path: '/groupReflection',
    icon: <MdGroups size={sectionIconSize} color={sectionIconColor} />
  },
  {
    name: 'References',
    path: '/references',
    icon: <VscReferences size={sectionIconSize} color={sectionIconColor} />
  },
]
