import styles from './page.module.css';
import Image from 'next/image';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

export default function Page() {
  return (
    <main className={styles['container']}>
      <div className={styles['top-section-container']}>
        <section className={styles['top-section']}>
          <div className={styles['top-content-container']}>
            <Image
              className={styles['logo-img']}
              src="/img/stackoverflow.svg"
              width={500}
              height={100}
              priority={true}
              alt="projectLogo"
            />
            <p className={styles['top-content-text']}>
              개발자 커뮤니티 Stack overflow를 클론코딩한 팀 프로젝트입니다.
              실제 웹 서비스를 벤치마킹하여 다른 방식으로 재해석하고 개발하는
              연습을 통해 실제 상용 서비스 개발 경험을 쌓는 데 도움이 되었던
              프로젝트입니다.
            </p>
            <div className={styles['project-links']}>
              <div className={styles['project-link-container']}>
                <a
                  className={styles['project-link']}
                  href="https://lucent-gelato-d1cbf6.netlify.app"
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
                  href="https://github.com/dongbin420/stackoverflow-clone"
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
                    2023/06 (약 2주)
                  </p>
                </li>
                <li className={styles['project-info']}>
                  <p className={styles['project-info-title']}>역할</p>
                  <p className={styles['project-info-content']}>
                    기획, FE(질문 작성 페이지, 질문 상세 페이지), Deployment
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
                    React, Tailwind, Recoil, Netlify
                  </p>
                </li>
              </div>
            </ul>
          </div>
          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>질문 작성 페이지</h1>
            <div className={styles['page-element']}>
              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/stackoverflow/stackoverflow-capture1.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['description-title']}>
                TipTap 라이브러리를 이용한 웹 에디터 구현
              </p>
              <div className={styles['description']}>
                <p>
                  질문 생성시 웹 에디터 라이브러리인 TipTap을 이용해 다양한
                  서식, 스타일, 레이아웃 등의 요소를 적용할 수 있도록
                  구현했습니다.
                </p>
                <p>
                  해당 웹 에디터를 공통 컴포넌트로 제작하여, 질문
                  상세페이지에서도 질문 수정, 답변 등록, 답변 수정에 이용할 수
                  있도록 구현하였습니다.
                </p>
              </div>
            </div>
            <div>
              <Image
                className={styles['project-capture']}
                src="/img/stackoverflow/stackoverflow-capture2.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/stackoverflow/stackoverflow-capture3.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['description-title']}>질문 태그 구현</p>
              <div className={styles['description']}>
                <p>
                  질문 작성 시, 질문과 관련된 프로그래밍 언어 및 기술 등의
                  태그를 달 수 있는 기능을 구현했습니다.
                </p>
                <p>
                  이러한 태그 데이터는 질문을 태그별로 분류하여 질문을
                  검색하거나, 태그별로 정리된 목록을 확인하는 등 다양한 기능에
                  활용할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>질문 상세 페이지</h1>
            <div className={styles['page-element']}>
              <Image
                className={`${styles['project-capture']}`}
                src="/img/stackoverflow/stackoverflow-capture4.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/stackoverflow/stackoverflow-capture5.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['description-title']}>
                Recoil을 활용한 상태 관리
              </p>
              <div className={styles['description']}>
                <p>
                  각 질문의 상세 페이지를 구성하기 위해 필요한 정보인 질문 ID,
                  답변 데이터, 댓글 데이터 등과 같은 데이터를 백엔드 서버에서
                  받아와 Recoil을 이용하여 전역상태로 관리했습니다.
                </p>
                <p>
                  전역 상태를 활용함으로써 동일한 상태를 여러 컴포넌트에서
                  공유하고 활용할 수 있어 프로젝트의 복잡성을 감소시키고
                  효율적인 상태 관리를 할 수 있었습니다.
                </p>
              </div>
            </div>
            <div className={styles['page-element']}>
              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/stackoverflow/stackoverflow-video.gif"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['description-title']}>
                질문, 답변, 댓글 crud 구현
              </p>
              <div className={styles['description']}>
                <p>질문, 답변, 댓글의 CRUD 기능을 구현하였습니다.</p>
                <p>
                  질문 및 답변의 등록 및 수정 기능에는 웹 에디터를 이용하여
                  다양한 서식, 스타일, 레이아웃 등의 요소를 적용할 수 있습니다.
                </p>
              </div>
            </div>
            <div>
              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/stackoverflow/stackoverflow-capture6.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['description-title']}>
                CSS Grid를 이용한 레이아웃 구성
              </p>
              <div className={styles['description']}>
                <p>
                  CSS Grid를 활용하여 질문 및 답변 컴포넌트들의 레이아웃
                  디자인에 적용했습니다.
                </p>
                <p>
                  이전에는 주로 Flex를 사용해왔지만, 위와 같은 디자인의 질문 및
                  답변 레이아웃에는 Grid가 더 적합하다고 판단하여 해당 디자인에
                  최적화된 구현을 선택하였습니다.
                </p>
              </div>
            </div>
          </div>
          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>기타</h1>
            <div className={styles['extra-element']}>
              <p className={styles['description-title']}>Deployment</p>
              <div className={styles['description']}>
                <p>
                  Netlify를 활용하여 정적 웹 사이트 호스팅을 구성하였습니다.
                </p>
              </div>
            </div>
            <div>
              <p className={styles['description-title']}>프로젝트 회고</p>
              <div className={styles['blog-link-container']}>
                <a
                  href="https://zonbin.notion.site/fe85020f2a9a405ca4e735cf6ee68128?pvs=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['blog-link-text']}
                >
                  블로그 글: 첫 팀 프로젝트 회고
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
