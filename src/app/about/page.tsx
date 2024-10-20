import React from 'react';

import ExternalLink from '@/app/components/ExternalLink/ExternalLink';
import SubPage from '@/app/ui/SubPage/SubPage';

import styles from './page.module.scss';

export default function About() {
  return (
    <section className={styles.about}>
      <SubPage title="About">
        {/* <h1 className={`${styles.title} ${firaMono.className}`}>About</h1> */}
        <p className={styles.bio}>
          <strong>Michael Chuang</strong> is a dedicated software engineer based
          in Taipei, Taiwan, with a keen focus on technical excellence and best
          practices. Fluent in both Mandarin Chinese and English, he seamlessly
          navigates and contributes to global tech communities. With a solid
          foundation in both large and small organizations, he brings two years
          of valuable experience to the table.
        </p>
        <p className={styles.bio}>
          Michael&apos;s journey into the world of technology began at the age
          of 13, when he first explored coding through modding for the video
          game Grand Theft Auto: San Andreas and building static websites.
          Despite majoring in English literature during university, his
          fascination with coding led him to pursue a career in software
          engineering.
        </p>
        <p className={styles.bio}>
          Now, Michael&apos;s expertise lies in the front-end ecosystem, where
          he specializes in TypeScript, React, Redux, and Node.js. He is also
          proficient in Python, unit testing, and continuous integration and
          deployment (CI/CD) practices.
        </p>
        <p className={styles.bio}>
          His areas of interest extend to cybersecurity, game AI, and
          automation, reflecting his passion for leveraging technology to solve
          complex challenges.
        </p>

        <div className={styles.additionalLinks}>
          <div className={styles.bio}>
            Connect with Michael through the following platforms:
          </div>
          <ExternalLink href="https://github.com/zhaungsont/hide-teams-overlay">
            GitHub
          </ExternalLink>
          <br />
          <ExternalLink href="https://github.com/zhaungsont/hide-teams-overlay">
            LinkedIn
          </ExternalLink>
          <br />
          <br />
          {/* ...or add him on{' '}
          <ExternalLink href="https://github.com/zhaungsont/hide-teams-overlay">
            Discord
          </ExternalLink>
          <br /> */}
        </div>
        <p className={styles.bio}>
          For business inquiries, please reach out to Michael at{' '}
          <code>zhsont[at]gmail.com</code>.
        </p>
      </SubPage>
    </section>
  );
}
