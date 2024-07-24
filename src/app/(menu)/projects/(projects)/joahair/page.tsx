import styles from './page.module.css';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import Image from 'next/image';
import ImageCarousel from '@/ui/ImageCarousel/ImageCarousel';
import ImageCarouselContainer from '@/ui/ImageCarousel/ImageCarouselContainer/ImageCarouselContainer';
import ImageCarouselIndicator from '@/ui/ImageCarousel/ImageCarouselIndicator/ImageCarouselIndicator';
import ImageCarouselButton from '@/ui/ImageCarousel/ImageCarouselButton/ImageCarouselButton';
import ImageCarouselInner from '@/ui/ImageCarousel/ImageCarouselInner/ImageCarouselInner';
import ImageCarouselItem from '@/ui/ImageCarousel/ImageCarouselItem/ImageCarouselItem';
import { joahairImgCarouselSrc } from '../../../../../../public/data/data';

export default function Page() {
  return (
    <main className={styles['container']}>
      <div className={styles['top-section-container']}>
        <section className={styles['top-section']}>
          <div className={styles['top-content-container']}>
            <div className={`${styles['logo']} ${styles['joahair-logo']}`}>
              <span className={styles['logo-text']}>JOA&nbsp;</span>
              <span className={styles['logo-text']}>HAIR</span>
            </div>
            {/* <h1 className={styles['logo']}>MOVIE LOG</h1> */}
            <p className={styles['top-content-text']}>
              클라이언트의 의뢰를 받아 헤어살롱의 비즈니스 웹사이트를 제작했습니다. 클라이언트의
              요구사항을 분석하고, 이에 맞춰 프로젝트를 기획하고 실행하며, 실무 능력을
              향상시켰습니다. 실제 사용자들이 주기적으로 방문하는 서비스임에 따라, UI & UX에 많은
              노력을 기울였습니다.
            </p>
            <div className={styles['project-links']}>
              <div className={styles['project-link-container']}>
                <a
                  className={styles['project-link']}
                  href="https://joahair.com/"
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
                  href="https://github.com/dongbin420/joa-hair"
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
                  <p className={styles['project-info-content']}>2024/05 ~ 2024/07</p>
                </li>
                <li className={styles['project-info']}>
                  <p className={styles['project-info-title']}>역할</p>
                  <p className={styles['project-info-content']}>
                    기획, 디자인, FE, BE, CI/CD, Infra 등 전체
                  </p>
                </li>
              </div>
              <div className={styles['project-infos']}>
                <li className={styles['project-info']}>
                  <p className={styles['project-info-title']}>팀 / 솔로</p>
                  <p className={styles['project-info-content']}>솔로</p>
                </li>
                <li className={styles['project-info']}>
                  <p className={styles['project-info-title']}>기술 스택</p>
                  <p className={styles['project-info-content']}>
                    React, TypeScript, webpack, Babel, styled-components, Storybook, Firebase
                    Firestore, Google Cloud Functions, AWS S3, AWS CloudFront, AWS Route 53, GitHub
                    Actions, Google Analytics, Figma
                  </p>
                </li>
              </div>
            </ul>
          </div>
          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>Preview</h1>
            <ImageCarousel total={joahairImgCarouselSrc.length}>
              <ImageCarouselContainer width={'1400px'} height={'750px'}>
                <ImageCarouselIndicator />
                <ImageCarouselInner>
                  <ImageCarouselItem
                    imgSrc={joahairImgCarouselSrc[joahairImgCarouselSrc.length - 1]}
                  />
                  {joahairImgCarouselSrc.map((src, idx) => (
                    <ImageCarouselItem key={idx} imgSrc={src} />
                  ))}
                  <ImageCarouselItem imgSrc={joahairImgCarouselSrc[0]} />
                </ImageCarouselInner>
                <ImageCarouselButton />
              </ImageCarouselContainer>
            </ImageCarousel>
          </div>

          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>사용자 분석을 통한 UX 최적화</h1>
            <div className={styles['page-element']}>
              <p className={styles['description-title']}>
                Google Analytics을 통한 사용자 분석 및 UX 개선
              </p>
              <Image
                className={styles['project-capture']}
                src="/img/joahair/country.png"
                width={1100}
                height={650}
                alt="projectCapture"
              />
              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/joahair/platform.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <div className={styles['description']}>
                <p>
                  Google Analytics를 프로젝트와 연동하고, Google Analytics의 통계 분석을 통해, 약
                  85% 이상의 사용자가 호주에 위치해 있음을 반영하여 AWS 인프라와 Firebase 리전을
                  호주로 설정하고, CDN을 구성하여 S3 버킷 데이터를 캐시해 전달하는 프로세스를
                  구축하여 로딩 속도를 최적화했습니다.
                </p>
                <p>
                  또한, 모바일 사용자가 약 84%임을 감안하여 모든 디바이스에 대응하는 100% 반응형
                  웹을 구현하고, keyframes와 transition을 사용해 여러 애니메이션 효과를
                  구현했습니다.
                </p>
              </div>
            </div>
            <div className={styles['page-element']}>
              <p className={styles['description-title']}>UX 개선을 통한 방문자 및 검색 실적 성과</p>
              <Image
                className={styles['project-capture']}
                src="/img/joahair/users.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/joahair/search.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />

              <div className={styles['description']}>
                <p>
                  위에서 언급했던 것처럼 사용자 분석 및 사용자 피드백을 바탕으로 성능 최적화,
                  애니메이션 효과, 반응형 등을 통한 UX 최적화를 통해 약 한 달 만에 고유 방문자 수
                  600+명(Google Analytics), 검색엔진 노출 1800+번(Google Search Console)의 성과를
                  달성했습니다.
                </p>
              </div>
            </div>
          </div>

          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>디자인 시스템 & 프로젝트 디자인 구축</h1>
            <div className={styles['page-element']}>
              <Image
                className={styles['project-capture']}
                src="/img/joahair/figma1.webp"
                width={1100}
                height={650}
                alt="projectCapture"
              />
              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/joahair/figma2.webp"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <div className={styles['description']}>
                <p>
                  Figma를 사용하여 색상 팔레트, 타이포그래피, 스페이싱 등의 디자인 토큰을 포함한
                  디자인 시스템을 구축하고, 프로젝트 와이어 프레임 및 프로젝트 UI 디자인을 직접
                  설계했습니다.
                </p>
                <p>
                  또한, 디자인 시스템의 재사용 가능한 디자인 토큰을 styled-components의 theming
                  기능에 통합하여 프로젝트 UI의 일관성을 높이고 작업 시간을 단축했습니다.
                </p>
                <p>
                  디자인 과정을 겪어보며, 디자인 업무와 프론트엔드 업무와의 통합에 대한 심층적인
                  인사이트를 얻을 수 있었고, 이를 통해 실무에서 커뮤니케이션에 큰 도움이 될 것이라
                  생각합니다.
                </p>
              </div>
              <div className={styles['blog-link-container']}>
                <a
                  href="https://www.figma.com/design/zIPi2prACN0tdY4ck12TLM/hair-salon-project-(wire-frame-%26-design-system)?node-id=0-1&t=jZe8VYGshcliqJnK-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['blog-link-text']}
                >
                  디자인 시스템 & 와이어 프레임 피그마 Draft
                </a>
                <HiOutlineArrowLongRight className={styles['blog-arrow-icon']} />
              </div>
              <div className={styles['blog-link-container']}>
                <a
                  href="https://www.figma.com/design/LLiRquWABeepRm7nPDZWhY/hair-salon-project-prototype?node-id=0-1&t=B4JhVPHuk2MuxWLL-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['blog-link-text']}
                >
                  프로젝트 UI 디자인 피그마 Draft
                </a>
                <HiOutlineArrowLongRight className={styles['blog-arrow-icon']} />
              </div>
              <div className={styles['blog-link-container']}>
                <a
                  href="https://www.figma.com/design/zIPi2prACN0tdY4ck12TLM/hair-salon-project-(wire-frame-%26-design-system)?node-id=0-1&t=jZe8VYGshcliqJnK-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['blog-link-text']}
                >
                  블로그 글(작성 예정)
                </a>
                <HiOutlineArrowLongRight className={styles['blog-arrow-icon']} />
              </div>
            </div>
          </div>

          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>웹사이트 성능 최적화</h1>
            <div className={styles['page-element']}>
              <p className={styles['description-title']}>이미지 및 폰트 최적화</p>
              <p className={styles['preload-text']}>Preload 적용 전</p>
              <Image
                className={styles['project-capture']}
                src="/img/joahair/preload1.gif"
                width={1100}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['preload-text']}>Preload 적용 후</p>
              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/joahair/preload2.gif"
                width={1300}
                height={650}
                alt="projectCapture"
              />

              <div className={styles['description']}>
                <p>
                  이미지 형식을 WebP로 변경하고, imagemagick을 활용한 해상도 축소와 tinyPNG 사이트를
                  이용한 이미지 압축을 적용하여 이미지 크기를 줄였습니다. 또한,
                  @vue/preload-webpack-plugin을 활용해 preload를 적용하여 핵심 이미지의 초기 렌더링
                  시간을 약 1초에서 0초로 줄여 지연을 제거했습니다.
                </p>
                <p>
                  폰트 또한 preload를 적용해 폰트 로드 지연을 해결하여, FOUT 현상이 길게 일어나는
                  것을 방지했습니다.
                </p>
              </div>
            </div>
            <div className={styles['page-element']}>
              <p className={styles['description-title']}>webpack 최적화</p>
              <p className={styles['preload-text']}>최종 번들 크기(99.6KB + 27.7KB)</p>
              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/joahair/bundle.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <div className={styles['description']}>
                <p>
                  webpack을 활용한 Code Splitting, Tree Shaking, Minification과 CDN 압축을 적용해
                  JavaScript chunk의 크기를 5.77MB(development) -{'>'} 527KB(production) -{'>'}{' '}
                  127.3KB(웹사이트 load)로 줄였습니다.
                </p>
              </div>
            </div>
            <div className={styles['page-element']}>
              <p className={styles['description-title']}>React 최적화</p>

              <div className={styles['description']}>
                <p>
                  React의 useCallback을 활용하여 예기치 않은 함수 재생성에 따른 무한 리렌더링을
                  방지하고, lazy 및 Suspense를 적용하여 각 페이지 로드 시 필요한 리소스 크기를 줄여
                  페이지 로딩 성능을 향상시켰습니다.
                </p>
              </div>

              <div className={styles['blog-link-container']}>
                <a
                  href="https://zonbin.notion.site/dd34cd2b809a4c12854fb9ffa30f660e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['blog-link-text']}
                >
                  블로그 글: 웹사이트 성능 최적화
                </a>
                <HiOutlineArrowLongRight className={styles['blog-arrow-icon']} />
              </div>
            </div>
          </div>

          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>Storybook을 활용한 컴포넌트 개발 & 관리</h1>
            <div className={styles['page-element']}>
              <Image
                className={styles['project-capture']}
                src="/img/joahair/storybook.png"
                width={1100}
                height={650}
                alt="projectCapture"
              />
              <div className={styles['description']}>
                <p>
                  Storybook을 활용하여 UI 컴포넌트를 독립적으로 개발하여, 컴포넌트의 생산성과
                  재사용성을 향상시켰습니다.
                </p>
                <p>
                  Accordion, ImageCarousel, InstagramGrid 등 복잡한 컴포넌트를 재사용 가능하게끔
                  구현하고, Storybook으로 컴포넌트를 관리함으로써 코드의 품질을 높였습니다.
                </p>
                <p>
                  Chromatic을 이용해 Storybook의 UI 문서를 배포했습니다. 이 문서를 통해 컴포넌트에
                  대한 정보를 시각적으로 정리하여 유지보수성과 협업 효율성을 향상시켰습니다.
                </p>
              </div>
              <div className={styles['blog-link-container']}>
                <a
                  href="https://66954a2d20d021b414b40b5e-innammkdsa.chromatic.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['blog-link-text']}
                >
                  Storybook 배포 링크
                </a>
                <HiOutlineArrowLongRight className={styles['blog-arrow-icon']} />
              </div>
              <div className={styles['blog-link-container']}>
                <a
                  href="https://www.figma.com/design/zIPi2prACN0tdY4ck12TLM/hair-salon-project-(wire-frame-%26-design-system)?node-id=0-1&t=jZe8VYGshcliqJnK-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['blog-link-text']}
                >
                  블로그 글(작성 예정)
                </a>
                <HiOutlineArrowLongRight className={styles['blog-arrow-icon']} />
              </div>
            </div>
          </div>

          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>AWS 및 Firebase 기반 인프라 구축</h1>
            <div className={styles['page-element']}>
              <Image
                className={styles['project-capture']}
                src="/img/joahair/infrastructure.webp"
                width={1100}
                height={650}
                alt="projectCapture"
              />
              <div className={styles['description']}>
                <p>
                  AWS S3, CloudFront, Route 53을 사용하여 프론트엔드 웹사이트 인프라를 구축했습니다.
                </p>
                <p>
                  Firebase의 Cloud Functions와 Firestore를 사용하여 백엔드 서버리스 인프라를
                  구축했습니다. 또한, 인스타그램 Display API를 Cloud Functions와 연동하여 데이터를
                  클라이언트에 전달하는 프로세스를 구성했습니다.
                </p>
                <p>
                  클라이언트에서 인스타그램 api 키와 같은 민감한 키들에 대한 노출을 방지하기 위해,
                  간단한 기능임에도 백엔드 인프라를 서버리스로 구성했습니다.
                </p>
                <p>
                  Github Actions 기반의 CI/CD 파이프라인을 구축하여 코드 통합 및 배포 과정의 작업
                  시간을 단축했습니다. 이 프로세스를 통해, Cloudfront의 캐시를 Invalidate 함으로써
                  업데이트된 S3 버킷의 에셋들을 가져오도록 구성했습니다.
                </p>
              </div>
              <div className={styles['blog-link-container']}>
                <a
                  href="https://www.figma.com/design/zIPi2prACN0tdY4ck12TLM/hair-salon-project-(wire-frame-%26-design-system)?node-id=0-1&t=jZe8VYGshcliqJnK-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['blog-link-text']}
                >
                  블로그 글(작성 예정)
                </a>
                <HiOutlineArrowLongRight className={styles['blog-arrow-icon']} />
              </div>
            </div>
          </div>

          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>
              webpack, Babel, TypeScript, ESLint 등 프로젝트 환경 자체 구성
            </h1>
            <div className={styles['page-element']}>
              <div className={styles['description']}>
                <p>
                  많이 사용되는 사전 설정 번들링 툴들인 vite, CRA 등에서 벗어나, webpack, Babel을
                  기반으로 핵심적인 프론트엔드 툴들의 프로젝트 환경 설정을 자체적으로 구성했습니다.
                  이를 통해 웹 배포 이전의 빌드, 번들링, 트랜스파일링 등과 관련된 프로세스에 대한
                  심층적인 이해를 얻었습니다.
                </p>
              </div>
              <div className={styles['blog-link-container']}>
                <a
                  href="https://zonbin.notion.site/webpack-Babel-ts-react-e3b4b987890942a6a933b70d136fac9c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['blog-link-text']}
                >
                  블로그 글: webpack + Babel + ts + react 프로젝트 세팅하기
                </a>
                <HiOutlineArrowLongRight className={styles['blog-arrow-icon']} />
              </div>
            </div>
          </div>

          {/* <div className={styles['page-container']}>
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
            <div>
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
            <div>
              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/movielog/movielog-capture8.png"
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
            <div className={styles['extra-element']}>
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
            <div className={styles['extra-element']}>
              <p className={styles['description-title']}>반응형 웹 구현</p>
              <p className={styles['description']}>
                미디어쿼리를 이용하여 작은 화면에도 대응하는 반응형 웹 디자인을
                구현하였습니다.
              </p>
            </div>
            <div className={styles['extra-element']}>
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
                <HiOutlineArrowLongRight
                  className={styles['blog-arrow-icon']}
                />
              </div>
            </div>
          </div> */}
        </section>
      </div>
    </main>
  );
}
