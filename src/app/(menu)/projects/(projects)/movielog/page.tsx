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
                  href="https://github.com/dongbin420/seb44_main_024"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <HiOutlineArrowLongRight className={styles['arrow']} />
              </div>
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
                    FE 개발(영화 상세 페이지, 검색 페이지), CD 및 배포 담당, 기획·디자인 참여
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
              <a href="/img/movielog/movielog-capture1.png" target="_blank" rel="noreferrer">
                <Image
                  className={styles['project-capture']}
                  src="/img/movielog/movielog-capture1.png"
                  width={1300}
                  height={650}
                  alt="projectCapture"
                />
              </a>
              <a href="/img/movielog/movielog-capture2.png" target="_blank" rel="noreferrer">
                <Image
                  className={styles['project-capture']}
                  src="/img/movielog/movielog-capture2.png"
                  width={1300}
                  height={650}
                  alt="projectCapture"
                />
              </a>

              <p className={styles['description-title']}>디테일한 영화 정보 제공</p>
              <ul className={styles['description']}>
                <li>
                  경로 파라미터로 전달된 영화 ID를 추출해 API를 호출하고, 해당 ID에 맞는 영화
                  데이터를 동적으로 렌더링했습니다.
                </li>
                <li>
                  영화 데이터에 포함된 영화 제목, 영화 줄거리, 장르, 런타임 그리고 영화 포스터 등을
                  사용자 친화적인 UI로 구현해 다양한 정보를 직관적으로 제공했습니다.
                  {/* 영화 데이터에는 영화 제목, 영화 줄거리, 장르, 런타임 그리고 영화 포스터 등이
                  포함되어 유저에게 영화 관련 다양한 정보를 제공합니다. */}
                </li>
                <li>
                  props drilling을 피하기 위해, 다양한 컴포넌트에서 사용되는 영화 데이터를 Redux
                  Toolkit을 활용해 전역 상태로 관리했습니다.
                </li>
              </ul>
            </div>
            <div className={styles['page-element']}>
              <a href="/img/movielog/movielog-capture4.png" target="_blank" rel="noreferrer">
                <Image
                  className={styles['project-capture']}
                  src="/img/movielog/movielog-capture4.png"
                  width={1300}
                  height={650}
                  alt="projectCapture"
                />
              </a>
              <a href="/img/movielog/movielog-capture5.png" target="_blank" rel="noreferrer">
                <Image
                  className={`${styles['project-capture']} ${styles['last-capture']}`}
                  src="/img/movielog/movielog-capture5.png"
                  width={1300}
                  height={650}
                  alt="projectCapture"
                />
              </a>
              <p className={styles['description-title']}>
                자유로운 영화 평가를 위한 리뷰 작성 기능 구현
              </p>
              <ul className={styles['description']}>
                <li>
                  유저는 로그인 후 0.5점 단위의 세밀한 별점 평가와, 음악, 힐링, 킬링타임 등 흥미로운
                  태그를 선택하여 리뷰를 작성, 수정, 삭제, 열람할 수 있습니다.
                </li>
                <li>
                  리뷰 모달 컴포넌트는 마이페이지에서 리뷰 수정 시에 재사용될 수 있도록 설계
                  했습니다.
                </li>
              </ul>
            </div>
            <div className={styles['page-element']}>
              <a href="/img/movielog/movielog-capture7.png" target="_blank" rel="noreferrer">
                <Image
                  className={`${styles['project-capture']} ${styles['last-capture']}`}
                  src="/img/movielog/movielog-capture7.png"
                  width={1300}
                  height={650}
                  alt="projectCapture"
                />
              </a>
              <p className={styles['description-title']}>페이지네이션 기능 구현</p>

              <ul className={styles['description']}>
                <li>한 페이지당 5개의 리뷰를 보여주는 페이지네이션 기능을 구현했습니다.</li>
                <li>
                  리뷰는 페이지의 메인 콘텐츠가 아니며, 사용자는 소수의 리뷰만으로 전체 흐름을
                  파악하는 경향이 있다고 판단했습니다. 따라서, 무한 스크롤보다는 유저에게 추가
                  열람에 대한 선택권을 주는 페이지네이션 방식을 선택했습니다.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>검색 페이지</h1>
            <div className={styles['page-element']}>
              <a href="/img/movielog/movielog-capture8.png" target="_blank" rel="noreferrer">
                <Image
                  className={`${styles['project-capture']} ${styles['last-capture']}`}
                  src="/img/movielog/movielog-capture8.png"
                  width={1300}
                  height={650}
                  alt="projectCapture"
                />
              </a>
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
              <p className={styles['description-title']}>CD & Deployment</p>
              <ul className={styles['description']}>
                <li>AWS S3를 활용하여 정적 웹 사이트 호스팅을 구성하였습니다.</li>
                <li>Github Actions를 이용하여 CD 파이프라인을 구축하였습니다.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
