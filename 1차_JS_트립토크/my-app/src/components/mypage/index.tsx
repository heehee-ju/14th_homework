'use client';

import styles from './styles.module.css';

export default function Mypage() {
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
        <button className={`${styles.tabButton} ${styles.tabButtonActive}`}>나의 상품</button>
        <button className={styles.tabButton}>북마크</button>
      </div>

      <div className={styles.gapSmall}></div>

      {/* searchbar 영역 */}
      <div className={styles.searchbar}>
        <div className={styles.searchInputWrapper}>
          <img src="/icons/search@2x.png" alt="search" className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="필요한 내용을 검색해 주세요."
          />
        </div>
        <button className={styles.searchButton}>검색</button>
      </div>

      <div className={styles.gapSmall}></div>

      {/* productList 영역 */}
      <div className={styles.productList}>
        <div className={styles.tableHeader}>
          <div className={styles.tableHeaderCell}>번호</div>
          <div className={styles.tableHeaderCell}>상품 명</div>
          <div className={styles.tableHeaderCell}>판매가격</div>
          <div className={styles.tableHeaderCell}>날짜</div>
        </div>
        <div className={styles.tableBody}>
          <div className={styles.tableRow}>
            <div className={styles.tableCell}>243</div>
            <div className={styles.tableCell}>
              <span className={styles.productName}>파르나스 호텔 제주</span>
              <span className={styles.productStatus}>판매 완료</span>
            </div>
            <div className={styles.tableCell}>326,000원</div>
            <div className={styles.tableCell}>2024.12.16</div>
            <div className={styles.deleteIcon}>
              <img src="/icons/delete@2x.png" alt="delete" />
            </div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableCell}>243</div>
            <div className={styles.tableCell}>
              <span className={styles.productName}>파르나스 호텔 제주</span>
              <span className={styles.productStatus}>판매 완료</span>
            </div>
            <div className={styles.tableCell}>326,000원</div>
            <div className={styles.tableCell}>2024.12.16</div>
            <div className={styles.deleteIcon}>
              <img src="/icons/delete@2x.png" alt="delete" />
            </div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableCell}>243</div>
            <div className={styles.tableCell}>
              <span className={styles.productName}>파르나스 호텔 제주</span>
              <span className={styles.productStatus}>판매 완료</span>
            </div>
            <div className={styles.tableCell}>326,000원</div>
            <div className={styles.tableCell}>2024.12.16</div>
            <div className={styles.deleteIcon}>
              <img src="/icons/delete@2x.png" alt="delete" />
            </div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableCell}>243</div>
            <div className={styles.tableCell}>
              <span className={styles.productName}>파르나스 호텔 제주</span>
              <span className={styles.productStatus}>판매 완료</span>
            </div>
            <div className={styles.tableCell}>326,000원</div>
            <div className={styles.tableCell}>2024.12.16</div>
            <div className={styles.deleteIcon}>
              <img src="/icons/delete@2x.png" alt="delete" />
            </div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableCell}>243</div>
            <div className={styles.tableCell}>
              <span className={styles.productName}>파르나스 호텔 제주</span>
              <span className={styles.productStatus}>판매 완료</span>
            </div>
            <div className={styles.tableCell}>326,000원</div>
            <div className={styles.tableCell}>2024.12.16</div>
            <div className={styles.deleteIcon}>
              <img src="/icons/delete@2x.png" alt="delete" />
            </div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableCell}>243</div>
            <div className={styles.tableCell}>
              <span className={styles.productName}>파르나스 호텔 제주</span>
              <span className={styles.productStatus}>판매 완료</span>
            </div>
            <div className={styles.tableCell}>326,000원</div>
            <div className={styles.tableCell}>2024.12.16</div>
            <div className={styles.deleteIcon}>
              <img src="/icons/delete@2x.png" alt="delete" />
            </div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableCell}>243</div>
            <div className={styles.tableCell}>
              <span className={styles.productName}>파르나스 호텔 제주</span>
              <span className={styles.productStatus}>판매 완료</span>
            </div>
            <div className={styles.tableCell}>326,000원</div>
            <div className={styles.tableCell}>2024.12.16</div>
            <div className={styles.deleteIcon}>
              <img src="/icons/delete@2x.png" alt="delete" />
            </div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableCell}>243</div>
            <div className={styles.tableCell}>
              <span className={styles.productName}>파르나스 호텔 제주</span>
              <span className={styles.productStatus}>판매 완료</span>
            </div>
            <div className={styles.tableCell}>326,000원</div>
            <div className={styles.tableCell}>2024.12.16</div>
            <div className={styles.deleteIcon}>
              <img src="/icons/delete@2x.png" alt="delete" />
            </div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableCell}>243</div>
            <div className={styles.tableCell}>
              <span className={styles.productName}>파르나스 호텔 제주</span>
              <span className={styles.productStatus}>판매 완료</span>
            </div>
            <div className={styles.tableCell}>326,000원</div>
            <div className={styles.tableCell}>2024.12.16</div>
            <div className={styles.deleteIcon}>
              <img src="/icons/delete@2x.png" alt="delete" />
            </div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableCell}>243</div>
            <div className={styles.tableCell}>
              <span className={styles.productName}>파르나스 호텔 제주</span>
              <span className={styles.productStatus}>판매 완료</span>
            </div>
            <div className={styles.tableCell}>326,000원</div>
            <div className={styles.tableCell}>2024.12.16</div>
            <div className={styles.deleteIcon}>
              <img src="/icons/delete@2x.png" alt="delete" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.gap}></div>
    </div>
  );
}
