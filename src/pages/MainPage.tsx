import { useState } from 'react'
import dayjs from 'dayjs'
import { IoLogoGithub } from 'react-icons/io'
import { skillsData } from '@data'
import { image } from '@assets/images'
import styles from '@assets/scss/pages/MainPage.module.scss'

type Skills = 'FrontEnd' | 'BackEnd' | 'Etc'

export const MainPage = () => {
  const [skills, setSkills] = useState<Skills>('FrontEnd')

  const experience = dayjs().diff(dayjs('2020-08-01'), 'year')

  const handleClickSkill = (skill: Skills) => {
    setSkills(skill)
  }

  return (
    <div className={styles.main_page}>
      <div className={styles.intro_section}>
        <div className={styles.intro_image}>
          <img src={image.spaceImage} alt="intro image" />
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
              <li>010-5485-5996</li>
              <li>
                <a href="mailto:a25320@naver.com">a25320@naver.com</a>
              </li>
              <li className={styles.list}>
                <a href="https://github.com/Jumim" target="_blank" rel="noopener noreferrer">
                  <IoLogoGithub color="#fff" size={24} />
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
    </div>
  )
}
