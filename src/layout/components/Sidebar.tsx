import React from 'react';
import styles from './sidebar.module.css';

function SideBar() {
  return (
    <div>
      <div className={styles.sidebarContainer}>
        <div className={styles.podcastIcon}>
          <h1>Podcast</h1>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
