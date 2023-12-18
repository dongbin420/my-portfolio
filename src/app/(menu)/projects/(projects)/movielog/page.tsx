import styles from './page.module.css';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import Image from 'next/image';

export default function Page() {
  return (
    <main className={styles['container']}>
      <div className={styles['top-section-container']}>
        <section className={styles['top-section']}>
          <div className={styles['top-content-container']}>
            <h1 className={styles['logo']}>MOVIE LOG</h1>
            <p className={styles['top-content-text']}>
              MOVIELOG는 영화 리뷰 웹사이트 프로젝트입니다. 영화를 좋아하는
              팀원들끼리 모여 시중에 있는 다양한 영화 리뷰 플랫폼에서 영감을
              받아, 사용자들이 원하는 영화를 찾고, 정보를 얻으며, 자유롭게
              의견을 나눌 수 있는 웹사이트를 제작했습니다.
            </p>
            <div className={styles['project-links']}>
              <div className={styles['project-link-container']}>
                <a
                  className={styles['project-link']}
                  href="http://code-main-24.s3-website.ap-northeast-2.amazonaws.com/"
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
                  href="https://github.com/codestates-seb/seb44_main_024"
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
                  <p className={styles['project-info-content']}>
                    2023/06 ~ 2023/07
                  </p>
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
                    React, TypeScript, Tailwind, Redux Toolkit, Github Actions,
                    AWS S3
                  </p>
                </li>
              </div>
            </ul>
          </div>
          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>영화 상세 페이지</h1>
            <div className={styles['detail-1']}>
              <Image
                className={styles['project-capture']}
                src="/img/movielog/project-capture1.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <Image
                className={styles['project-capture']}
                src="/img/movielog/project-capture2.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/movielog/project-capture3.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['description-title']}>
                Redux Toolkit을 활용한 상태 관리
              </p>
              <div className={styles['description']}>
                <p>
                  개별 영화의 상세 페이지를 구성하기 위해 필요한 정보인 영화 ID,
                  영화 제목, 영화 줄거리, 장르, 런타임, 그리고 영화 포스터 등과
                  같은 데이터를 백엔드 서버에서 받아와 Redux Toolkit을 이용하여
                  전역 상태로 관리했습니다.
                </p>
                <p>
                  Redux Toolkit을 이용한 전역 상태를 활용한 주요 이유는, 상세
                  페이지를 형성하는 여러 하위 컴포넌트에 데이터를 전달할 때
                  발생하는 Props Drilling이 프로젝트의 유지 보수 및 가독성 등에
                  부정적인 영향을 미칠 수 있다는 인식에서 비롯되었습니다.
                </p>
                <p>
                  전역 상태를 활용함으로써 동일한 상태를 여러 컴포넌트에서
                  공유하고 활용할 수 있어 프로젝트의 복잡성을 감소시키고
                  효율적인 상태 관리를 할 수 있었습니다.
                </p>
              </div>
            </div>
            <div className={styles['detail-2']}>
              <Image
                className={styles['project-capture']}
                src="/img/movielog/project-capture4.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/movielog/project-capture5.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['description-title']}>리뷰 기능 구현</p>
              <div className={styles['description']}>
                <p>
                  별점 및 태그 선택이 가능한 리뷰 CRUD 기능을 구현하였습니다.
                </p>
                <p>
                  리뷰 작성 시 사용되는 리뷰 작성 모달은 공통 컴포넌트로
                  제작되어, 코드의 재사용성을 높였습니다.
                </p>
                <p>
                  프로젝트 기획 초기에 해당 모달이 여러 페이지에서 동일한 기능을
                  수행하되 다양한 데이터로 구성될 가능성이 고려되었습니다.
                  이로써 공통 컴포넌트의 제작은 코드의 일관성을 유지하고, 수정
                  및 업데이트가 용이하도록 만들었습니다.
                </p>
                <p>
                  이 공통 컴포넌트 모달은 새로운 페이지에 리뷰 작성 및 수정
                  기능을 추가할 때 유연성을 제공하여 효율적으로 활용하는데
                  도움이 되었습니다.
                </p>
              </div>
            </div>
            <div className={styles['detail-3']}>
              <Image
                className={styles['project-capture']}
                src="/img/movielog/project-capture6.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/movielog/project-capture7.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['description-title']}>페이지네이션 구현</p>
              <div className={styles['description']}>
                <p>
                  리뷰를 효과적으로 열람할 수 있도록 한 페이지당 5개의 리뷰를
                  보여주는 페이지네이션 기능을 구현했습니다.
                </p>
                <p>
                  이 리뷰열람 기능을 위해 무한 스크롤이 아닌 페이지네이션을
                  구현하게된 이유는, 리뷰에 있어서는 모든 리뷰를 열람하고 싶은
                  유저도 있을 것이고 아닌 유저도 있을 것이기에 무한 스크롤보다는
                  유저에게 선택권을 주어 다음 리뷰 목록을 유저가 직접 클릭해서
                  볼 수 있는 페이지네이션이 더 적절하다고 생각했기에
                  페이지네이션을 선택하여 구현하게 되었습니다.
                </p>
                <p>
                  페이지네이션 기능을 구현하기 위해 필요한 데이터인 현재 페이지
                  번호, 각 페이지당 제한 리뷰 수, 총 리뷰 수, 총 페이지 수 등과
                  관련된 비즈니스 로직을 개발하여 이 기능을 완성했습니다.
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
                <HiOutlineArrowLongRight
                  className={styles['blog-arrow-icon']}
                />
              </div>
            </div>
          </div>
          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>검색 페이지</h1>
            <div className={styles['search-1']}>
              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/movielog/project-capture8.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['description-title']}>검색 기능 구현</p>
              <div className={styles['description']}>
                <p>
                  검색 시, 사용자가 검색한 내용과 가장 관련있는 20개의 영화를
                  보여주는 검색 페이지를 구현하였습니다.
                </p>
                <p>
                  사용자는 영화 제목, 배우 이름, 감독 이름으로 검색을 수행할 수
                  있습니다.
                </p>
                <p>
                  유저가 입력한 검색 키워드 수집을 위해 검색 링크를 검색
                  데이터로 이루어진 쿼리 파라미터로 구성하고 해당 키워드를
                  서버로 전송하면 서버에서는 구현된 비즈니스 로직을 통해 처리된
                  결과 데이터를 보내줍니다. 이후, 받아온 결과 데이터를 기반으로
                  검색 페이지를 동적으로 구성하였습니다.
                </p>
              </div>
            </div>
          </div>
          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>기타</h1>
            <div className={styles['extra-1']}>
              <p className={styles['description-title']}>타입스크립트</p>
              <div className={styles['description']}>
                <p>
                  타입스크립트를 활용하여 백엔드 서버로부터 수신한 영화 데이터의
                  타입을 미리 명시함으로써, 런타임 이전에 컴파일 시점에서 예상치
                  못한 데이터 유형의 문제를 사전에 방지할 수 있도록 하였습니다.
                </p>
                <p>
                  또한, 타입스크립트를 도입함으로써 코드에서 데이터의 타입을
                  명시적으로 확인하기 쉬워졌습니다. 이를 통해 코드 자체만으로도
                  데이터 유형에 대한 더 많은 정보를 쉽게 파악할 수 있게
                  되었습니다. 이러한 접근은 코드에 대한 추가적인 정보 제공을
                  하는 역할을 하며 유지보수 및 리팩토링 작업에 많은 도움이 될 수
                  있었습니다.
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
                <HiOutlineArrowLongRight
                  className={styles['blog-arrow-icon']}
                />
              </div>
            </div>
            <div className={styles['extra-2']}>
              <p className={styles['description-title']}>반응형 웹 구현</p>
              <p className={styles['description']}>
                미디어쿼리를 이용하여 작은 화면에도 대응하는 반응형 웹 디자인을
                구현하였습니다.
              </p>
            </div>
            <div className={styles['extra-3']}>
              <p className={styles['description-title']}>CI/CD & Deployment</p>
              <div className={styles['description']}>
                <p>AWS S3를 활용하여 정적 웹 사이트 호스팅을 구성하였습니다.</p>
                <p>
                  Github Actions를 이용하여 CI/CD 파이프라인을 구축하였습니다.
                  이를 통해 코드 통합 및 배포 과정의 자동화와 효율성을 증가시킬
                  수 있었습니다.
                </p>
              </div>
              <div className={styles['blog-link-container']}>
                <a
                  href="https://zonbin.notion.site/github-actions-9ec6ab0c7bda4f7f8ab274d594988619?pvs=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['blog-link-text']}
                >
                  블로그 글: github actions으로 프로젝트 자동배포하기
                </a>
                <HiOutlineArrowLongRight
                  className={styles['blog-arrow-icon']}
                />
              </div>
            </div>
            <div className={styles['extra-4']}>
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
                <HiOutlineArrowLongRight
                  className={styles['blog-arrow-icon']}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
