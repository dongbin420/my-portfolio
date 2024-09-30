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
              맞춰 프로젝트를 기획하고 실행하며, 실무 능력을 향상시켰습니다. 주요 기능으로, 예약
              시스템과의 통합, 헤어살롱 Instagram 계정의 실시간 포스팅 전시 등이 포함되어 있습니다.
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
            <h1 id="joahair-ui-ux" className={styles['page-title']}>
              사용자 분석을 통한 UI/UX 최적화
            </h1>
            <div className={styles['page-element']}>
              <p className={styles['description-title']}>
                Google Analytics을 통한 사용자 분석 및 UI/UX 개선
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
                  Google Analytics의 통계 분석을 통해, 서비스 사용자의 약 95%가 호주에 집중된 상황을
                  인식했습니다. 따라서, AWS 인프라와 Firebase 리전을 호주로 설정하고, CDN을 구성하여
                  CDN 서버에 S3 버킷 데이터를 캐시하는 프로세스를 구축하여 글로벌 서비스의 로딩
                  속도를 최적화했습니다.
                </li>
                <li>
                  모바일 사용자가 약 85%임을 감안하여 모든 디바이스에 대응하는 100% 반응형 웹을
                  구현하고, keyframes와 transition을 사용해 marquee, spin, unfold 등 여러 애니메이션
                  효과를 구현했습니다.
                </li>
              </ul>
            </div>
            <div className={styles['page-element']}>
              <p className={styles['description-title']}>UI/UX 개선을 통한 성과</p>
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
                  사용자 분석 및 사용자 피드백을 바탕으로 성능 최적화, 애니메이션 효과, 반응형 등을
                  통한 UI/UX 최적화를 통해 고유 방문자 수 1700+명, 이탈률 29.9%(Google Analytics),
                  검색엔진 노출 4600+번(Google Search Console) 등의 성과를 달성했습니다.
                </p>
              </div>
            </div>
          </div>

          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>디자인 시스템 & 프로젝트 디자인 구축</h1>
            <div className={styles['page-element']}>
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
            </div>
          </div>

          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>웹사이트 성능 최적화</h1>
            <div className={styles['page-element']}>
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
              <p className={styles['description-title']}>이미지 및 폰트 최적화</p>

              <Image
                className={styles['project-capture']}
                src="/img/joahair/preload1.gif"
                width={1100}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['preload-text']}>Preload 적용 전</p>

              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/joahair/preload2.gif"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['preload-text']}>Preload 적용 후</p>
            </div>
            <div className={styles['page-element']}>
              <p className={styles['description-title']}>webpack 최적화</p>

              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/joahair/bundle.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['preload-text']}>최적화 후 최종 번들 크기(99.6KB + 27.7KB)</p>
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
            </div>
          </div>

          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>Storybook을 활용한 컴포넌트 개발 & 관리</h1>
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
              <Image
                className={styles['project-capture']}
                src="/img/joahair/storybook.png"
                width={1100}
                height={650}
                alt="projectCapture"
              />
              <ul className={styles['description']}>
                <li>
                  Storybook을 도입하여 컴포넌트를 독립적으로 개발하고, 시각적 모양과 동작을
                  문서화했습니다.
                </li>
                <li>
                  특히, 캐러셀, 아코디언과 같이 복잡한 컴포넌트의 개발에, 구성 요소 간 명확한 책임
                  분리를 추구하는 Compound 패턴을 도입해 컴포넌트를 설계했습니다.
                </li>
              </ul>
            </div>
          </div>

          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>AWS 및 Firebase 기반 인프라 구축</h1>
            <div className={styles['page-element']}>
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
              <Image
                className={styles['project-capture']}
                src="/img/joahair/infrastructure.webp"
                width={1100}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['preload-text']}>프로젝트 인프라 구조</p>
            </div>
          </div>

          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>
              webpack, Babel, TypeScript, ESLint 등 프로젝트 환경 자체 구성
            </h1>
            <div className={styles['page-element']}>
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
              <div className={styles['description']}>
                <p>
                  많이 사용되는 사전 설정 번들링 툴들인 vite, CRA 등에서 벗어나, webpack, Babel을
                  기반으로 핵심적인 프론트엔드 툴들의 프로젝트 환경 설정을 자체적으로 구성했습니다.
                  이를 통해 웹 배포 이전의 빌드, 번들링, 트랜스파일링 등과 관련된 프로세스에 대한
                  심층적인 이해를 얻었습니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
