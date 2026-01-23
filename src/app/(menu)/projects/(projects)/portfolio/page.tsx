import styles from './page.module.css';
import Image from 'next/image';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

export default function Page() {
  return (
    <main className={styles['container']}>
      <div className={styles['top-section-container']}>
        <section className={styles['top-section']}>
          <div className={styles['top-content-container']}>
            <div className={styles['logo']}>
              <span className={styles['logo-text']}>dongbin</span>
              <span className={styles['logo-dot']}>.</span>
            </div>

            <p className={styles['top-content-text']}>
              Next.js를 사용한 개인 포트폴리오 웹사이트로, 작업한 프로젝트들을 시각적으로 소개하기
              위해 제작했습니다. 랜딩 페이지와 project, about, contact 메뉴로 구성되어 있으며,
              이메일 전송 기능이 포함되어 있습니다.
            </p>
            <div className={styles['project-links']}>
              <div className={styles['project-link-container']}>
                <a
                  className={styles['project-link']}
                  href="https://dongbin.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
                <HiOutlineArrowLongRight className={styles['arrow']} />
              </div>
              <div className={styles['project-link-container']}>
                <a
                  className={styles['project-link']}
                  href="https://github.com/dongbin420/my-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <HiOutlineArrowLongRight className={styles['arrow']} />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={styles['bottom-section-container']}>
        <section className={styles['bottom-section']}>
          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>개요</h1>
            <ul className={styles['project-info-container']}>
              <div className={styles['project-infos']}>
                <li className={styles['project-info']}>
                  <p className={styles['project-info-title']}>프로젝트 기간</p>
                  <p className={styles['project-info-content']}>2023/11 ~ 2023/12</p>
                </li>
                <li className={styles['project-info']}>
                  <p className={styles['project-info-title']}>역할</p>
                  <p className={styles['project-info-content']}>
                    FE, 기획, 디자인, Deployment 등 전체
                  </p>
                </li>
              </div>
              <div className={styles['project-infos']}>
                <li className={styles['project-info']}>
                  <p className={styles['project-info-title']}>팀 / 솔로</p>
                  <p className={styles['project-info-content']}>솔로(FE)</p>
                </li>
                <li className={styles['project-info']}>
                  <p className={styles['project-info-title']}>기술 스택</p>
                  <p className={styles['project-info-content']}>Next.js, TypeScript, Vercel</p>
                </li>
              </div>
            </ul>
          </div>
          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>소개</h1>
            <div className={styles['page-element']}>
              <a href="/img/portfolio/portfolio-capture1.png" target="_blank" rel="noreferrer">
                <Image
                  className={`${styles['project-capture']} ${styles['last-capture']}`}
                  src="/img/portfolio/portfolio-capture1.png"
                  width={1300}
                  height={650}
                  alt="projectCapture"
                />
              </a>
              <p className={styles['description-title']}>Next.js 도입</p>
              <div className={styles['description']}>
                <p>
                  SSR 및 Next.js 학습을 위해 Next.js 13을 활용해 프로젝트를 진행했습니다. CSR, SSR
                  및 Next.js의 App Router 기반 렌더링 전략과 아키텍처에 대한 분석 및 학습을
                  진행했고, Route Groups, next/link, next/image, next/font 등의 기능들을
                  사용했습니다.
                </p>
              </div>
              <div className={styles['blog-link-container']}>
                <a
                  href="https://zonbin.notion.site/CSR-SSR-Next-js-8e8c2847bc974fe49e3b8f74db347aa7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['blog-link-text']}
                >
                  블로그 글: CSR과 SSR 그리고, Next.js의 렌더링 방식과 아키텍처
                </a>
                <HiOutlineArrowLongRight className={styles['blog-arrow-icon']} />
              </div>
            </div>
            <div className={styles['page-element']}>
              <div className={styles['page-element-vertical-1']}>
                <Image
                  className={styles['project-capture-vertical-1']}
                  src="/img/portfolio/portfolio-capture2.png"
                  width={350}
                  height={750}
                  alt="projectCapture"
                />
                <Image
                  className={styles['project-capture-vertical-2']}
                  src="/img/portfolio/portfolio-capture3.png"
                  width={961}
                  height={640}
                  alt="projectCapture"
                />
              </div>

              <p className={styles['description-title']}>반응형 웹 구현</p>
              <div className={styles['description']}>
                <p>
                  데스크탑, 태블릿, 모바일 등 모든 기기에 최적화된 반응형 웹 디자인을
                  구현하였습니다.
                </p>
              </div>
            </div>
            <div className={styles['page-element']}>
              <a href="/img/portfolio/portfolio-capture4.png" target="_blank" rel="noreferrer">
                <Image
                  className={`${styles['project-capture']} ${styles['last-capture']}`}
                  src="/img/portfolio/portfolio-capture4.png"
                  width={1300}
                  height={650}
                  alt="projectCapture"
                />
              </a>
              <p className={styles['description-title']}>이메일 전송 기능 구현</p>
              <div className={styles['description']}>
                <p>
                  주로 정적인 웹사이트 구조를 유지하면서도, Email.js 라이브러리를 활용하여 동적인
                  이메일 전송 기능을 구현했습니다. 이를 통해 사용자는 웹사이트 내에서 직접 이메일을
                  보낼 수 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>기타</h1>
            <div className={styles['extra-element']}>
              <p className={styles['description-title']}>Deployment</p>
              <div className={styles['description']}>
                <p>Vercel을 활용하여 정적 웹 사이트 호스팅을 구성하였습니다.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
