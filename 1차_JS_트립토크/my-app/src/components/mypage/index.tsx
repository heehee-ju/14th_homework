'use client';

import styles from './styles.module.css';

export default function Mypage() {
  return (
    <div className={styles.container}>
      <div className={styles.gap}></div>
      <div className={styles.title}></div>
      <div className={styles.gap}></div>
      <div className={styles.userInfo}></div>
      <div className={styles.gap}></div>
      <div className={styles.buttonTabs}></div>
      <div className={styles.gapSmall}></div>
      <div className={styles.searchbar}></div>
      <div className={styles.gapSmall}></div>
      <div className={styles.searchbarLarge}></div>
      <div className={styles.gap}></div>
    </div>
  );
}
