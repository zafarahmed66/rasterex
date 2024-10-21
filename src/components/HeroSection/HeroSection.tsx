import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HeroSection() {
  return (
    <div className={styles.universalViewingWrapper}>
      <div className={styles.heroBanner}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Universal Viewing</h1>
          <p className={styles.heroSubtitle}>
            We make it easy to collaborate and communicate in your projects with our SDK that empower software developers. 
            With our universal viewing SDK we believe the truth is in the drawing and it all starts with an SDK that can do everything with it.
          </p>
        </div>
      </div>

      <div className={styles.infoSection}>
        <div className={clsx('container', styles.infoContainer)}>
          <div className={styles.infoContent}>
            <h2 className={styles.infoTitle}>
              The power of<br />universal viewing
            </h2>
            <p className={styles.infoText}>
              The power of a universal viewing lies in its abilities to access and visualize the native information of any file, 
              and utilize the information to facilitate efficient review processes and document workflows. 
              With our SDK no authoring software is required, and hundreds of document types are supported.
            </p>
          </div>
          <div className={styles.infoImage}>
            <img src='/gif/home-page.gif' />
          </div>
        </div>
      </div>
    </div>
  );
}