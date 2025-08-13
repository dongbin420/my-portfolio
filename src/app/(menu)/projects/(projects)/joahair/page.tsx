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
            <div className={`${styles['logo']}`}>
              <span className={styles['logo-text']}>JOA&nbsp;</span>
              <span className={styles['logo-text']}>HAIR</span>
            </div>
            {/* <h1 className={styles['logo']}>MOVIE LOG</h1> */}
            <p className={styles['top-content-text']}>
              클라이언트의 의뢰를 받아, 실제 운영 중인 헤어살롱의 브랜드 홍보와 신규 고객 유치를
              목표로 제작한 헤어살롱 마케팅 웹사이트입니다. 클라이언트의 요구사항을 분석하고, 이에
              맞춰 프로젝트를 기획하고 개발하며, 실무 능력을 향상시켰습니다. 주요 기능으로,
              Instagram 계정의 실시간 게시물 전시, 캐러셀, 아코디언, 그리드 등 인터랙티브한 컴포넌트
              등이 포함되어 있습니다.
            </p>
            <div className={styles['project-links']}>
              <div className={styles['project-link-container']}>
                <a
                  className={styles['project-link']}
                  href="https://joahair.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Production(실제 서비스)
                </a>
                <HiOutlineArrowLongRight className={styles['arrow']} />
              </div>
              <div className={styles['project-link-container']}>
                <a
                  className={styles['project-link']}
                  href="https://joa-hair-showcase.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Development(학습 및 연구용)
                </a>
                <HiOutlineArrowLongRight className={styles['arrow']} />
              </div>
              <div className={styles['project-link-container']}>
                <a
                  className={styles['project-link']}
                  href="https://github.com/dongbin420/joa-hair-showcase"
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
                  <p className={styles['project-info-content']}>2024/05 ~ 운영 중</p>
                </li>
                <li className={styles['project-info']}>
                  <p className={styles['project-info-title']}>역할</p>
                  <p className={styles['project-info-content']}>
                    FE 개발 & 기획·디자인·BE(서버리스)·인프라 등 전 과정 경험
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
                    React, TypeScript, webpack, Babel, styled-components, TanStack Query, Storybook,
                    GitHub Actions, AWS(S3, CloudFront, Route 53), Firebase(Firestore, Cloud
                    Functions)
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
            <h1 id="joahair-ui-ux" className={styles['page-title']}>
              사용자 중심의 UI/UX 개선
            </h1>
            <div className={styles['page-element']}>
              <p className={styles['description-title']}>
                Google Analytics을 통한 사용자 분석 및 개선
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
              <ul className={`${styles['description']} ${styles['bullet']}`}>
                <li>
                  서비스 사용자의 약 95%가 호주에 집중된 상황을 인식했습니다. 따라서, AWS 인프라와
                  Firebase 리전을 호주로 설정하고, CDN(AWS CloudFront)을 구성하여 글로벌 서비스의
                  로딩 속도를 최적화했습니다.
                </li>
                <li>
                  모바일 사용자가 약 85%임을 감안하여 모든 디바이스에 대응하는 100% 반응형 웹을
                  구현했습니다.
                </li>
              </ul>
            </div>
            <div className={styles['page-element']}>
              <p className={styles['description-title']}>
                전반적인 GA 사용자 데이터의 개선을 위한 UI/UX 개선 작업
              </p>
              <ul className={`${styles['description']} ${styles['bullet']}`}>
                <li>
                  비즈니스 및 웹사이트 성격에 어울리는 미적 디자인 및 색 적용(보기에 좋고, 화려한
                  색감) 및 직관적이고 심플한 웹사이트 메뉴 및 UI 구성
                </li>
                <li>
                  사용성(자연스럽고, 직관적인)을 고려한 캐러셀, 아코디언, 그리드, 헤더 오버레이 등
                  인터랙티브한 컴포넌트들 구현
                </li>
                <li>디자인 시스템(스페이싱, 색, 배치 등)을 적용해 웹사이트 디자인의 일관성 향상</li>
                <li>성능 개선(이미지, webpack, 리액트)</li>
                <li>
                  그 외
                  <ul>
                    <li className={styles['small-bullet']}>
                      인스타그램 게시물 로딩 중일 때, 사용자가 추가 로드 버튼을 누르면 요청을
                      방지함으로써 버그를 예방
                    </li>
                    <li className={styles['small-bullet']}>
                      애니메이션 구현(transition, keyframes)
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className={styles['page-element']}>
              <p className={styles['description-title']}>성과</p>
              <Image
                className={styles['project-capture']}
                src="/img/joahair/users.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/joahair/getUser.png"
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

              <ul className={`${styles['description']} ${styles['bullet']}`}>
                <li>고유 방문자 수 7700+명(25/08/12 기준)</li>
                <li>검색 엔진 총 노출 수 44800+회(25/08/12 기준)</li>
                <li>평균 참여 시간 30초 -{'>'} 55초</li>
                <li>
                  SEO 향상
                  <ul>
                    <li className={styles['small-bullet']}>
                      최근 3달 동안, 사용자 획득의 전체 2,140건 중, 직접 검색(Organic Search)이
                      1,036로 가장 높음(전체의 48.41%)
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>Compound 패턴을 활용한 UI 컴포넌트 설계</h1>
            <div className={styles['page-element']}>
              <Image
                className={styles['project-capture']}
                src="/img/joahair/Accordion.png"
                width={1100}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['preload-text']}>
                Compound 패턴을 적용한 Accordion 컴포넌트의 실제 프로젝트 내 사용 예시
              </p>

              <ul className={`${styles['description']} ${styles['bullet']}`}>
                <li>
                  아코디언, 캐러셀 등 단순하지 않은 컴포넌트를 처음으로 구현해야하는 상황에서,
                  컴포넌트 내 복잡한 상호작용을 구현하는 데에 어려움을 느꼈습니다.
                </li>
                <li>
                  조금 더 쉽고, 명확한 방식으로 컴포넌트를 구현하기 위해, 컴포넌트들을 역할별로 여러
                  개로 나누어 컴포넌트의 유연성과 유지보수성을 높이는 Compound 패턴을 도입했습니다.
                </li>

                <li>
                  구현 포인트
                  <ul>
                    <li className={styles['small-bullet']}>
                      ContextAPI를 이용해 모든 컴포넌트에 상태를 공유
                    </li>
                    <li className={styles['small-bullet']}>
                      컴포넌트 설계시 children props를 사용해 구조를 고정적으로 정하지 않음
                    </li>
                    <li className={styles['small-bullet']}>
                      내부 컴포넌트들을 최상위 컴포넌트의 프로퍼티로 등록해, 모든 컴포넌트를 import
                      할 필요 없이 Accordion.Header, Accordion.Body처럼 직관적으로 사용하는 방식
                      적용
                    </li>
                  </ul>
                </li>

                <li>
                  결과
                  <ul>
                    <li className={styles['small-bullet']}>
                      각 컴포넌트들이 하는 일이 명확해짐에 따라 코드 가독성 향상 -{'>'} 유지보수성
                      향상
                    </li>
                    <li className={styles['small-bullet']}>
                      children props 사용으로 구조를 고정하지 않기 때문에 컴포넌트를 다양한 패턴으로
                      재사용할 수 있어 유연성이 높아짐
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>Tanstack Query 마이그레이션</h1>
            <div className={styles['page-element']}>
              <Image
                className={styles['project-capture']}
                src="/img/joahair/rq1.png"
                width={1100}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['preload-text']}>마이그레이션 전 요청 로직</p>
              <Image
                className={styles['project-capture']}
                src="/img/joahair/rq2.png"
                width={1100}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['preload-text']}>마이그레이션 후 요청 로직</p>

              <ul className={`${styles['description']} ${styles['bullet']}`}>
                <li>
                  개발 초기에는 캐싱, 요청 빈도, 로직 복잡성 등을 전혀 고려하지 않은 데이터 요청
                  로직을 사용하고 있었습니다.
                </li>
                <li>
                  따라서, 캐싱을 활용할 수 있고, 요청 빈도를 데이터의 변경 주기를 기반으로 제어할 수
                  있으며, 로직의 복잡성과 코드 수를 줄이는 데 도움이 되는 Tanstack-Query를 학습
                  차원에서 도입하게 되었습니다.
                </li>

                <li>
                  구현 포인트
                  <ul>
                    <li className={styles['small-bullet']}>
                      메인페이지의 정적인 인스타그램 포스트에 대해서는 useQuery를, 사용자가 load
                      more 버튼을 누를 때 마다, 인스타그램 포스트가 추가되는 갤러리페이지의 동적
                      데이터에 대해서는 useInfiniteQuery 활용
                    </li>
                    <li className={styles['small-bullet']}>
                      서버 측에서 변경될 가능성이 적은 메인페이지의 정적 데이터는 한 세션 내에서
                      재요청이 불필요하다고 판단하여, staleTime을 Infinity로, gcTime은 60분으로 설정
                    </li>
                    <li className={styles['small-bullet']}>
                      자주 변경될 가능성이 높고, 매끄러운 UX를 위해 페이지 재방문마다 재요청이
                      필요한 갤러리페이지의 동적 데이터에 대해서는 staleTime을 0으로, gcTime은
                      5분으로 설정
                    </li>
                  </ul>
                </li>

                <li>
                  결과
                  <ul>
                    <li className={styles['small-bullet']}>
                      Tanstack-Query를 이용한 코드가 기존의 코드보다 더 많은 기능을 하지만, 로직
                      복잡성과, 코드 수가 눈에 띄게 줄어 듦(로딩, 에러 등 상태 수동 제어 불필요)
                    </li>
                    <li className={styles['small-bullet']}>
                      staleTime과 gcTime 조정을 통해, 불필요한 요청을 줄일 수 있게 됨
                    </li>
                    <li className={styles['small-bullet']}>
                      재요청 간, 캐싱되어 있던 이전 데이터 활용을 통해 자연스러운 화면 전환이
                      이루어짐
                    </li>
                  </ul>
                </li>
              </ul>

              <div className={styles['blog-link-container']}>
                <a
                  href="https://zonbin.notion.site/joahair-1b811af6718580308a9df5c2e2232bf2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['blog-link-text']}
                >
                  블로그 글: joahair 프로젝트 리액트 쿼리 마이그레이션 과정
                </a>
                <HiOutlineArrowLongRight className={styles['blog-arrow-icon']} />
              </div>
            </div>
          </div>

          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>웹사이트 성능 최적화</h1>
            <div className={styles['page-element']}>
              <p className={styles['description-title']}>이미지 최적화</p>

              <Image
                className={styles['project-capture']}
                src="/img/joahair/preload1.gif"
                width={1100}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['preload-text']}>이미지 Preload 적용 전</p>

              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/joahair/preload2.gif"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['preload-text']}>이미지 Preload 적용 후</p>
            </div>
            <div className={styles['page-element']}>
              <p className={styles['description-title']}>webpack 최적화</p>

              <Image
                className={`${styles['project-capture']} ${styles['last-capture']} ${styles['dv-img']}`}
                src="/img/joahair/dv-bundle.webp"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['preload-text']}>개발 환경에서의 번들 크기(5.77MB)</p>
              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/joahair/bundle.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['preload-text']}>최적화 후 최종 번들 크기(99.6KB + 27.7KB)</p>
              <ul className={`${styles['description']} ${styles['bullet']}`}>
                <li>
                  Webpack 공식 문서를 기반으로 Code Splitting, Tree Shaking, Minification을
                  학습·적용
                </li>
                <li>CloudFront CDN 압축 설정을 적용해 프로덕션 환경에서 번들 크기를 추가로 축소</li>
              </ul>
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
            <h1 className={styles['page-title']}>디자인 시스템 & 프로젝트 디자인 구축</h1>
            <div className={styles['page-element']}>
              <Image
                className={styles['project-capture']}
                src="/img/joahair/figma1.webp"
                width={1100}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['preload-text']}>디자인 시스템 & 와이어 프레임</p>
              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/joahair/figma2.webp"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['preload-text']}>프로젝트 디자인 프로토타입</p>
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
              <p className={styles['preload-text']}>프로젝트 인프라 구조</p>

              <div className={styles['blog-link-container']}>
                <a
                  href="https://zonbin.notion.site/AWS-Firebase-a51ba04d2bb745259ceee4c8463f550a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['blog-link-text']}
                >
                  블로그 글: AWS 및 Firebase 기반 인프라 구축하기
                </a>
                <HiOutlineArrowLongRight className={styles['blog-arrow-icon']} />
              </div>
            </div>
          </div>

          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>기타</h1>
            <div className={styles['page-element']}>
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
                  href="https://zonbin.notion.site/1b811af6718580f29327df7ac747cb72"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['blog-link-text']}
                >
                  블로그 글: 단일 책임 원칙 기반으로 컴포넌트 리팩토링하기
                </a>
                <HiOutlineArrowLongRight className={styles['blog-arrow-icon']} />
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
        </section>
      </div>
    </main>
  );
}
