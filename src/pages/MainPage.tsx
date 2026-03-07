import dayjs from 'dayjs'
import { MarkGithubIcon } from '@primer/octicons-react'
import { image } from '@assets/images'
import styles from '@assets/scss/pages/MainPage.module.scss'

export const MainPage = () => {
  const experience = dayjs().diff(dayjs('2020-08-01'), 'year')

  return (
    <div className={styles.main_page}>
      <div className={styles.intro_section}>
        <div className={styles.image}>
          <img src={image.spaceImage} />
        </div>
        <div className={styles.info}>
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
                  <MarkGithubIcon fill="#fff" size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
