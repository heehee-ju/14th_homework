'use client';

import styles from './styles.module.css';
import Image from 'next/image';

export default function Voucher() {
  return (
    <div className={styles.container}>
      {/* title1 영역 */}
      <div className={styles.title1}>
        <p className={styles.titleText}>2024 끝여름 낭만있게 마무리 하고 싶다면?</p>
      </div>

      {/* recommend 영역 */}
      <div className={styles.recommend}>
        <div className={styles.recommendCard}>
          <div className={styles.recommendCardImage}>
            <Image src="/images/a.png" alt="포항 숙소" fill style={{ objectFit: 'cover' }} />
            <div className={styles.bookmark}>
              <Image src="/icons/bookmark@2x.png" alt="북마크" width={24} height={24} />
              <span className={styles.bookmarkCount}>24</span>
            </div>
            <div className={styles.recommendCardOverlay}>
              <div className={styles.recommendCardContent}>
                <div className={styles.recommendCardTitle}>
                  <h3>포항 : 당장 가고 싶은 숙소</h3>
                  <p>
                    살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애
                    살어리랏다얄리얄리 얄랑셩 얄라리 얄라 우러라 우러라 새여 자고 니러 우러라 새여
                    널라와 시름 한 나도 자고 니러 우니로라 얄리얄리 얄라셩 얄라리 얄라
                  </p>
                </div>
                <div className={styles.recommendCardPrice}>
                  <span>32,900</span>
                  <span>원</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.recommendCard}>
          <div className={styles.recommendCardImage}>
            <Image src="/images/b.png" alt="강릉 숙소" fill style={{ objectFit: 'cover' }} />
            <div className={styles.bookmark}>
              <Image src="/icons/bookmark@2x.png" alt="북마크" width={24} height={24} />
              <span className={styles.bookmarkCount}>24</span>
            </div>
            <div className={styles.rightPageIcon}>
              <Image src="/icons/right page icon button@2x.png" alt="" width={40} height={40} />
            </div>
            <div className={styles.recommendCardOverlay}>
              <div className={styles.recommendCardContent}>
                <div className={styles.recommendCardTitle}>
                  <h3>강릉 : 마음까지 깨끗해지는 하얀 숙소</h3>
                  <p>살어리 살어리랏다 강릉에 평생 살어리랏다</p>
                </div>
                <div className={styles.recommendCardPrice}>
                  <span>32,900</span>
                  <span>원</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* gap 영역 */}
      <div className={styles.gap}></div>

      {/* advertisement 영역 */}
      <div className={styles.advertisement}>
        <div className={styles.advertisementImage}>
          <Image
            src="/images/Solitary Contemplation Beneath Nature's Arch 1.png"
            alt=""
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.advertisementContent}>
          <div className={styles.advertisementBadges}>
            <div className={styles.advertisementBadge}>'솔로트립' 독점 숙소</div>
            <div className={styles.advertisementBadge}>9.24 얼리버드 오픈 예약</div>
          </div>
          <h2 className={styles.advertisementTitle}>
            천만 관객이 사랑한
            <br />빌 페소 르꼬 전시회 근처 숙소 특가 예약
          </h2>
        </div>
      </div>

      {/* gap 영역 */}
      <div className={styles.gap}></div>

      {/* title2 영역 */}
      <div className={styles.title2}>
        <p className={styles.titleText}>여기에서만 예약할 수 있는 숙소</p>
      </div>

      {/* buttonTabs 영역 */}
      <div className={styles.buttonTabs}>
        <button className={`${styles.tab} ${styles.tabActive}`}>예약 가능 숙소</button>
        <button className={styles.tab}>예약 마감 숙소</button>
      </div>

      {/* searchbar 영역 */}
      <div className={styles.searchbar}>
        <div className={styles.searchbarContent}>
          <div className={styles.datepicker}>
            <Image src="/icons/icon/outline/calendar.png" alt="달력" width={24} height={24} />
            <div className={styles.datepickerText}>
              <span>YYYY.MM.DD</span>
              <span>-</span>
              <span>YYYY.MM.DD</span>
            </div>
          </div>
          <div className={styles.searchInput}>
            <Image src="/icons/search@2x.png" alt="검색" width={24} height={24} />
            <input type="text" placeholder="제목을 검색해 주세요." />
          </div>
          <button className={styles.searchButton}>
            <span>검색</span>
          </button>
          <button className={styles.sellButton}>
            <span>숙박권 판매하기</span>
            <Image src="/icons/right page icon button@2x.png" alt="" width={24} height={24} />
          </button>
        </div>
      </div>

      {/* category 영역 */}
      <div className={styles.category}>
        <div className={styles.categoryItem}>
          <Image
            src="/icons/Single person accommodation.png"
            alt="1인 전용"
            width={40}
            height={40}
          />
          <span>1인 전용</span>
        </div>
        <div className={styles.categoryItem}>
          <Image src="/icons/apartment.png" alt="아파트" width={40} height={40} />
          <span>아파트</span>
        </div>
        <div className={styles.categoryItem}>
          <Image src="/icons/hotel.png" alt="호텔" width={40} height={40} />
          <span>호텔</span>
        </div>
        <div className={styles.categoryItem}>
          <Image src="/icons/camp.png" alt="캠핑" width={40} height={40} />
          <span>캠핑</span>
        </div>
        <div className={styles.categoryItem}>
          <Image src="/icons/room service.png" alt="룸 서비스 가능" width={40} height={40} />
          <span>룸 서비스 가능</span>
        </div>
        <div className={styles.categoryItem}>
          <Image src="/icons/fire.png" alt="불멍" width={40} height={40} />
          <span>불멍</span>
        </div>
        <div className={styles.categoryItem}>
          <Image src="/icons/_spa.png" alt="반신욕&스파" width={40} height={40} />
          <span>반신욕&스파</span>
        </div>
        <div className={styles.categoryItem}>
          <Image src="/icons/house on the sea.png" alt="바다 위 숙소" width={40} height={40} />
          <span>바다 위 숙소</span>
        </div>
        <div className={styles.categoryItem}>
          <Image src="/icons/planterior.png" alt="플랜테리어" width={40} height={40} />
          <span>플랜테리어</span>
        </div>
      </div>

      {/* gap 영역 */}
      <div className={styles.gapSmall}></div>

      {/* productList 영역 */}
      <div className={styles.productList}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className={styles.productCard}>
            <div className={styles.productCardImage}>
              <Image
                src={`/images/${item <= 4 ? 'c.png' : 'd.png'}`}
                alt="상품 이미지"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.productBookmark}>
                <Image src="/icons/bookmark@2x.png" alt="북마크" width={24} height={24} />
                <span>24</span>
              </div>
            </div>
            <div className={styles.productCardContent}>
              <div className={styles.productCardTitle}>
                <h4>
                  살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애
                  살어리랏다얄리얄리 얄랑셩 얄라리 얄라 우러라 우러라 새여 자고 니러 우러라 새여
                  널라와 시름 한 나도 자고 니러 우니로라 얄리얄리 얄라셩 얄라리 얄라
                </h4>
                <p>
                  살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애
                  살어리랏다얄리얄리 얄랑셩 얄라리 얄라 우러라 우러라 새여 자고 니러 우러라 새여
                  널라와 시름 한 나도 자고 니러 우니로라 얄리얄리 얄라셩 얄라리 얄라
                </p>
              </div>
              <div className={styles.productCardTags}>
                <span>#6인 이하 #건식 사우나 #애견동반 가능</span>
              </div>
              <div className={styles.productCardFooter}>
                <div className={styles.productCardProfile}>
                  <Image src="/images/img.png" alt="" width={24} height={24} />
                  <span>빈얀트리</span>
                </div>
                <div className={styles.productCardPrice}>
                  <span>32,900</span>
                  <span>원</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* gap 영역 */}
      <div className={styles.gapBottom}></div>
    </div>
  );
}
