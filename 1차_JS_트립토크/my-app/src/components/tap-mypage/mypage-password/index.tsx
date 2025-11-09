'use client';

import { useRouter } from 'next/navigation';
import styles from './styles.module.css';

export default function MypagePassword() {
  const router = useRouter();

  const handleTabClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className={styles.container}>
      <div className={styles.gap}></div>

      {/* title 영역 */}
      <div className={styles.title}>
        <h1 className={styles.titleText}>마이 페이지</h1>
      </div>

      <div className={styles.gap}></div>

      {/* userInfo 영역 */}
      <div className={styles.userInfo}>
        <div className={styles.userInfoHeader}>내 정보</div>
        <div className={styles.profile}>
          <div className={styles.profileImg}>
            <img src="/icons/g.svg" alt="profile" />
          </div>
          <div className={styles.profileName}>김상훈</div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.pointInfo}>
          <div className={styles.pointIcon}>
            <img src="/icons/point@2x.png" alt="point" />
          </div>
          <div className={styles.pointValue}>
            <span>23,000</span>
            <span>P</span>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.userInfoTabs}>
          <div
            className={`${styles.userInfoTab} ${styles.userInfoTabInactive}`}
            onClick={() => handleTabClick('/mypage')}
            style={{ cursor: 'pointer' }}
          >
            거래내역&북마크
            <img src="/icons/right_arrow@2x.png" alt="arrow" className={styles.userInfoTabIcon} />
          </div>
          <div
            className={`${styles.userInfoTab} ${styles.userInfoTabInactive}`}
            onClick={() => handleTabClick('/mypage/points')}
            style={{ cursor: 'pointer' }}
          >
            포인트 사용 내역
            <img src="/icons/right_arrow@2x.png" alt="arrow" className={styles.userInfoTabIcon} />
          </div>
          <div className={styles.userInfoTab}>
            비밀번호 변경
            <img src="/icons/right_arrow@2x.png" alt="arrow" className={styles.userInfoTabIcon} />
          </div>
        </div>
      </div>

      <div className={styles.gap}></div>

      {/* changePassword 영역 */}
      <div className={styles.changePassword}>
        <h2 className={styles.changePasswordTitle}>비밀번호 변경</h2>
        <div className={styles.changePasswordContent}>
          <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>
              <span className={styles.labelText}>새 비밀번호</span>
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.inputWrapper}>
              <input
                type="password"
                className={styles.input}
                placeholder="새 비밀번호를 입력해 주세요."
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>
              <span className={styles.labelText}>새 비밀번호 확인</span>
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.inputWrapper}>
              <input
                type="password"
                className={styles.input}
                placeholder="새 비밀번호를 확인해 주세요."
              />
            </div>
          </div>
          <button className={styles.changeButton}>비밀번호 변경</button>
        </div>
      </div>

      <div className={styles.gap}></div>
    </div>
  );
}
