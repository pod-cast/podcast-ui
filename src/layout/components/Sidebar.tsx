import React from 'react';
import styles from './sidebar.module.css';
import homeIcon from '../../assets/homeIcon.svg';
import { useNavigate } from 'react-router-dom';

const sidebarData = [
  {
    title: 'Home',
    icon: homeIcon,
    link: '/home',
    pointer: ''
  },
  {
    title: 'Categories',
    icon: homeIcon,
    link: '/categories',
    pointer: ''
  }
];

function SideBar() {
  const navigate = useNavigate();
  function handleNavigation(link: string) {
    navigate(link);
  }

  return (
    <div>
      <div className={styles.sidebarContainer}>
        <div className={styles.podcastIcon}>
          <h1>Podcast</h1>
          <ul className={styles.sidebarList}>
            <div>
              {sidebarData.map((val, key) => {
                return (
                  <li
                    key={key}
                    className={`${styles.sidebarRow} ${val?.pointer ? styles.pointerNone : ''}`}
                    id={
                      window.location.pathname.includes(val.link.split('/')[0])
                        ? `${styles.active}`
                        : ''
                    }
                  >
                    <img
                      src={val.icon}
                      alt="menu"
                      onClick={() => handleNavigation(val.link)}
                      className={`${
                        window.location.pathname.includes(val.link.split('/')[0])
                          ? styles.sidebarImgActive
                          : ''
                      }`}
                    />
                    <div onClick={() => handleNavigation(val.link)} className={styles.sideBarTitle}>
                      {val.title}
                    </div>
                  </li>
                );
              })}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
