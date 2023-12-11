import ProjectsHeader from '@/ui/ProjectsHeader/ProjectsHeader';
import styles from './page.module.css';
import Image from 'next/image';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

export default function Page() {
  return (
    <main>
      <section className={styles['top-section']}>
        <ProjectsHeader />
        <div className={styles['top-content-container']}>
          <Image
            className={styles['logo-img']}
            src="/img/movielog.svg"
            width={320}
            height={100}
            alt="projectLogo"
          />
          <p className={styles['top-content-text']}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            repellat mollitia dolore temporibus, alias iste illum cupiditate
            tempore culpa laudantium earum vitae nisi cumque facilis nostrum
            voluptatum veniam accusantium fuga.
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
    </main>
  );
}
