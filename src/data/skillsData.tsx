import { FaCss3, FaHtml5, FaReact, FaSass, FaVuejs } from 'react-icons/fa'
import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi'
import { FaGitAlt } from 'react-icons/fa6'
import { SiMysql } from 'react-icons/si'
import { RiNextjsFill } from 'react-icons/ri'

export const skillsData = {
  FrontEnd: [
    {
      name: 'React',
      icon: <FaReact color="#61DAFB" />,
      level: '5',
      content: 'React를 사용하여 다양한 웹 애플리케이션을 개발했습니다.'
    },
    {
      name: 'Next.js',
      icon: <RiNextjsFill color="#61DAFB" />,
      level: '4',
      content: 'Next.js를 활용하여 서버 사이드 렌더링과 정적 사이트 생성을 경험했습니다.'
    },
    {
      name: 'Vue.js',
      icon: <FaVuejs color="#41B883" />,
      level: '3',
      content: 'Vue.js를 사용하여 간단한 웹 애플리케이션을 개발한 경험이 있습니다.'
    },
    {
      name: 'TypeScript',
      icon: <BiLogoTypescript color="#3178C6" />,
      level: '4',
      content: 'TypeScript를 사용하여 코드의 안정성과 가독성을 높였습니다.'
    },
    {
      name: 'JavaScript',
      icon: <BiLogoJavascript color="#F7DF1E" />,
      level: '5',
      content: 'JavaScript를 활용한 동적인 웹 기능 구현 경험이 있습니다.'
    },
    {
      name: 'HTML',
      icon: <FaHtml5 color="#E34F26" />,
      level: '5',
      content: 'HTML을 사용하여 구조적이고 의미 있는 마크업을 작성했습니다.'
    },
    {
      name: 'SASS',
      icon: <FaSass color="#CC6699" />,
      level: '4',
      content: 'SASS를 활용하여 효율적인 스타일링을 구현했습니다.'
    },
    {
      name: 'CSS',
      icon: <FaCss3 color="#1572B6" />,
      level: '4',
      content: 'CSS를 사용하여 반응형 디자인과 레이아웃을 구현했습니다.'
    }
  ],
  Database: [
    {
      name: 'MySQL',
      icon: <SiMysql color="#4479A1" />,
      level: '2',
      content: 'MySQL을 사용하여 데이터베이스 설계 및 관리 경험이 있습니다.'
    }
  ],
  Etc: [
    {
      name: 'Git',
      icon: <FaGitAlt color="#F05032" />,
      level: '4',
      content: 'Git을 사용하여 버전 관리 및 협업 경험이 있습니다.'
    }
  ]
}
