import styles from './page.module.css';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import Image from 'next/image';

export default function Page() {
  return (
    <main className={styles['container']}>
      <div className={styles['top-section-container']}>
        <section className={styles['top-section']}>
          <div className={styles['top-content-container']}>
            <div className={styles['logo']}>
              <span className={styles['logo-text']}>MOVIE&nbsp;</span>
              <span className={styles['logo-text']}>LOG</span>
            </div>
            {/* <h1 className={styles['logo']}>MOVIE LOG</h1> */}
            <p className={styles['top-content-text']}>
              영화를 좋아하는 팀원들과 함께, 영화에 대한 흥미를 바탕으로 제작한 영화 리뷰 및 정보
              제공 웹사이트입니다. 주요 기능으로는 영화의 별점, 줄거리, 예고편 링크 등의 정보를
              제공하며, 로그인 후 리뷰와 별점, 태그를 포함해 사용자가 영화 평가에 참여할 수
              있습니다.
            </p>
            <div className={styles['project-links']}>
              <div className={styles['project-link-container']}>
                <a
                  className={styles['project-link']}
                  href="http://code-main-24.s3-website.ap-northeast-2.amazonaws.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website(예산 문제로 백엔드 서버 폐쇄)
                </a>
                <HiOutlineArrowLongRight className={styles['arrow']} />
              </div>
              <div className={styles['project-link-container']}>
                <a
                  className={styles['project-link']}
                  href="https://github.com/dongbin420/seb44_main_024"
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
                  <p className={styles['project-info-content']}>2023/06 ~ 2023/07</p>
                </li>
                <li className={styles['project-info']}>
                  <p className={styles['project-info-title']}>역할</p>
                  <p className={styles['project-info-content']}>
                    기획, FE(영화 상세 페이지, 검색 페이지), CI/CD, Deployment
                  </p>
                </li>
              </div>
              <div className={styles['project-infos']}>
                <li className={styles['project-info']}>
                  <p className={styles['project-info-title']}>팀 / 솔로</p>
                  <p className={styles['project-info-content']}>팀(FE & BE)</p>
                </li>
                <li className={styles['project-info']}>
                  <p className={styles['project-info-title']}>기술 스택</p>
                  <p className={styles['project-info-content']}>
                    React, TypeScript, Tailwind, Redux Toolkit, Github Actions, AWS S3
                  </p>
                </li>
              </div>
            </ul>
          </div>
          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>영화 상세 페이지</h1>
            <div className={styles['page-element']}>
              <Image
                className={styles['project-capture']}
                src="/img/movielog/movielog-capture1.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <Image
                className={styles['project-capture']}
                src="/img/movielog/movielog-capture2.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/movielog/movielog-capture3.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['description-title']}>디테일한 영화 정보 제공</p>
              <ul className={styles['description']}>
                <li>
                  백엔드 데이터베이스에 저장된 모든 영화의 영화 ID, 영화 제목, 영화 줄거리, 장르,
                  런타임, 그리고 영화 포스터 등과 같은 데이터를 이용해 유저에게 영화 관련 다양한
                  정보를 제공할 수 있도록 했습니다.
                </li>
                <li>
                  다양한 컴포넌트에서 사용되는 영화 데이터를 props drilling을 피하기 위해 Redux
                  Toolkit을 활용해 전역 상태로 관리했습니다.
                </li>
              </ul>
            </div>
            <div className={styles['page-element']}>
              <Image
                className={styles['project-capture']}
                src="/img/movielog/movielog-capture4.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/movielog/movielog-capture5.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['description-title']}>
                자유로운 영화 평가를 위한 리뷰 작성 기능 구현
              </p>
              <div className={styles['description']}>
                <p>
                  유저는 로그인 후 0.5점 단위의 세밀한 별점 평가와, 음악, 힐링, 킬링타임 등 흥미로운
                  태그를 선택하여 리뷰를 작성, 수정, 삭제, 열람할 수 있습니다. 해당 별점과 태그는
                  웹사이트 전반에 걸쳐 영화의 평점 계산과 태그 필터링에 사용될 수 있도록
                  설계했습니다.
                </p>
              </div>
            </div>
            <div className={styles['page-element']}>
              <Image
                className={styles['project-capture']}
                src="/img/movielog/movielog-capture6.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/movielog/movielog-capture7.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['description-title']}>페이지네이션 기능 구현</p>
              <div className={styles['description']}>
                <p>
                  효과적인 리뷰 열람에 도움이 되는, 한 페이지당 5개의 리뷰를 보여주는 페이지네이션
                  기능을 구현했습니다.
                </p>
              </div>
              <div className={styles['blog-link-container']}>
                <a
                  href="https://zonbin.notion.site/c108f169fe014408a2c1ad3f465cd557?pvs=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['blog-link-text']}
                >
                  블로그 글: 영화 리뷰 페이지네이션으로 처리하기
                </a>
                <HiOutlineArrowLongRight className={styles['blog-arrow-icon']} />
              </div>
            </div>
          </div>
          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>검색 페이지</h1>
            <div className={styles['page-element']}>
              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/movielog/movielog-capture8.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['description-title']}>
                쿼리 파라미터를 이용한 영화 검색 기능 구현
              </p>
              <ul className={styles['description']}>
                <li>
                  사용자 테스트에서 영화 탐색이 제한적이라는 피드백을 반영하여, 유저가 검색한 내용과
                  가장 관련있는 20개의 영화를 보여주는 검색 기능을 구현했습니다. 유저는 영화 제목,
                  배우 이름, 감독 이름으로도 검색을 수행할 수 있습니다.
                </li>
                <li>
                  사용자가 입력한 검색어를 쿼리 파라미터로 구성해 서버로 전송하고, 해당 키워드와
                  가장 관련성 높은 20개의 영화 데이터를 받아와 보여주는 검색 페이지를 구현했습니다.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>기타</h1>
            <div className={styles['extra-element']}>
              <p className={styles['description-title']}>타입스크립트</p>
              <div className={styles['description']}>
                <p>
                  타입스크립트를 활용하여 백엔드 서버로부터 수신한 영화 데이터의 타입을 미리
                  명시함으로써, 런타임 이전에 컴파일 시점에서 예상치 못한 데이터 유형의 문제를
                  사전에 방지할 수 있도록 하였습니다.
                </p>
              </div>
              <div className={styles['blog-link-container']}>
                <a
                  href="https://zonbin.notion.site/be6f964a61f64643a5369da8c322b8d3?pvs=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['blog-link-text']}
                >
                  블로그 글: 타입스크립트 기본개념 학습하기
                </a>
                <HiOutlineArrowLongRight className={styles['blog-arrow-icon']} />
              </div>
            </div>
            <div className={styles['extra-element']}>
              <p className={styles['description-title']}>CI/CD & Deployment</p>
              <ul className={styles['description']}>
                <li>AWS S3를 활용하여 정적 웹 사이트 호스팅을 구성하였습니다.</li>
                <li>Github Actions를 이용하여 CI/CD 파이프라인을 구축하였습니다.</li>
              </ul>
              <div className={styles['blog-link-container']}>
                <a
                  href="https://zonbin.notion.site/github-actions-9ec6ab0c7bda4f7f8ab274d594988619?pvs=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['blog-link-text']}
                >
                  블로그 글: github actions으로 프로젝트 자동배포하기
                </a>
                <HiOutlineArrowLongRight className={styles['blog-arrow-icon']} />
              </div>
            </div>
            <div>
              <p className={styles['description-title']}>프로젝트 회고</p>
              <div className={styles['blog-link-container']}>
                <a
                  href="https://zonbin.notion.site/bec690a507a0454ab66686a5243c5460?pvs=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['blog-link-text']}
                >
                  블로그 글: 메인프로젝트 회고
                </a>
                <HiOutlineArrowLongRight className={styles['blog-arrow-icon']} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
