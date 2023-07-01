import React from 'react';
import { useOutlet } from 'react-router-dom';
import SideBar from '../components/Sidebar';
import styles from './mainLayout.module.css';

function MainLayout() {
  const outlet = useOutlet();
  return (
    <div className={styles.MainLayoutContainer}>
      <SideBar />
      <div>
        <div className={styles.MainLayoutOutlet}>{outlet}</div>
      </div>
    </div>
  );
}

export default MainLayout;
