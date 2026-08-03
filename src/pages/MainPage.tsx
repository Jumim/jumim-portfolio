import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { IoIosArrowDown, IoLogoGithub } from 'react-icons/io'
import { projectData, skillsData, experienceData } from '@data'
import images from '@assets/images'
import styles from '@assets/scss/pages/MainPage.module.scss'

type Skills = 'FrontEnd' | 'BackEnd' | 'Etc'

export const MainPage = () => {
  const [skills, setSkills] = useState<Skills>('FrontEnd')
  const [isScrollDownVisible, setIsScrollDownVisible] = useState(false) // 스크롤다운 표시 유무

  const experience = dayjs().diff(dayjs('2020-08-01'), 'year')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const pageHeight = document.documentElement.scrollHeight // 전체 페이지 높이
      const mainContentElement = document.querySelector(`.${styles.main_content}`)
      const lastSectionElement = mainContentElement?.lastElementChild as HTMLElement // 마지막 섹션 요소

      if (lastSectionElement) {
        setIsScrollDownVisible(scrollPosition >= pageHeight - lastSectionElement.offsetHeight + 200)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const handleClickSkill = (skill: Skills) => {
    setSkills(skill)
  }

  return (
    <div className={styles.main_page}>
      <div className={styles.main_content}>
        <div className={styles.intro_section}>
          <div className={styles.intro_image}>
            <img src={images.spaceImage} alt="intro image" />
          </div>
          <div className={styles.intro_info}>
            <div>
              <div className={styles.name}>
                <p>프론트엔드 개발자</p>
                <p>이주미</p>
              </div>
              <div className={styles.introduction}>
                <p>안녕하세요! {experience}년차 프론트엔드 개발자 이주미입니다.</p>
                <p>항상 성장하는 개발자가 되는 것을 목표로 하고 있습니다.</p>
              </div>
              <ul className={styles.contact}>
                <li>
                  <a href="mailto:a25320@naver.com">a25320@naver.com</a>
                </li>
                <li className={styles.list}>
                  <a href="https://github.com/Jumim" target="_blank" rel="noopener noreferrer">
                    <IoLogoGithub color="#fff" size={28} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.skills_section}>
          <h1 className={styles.title}>Skills</h1>
          <div className={styles.skills}>
            <ul className={styles.skill_list}>
              <li className={skills === 'FrontEnd' ? styles.active : ''} onClick={() => handleClickSkill('FrontEnd')}>
                FrontEnd
              </li>
              <li className={skills === 'BackEnd' ? styles.active : ''} onClick={() => handleClickSkill('BackEnd')}>
                BackEnd
              </li>
              <li className={skills === 'Etc' ? styles.active : ''} onClick={() => handleClickSkill('Etc')}>
                Etc
              </li>
            </ul>
            <ul className={styles.skill_content_list}>
              {skillsData[skills].map(skill => (
                <li key={skill.name}>
                  <div className={styles.skill_header}>
                    <div className={styles.skill_icon}>{skill.icon}</div>
                    <p className={styles.skill_name}>{skill.name}</p>
                    <p className={styles.skill_level}>
                      <span style={{ width: `${(Number(skill.level) / 10) * 100}%` }}></span>
                    </p>
                  </div>
                  <div className={styles.skill_content}>{skill.content}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.experience_section}>
          <h1 className={styles.title}>Experience</h1>
          <ul className={styles.experience_list}>
            {experienceData.map((exp, index) => (
              <li key={index} className={styles.experience_item}>
                <div className={styles.experience_content}>
                  <div className={styles.experience_header}>
                    <p className={styles.experience_company}>{exp.company}</p>
                    <p className={styles.experience_period}>{exp.period}</p>
                  </div>
                  <p className={styles.experience_position}>{exp.position}</p>
                  <p className={styles.experience_description}>{exp.description}</p>
                  {exp.reason && <p className={styles.experience_reason}>퇴직 사유: {exp.reason}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.portfolio_section}>
          <h1 className={styles.title}>Portfolio</h1>
          <div className={styles.portfolio}>
            {projectData.map(project => (
              <a key={project.name} href={project.link} target="_blank" rel="noopener noreferrer" className={styles.project}>
                <div className={styles.project_type}>{project.type}</div>
                <div className={styles.project_info}>
                  <div className={styles.project_image}>
                    <img src={project.image} alt={project.name} />
                  </div>
                  <h2 className={styles.project_name}>{project.name}</h2>
                  <p className={styles.project_period}>{project.period}</p>
                  <p className={styles.project_description}>{project.description}</p>
                  <ul className={styles.project_skills}>
                    {project.skills.map(skill => (
                      <li key={skill.name} className={styles.project_skill}>
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {!isScrollDownVisible && (
        <div className={styles.scroll_down}>
          <p className={styles.scroll_text}>Scroll Down</p>
          <div className={styles.scroll_arrow}>
            <IoIosArrowDown color="#fff" />
          </div>
        </div>
      )}
    </div>
  )
}
