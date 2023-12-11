import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../../../../public/data/data';
import MenuHeader from '@/ui/MenuHeader/MenuHeader';

export default function Page() {
  return (
    <>
      <MenuHeader />
      <main className={styles['main-container']}>
        <h1 className={styles['contact-title']}>
          Projects<span className={styles['dot']}>.</span>
        </h1>

        <ul className={styles['projects-container']}>
          {projects.map((project, index) => {
            return (
              <Link
                key={index}
                href={{ pathname: `/projects/${project.route}` }}
                // href={`/projects/${project.route}`}
                className={styles['project']}
              >
                <li className={styles['project-container']}>
                  <div
                    className={`${styles['project-top']} ${
                      styles[project.bgClass]
                    }`}
                  >
                    <Image
                      className={styles['content-img']}
                      src={`/img/${project.img}`}
                      width={250}
                      height={100}
                      alt="projectLogo"
                    />
                  </div>
                  <div className={styles['project-bottom']}>
                    <p className={styles['project-title']}>{project.name}</p>
                    <p className={styles['project-summary']}>
                      {project.summary}
                    </p>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </main>
    </>
  );
}
