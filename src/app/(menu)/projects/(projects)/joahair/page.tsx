import styles from './page.module.css';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import ImageCarousel from '@/ui/ImageCarousel/ImageCarousel';
import ImageCarouselContainer from '@/ui/ImageCarousel/ImageCarouselContainer/ImageCarouselContainer';
import ImageCarouselIndicator from '@/ui/ImageCarousel/ImageCarouselIndicator/ImageCarouselIndicator';
import ImageCarouselButton from '@/ui/ImageCarousel/ImageCarouselButton/ImageCarouselButton';
import ImageCarouselInner from '@/ui/ImageCarousel/ImageCarouselInner/ImageCarouselInner';
import ImageCarouselItem from '@/ui/ImageCarousel/ImageCarouselItem/ImageCarouselItem';
import { joahairImgCarouselSrc } from '../../../../../../public/data/data';
import { problemSolvingText } from '../../../../../../public/data/htmlData';

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
            <p className={styles['top-content-text']}>
              실제 헤어살롱의 오픈 과정에서 클라이언트의 의뢰를 통해 시작하게 된 프로젝트입니다.
              헤어살롱의 브랜드 홍보와 신규 고객 유치를 목표로 제작하게 되었습니다. Instagram 게시물
              실시간 연동 등 마케팅 요소와 함께 사용자 예약 플로우를 포함하고 있으며, 현재까지 추가
              개발과 유지 보수를 지속하고 있습니다.
            </p>
            <div className={styles['project-links']}>
              <div className={styles['project-link-container']}>
                <a
                  className={styles['project-link']}
                  href="https://demo.joahair.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo(추가 기능 시연)
                </a>
                <HiOutlineArrowLongRight className={styles['arrow']} />
              </div>
              <div className={styles['project-link-container']}>
                <a
                  className={styles['project-link']}
                  href="https://joahair.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Production
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
          <div className={`${styles['page-container']} ${styles['page-container-1']}`}>
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
                    FE·BE(서버리스)·기획·디자인·인프라 등 전체 개발&운영
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
                    React, TypeScript, webpack, Babel, styled-components, TanStack Query, React Hook
                    Form, Mock Service Worker, AWS(S3, CloudFront, Route 53), Firebase(Firestore,
                    Cloud Functions), GitHub Actions, Storybook
                  </p>
                </li>
              </div>
            </ul>
          </div>
          <div className={`${styles['page-container']} ${styles['page-container-1']}`}>
            <h1 className={styles['page-title']}>Preview</h1>
            <ImageCarousel total={joahairImgCarouselSrc.length}>
              <ImageCarouselContainer width={'1200px'} height={'750px'}>
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
              기술적 의사 결정
            </h1>
            {problemSolvingText.map((desc, idx) => {
              return (
                <div key={desc.title + idx} className={styles['page-element']}>
                  <p className={styles['description-title']}>{`${idx + 1}. ${desc.title}`}</p>
                  <div className={styles['description-container']}>
                    <p className={styles['description-small-title']}>{desc.smallTitle?.first}</p>
                    {desc.first}
                    {/* <p className={styles['description-new']}>{desc.fDescription}</p> */}
                  </div>
                  <div className={styles['description-container']}>
                    <p className={styles['description-small-title']}>{desc.smallTitle?.second}</p>
                    {desc.second}
                    {/* <p className={styles['description-new']}>{desc.sDescription}</p> */}
                  </div>
                  <div className={styles['description-container']}>
                    <p className={styles['description-small-title']}>{desc.smallTitle?.third}</p>
                    {desc.third}
                    {/* <p className={styles['description-new']}>{desc.tDescription}</p> */}
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles['page-container']}>
            <h1 id="joahair-ui-ux" className={styles['page-title']}>
              프로젝트 관련 링크
            </h1>
            <div className={styles['blog-page-element']}>
              <div className={styles['blog-link-container']}>
                <a
                  href="https://reservation-show--697340725d032aaf9ee9c9b2.chromatic.com"
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
                  href="https://www.figma.com/design/zIPi2prACN0tdY4ck12TLM/hair-salon-project--wire-frame---design-system-?node-id=0-1&p=f&t=99NMlsSInruKX2NL-0"
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
                  href="https://zonbin.notion.site/dd34cd2b809a4c12854fb9ffa30f660e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['blog-link-text']}
                >
                  블로그 글: JOA HAIR 웹사이트 로딩 속도 개선 작업
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
