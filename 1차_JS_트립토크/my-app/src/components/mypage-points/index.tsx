'use client';

import styles from './styles.module.css';

export default function MypagePassword() {
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

        <div className={styles.userInfoProfile}>
          <div className={styles.profileImg}>
            <img src="/icons/g.svg" alt="profile" />
          </div>
          <div className={styles.profileName}>김상훈</div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.userInfoPoint}>
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
          <div className={styles.userInfoTab}>
            거래내역&북마크
            <img src="/icons/right_arrow@2x.png" alt="arrow" className={styles.userInfoTabIcon} />
          </div>
          <div className={`${styles.userInfoTab} ${styles.userInfoTabInactive}`}>
            포인트 사용 내역
            <img src="/icons/right_arrow@2x.png" alt="arrow" className={styles.userInfoTabIcon} />
          </div>
          <div className={`${styles.userInfoTab} ${styles.userInfoTabInactive}`}>
            비밀번호 변경
            <img src="/icons/right_arrow@2x.png" alt="arrow" className={styles.userInfoTabIcon} />
          </div>
        </div>
      </div>

      <div className={styles.gap}></div>

      {/* buttonTabs 영역 */}
      <div className={styles.buttonTabs}>
        <button className={`${styles.tabButton} ${styles.tabButtonActive}`}>전체</button>
        <button className={styles.tabButton}>충전내역</button>
        <button className={styles.tabButton}>구매내역</button>
        <button className={styles.tabButton}>판매내역</button>
      </div>

      <div className={styles.gapSmall}></div>

      {/* productList 영역 */}
      <div className={styles.productList}>
        <div className={styles.productListContent}>
          <div className={styles.productListHeader}>
            <div className={styles.headerCell}>날짜</div>
            <div className={styles.headerCell}>내용</div>
            <div className={styles.headerCell}>거래 및 충전 내역</div>
            <div className={styles.headerCell}>잔액</div>
          </div>
          <div className={styles.productListBody}>
            <div className={styles.productListItem}>
              <div className={styles.itemCell}>2024.12.16</div>
              <div className={styles.itemCell}>
                <span className={styles.itemContentCharge}>충전</span>
              </div>
              <div className={styles.itemCell}></div>
              <div className={styles.itemCell}>1,222,000</div>
            </div>
            <div className={styles.productListItem}>
              <div className={styles.itemCell}>2024.12.16</div>
              <div className={styles.itemCell}>
                <span className={styles.itemContentBuy}>구매</span>
              </div>
              <div className={styles.itemCell}>
                <span className={styles.itemAmountBuy}>-50,000</span>
              </div>
              <div className={styles.itemCell}>1,222,000</div>
            </div>
            <div className={styles.productListItem}>
              <div className={styles.itemCell}>2024.12.16</div>
              <div className={styles.itemCell}>
                <span className={styles.itemContentSell}>판매</span>
              </div>
              <div className={styles.itemCell}>
                <span className={styles.itemAmountSell}>+1,000,000</span>
              </div>
              <div className={styles.itemCell}>1,222,000</div>
            </div>
          </div>
        </div>

        {/* pagination 영역 - productList의 자식 */}
        <div className={styles.pagination}>
          <div className={styles.paginationArrow}>
            <img
              src="/icons/chevron_right_24dp_5F6368_FILL1_wght400_GRAD0_opsz24 2@2x.png"
              alt="prev"
            />
          </div>
          <div className={styles.paginationNumbers}>
            <div className={`${styles.paginationNumber} ${styles.paginationNumberActive}`}>1</div>
            <div className={styles.paginationNumber}>2</div>
            <div className={styles.paginationNumber}>3</div>
            <div className={styles.paginationNumber}>4</div>
            <div className={styles.paginationNumber}>5</div>
          </div>
          <div className={styles.paginationArrow}>
            <img
              src="/icons/chevron_right_24dp_5F6368_FILL1_wght400_GRAD0_opsz24 1@2x.png"
              alt="next"
            />
          </div>
        </div>
      </div>

      <div className={styles.gap}></div>
    </div>
  );
}
