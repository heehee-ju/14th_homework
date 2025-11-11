'use client';

import styles from './styles.module.css';
import Image from 'next/image';

export default function VoucherDetail() {
  return (
    <div className={styles.container}>
      <div className={styles.gap}></div>

      {/* title 영역 */}
      <div className={styles.title}>
        <div className={styles.titleHeader}>
          <h1 className={styles.titleText}>포항 : 숙박권 명이 여기에 들어갑니다</h1>
          <div className={styles.titleIcons}>
            <button className={styles.iconButton}>
              <Image src="/icons/delete_dark.png" alt="delete" width={24} height={24} />
            </button>
            <button className={styles.iconButton}>
              <Image src="/icons/link.png" alt="link" width={24} height={24} />
            </button>
            <button className={styles.iconButton}>
              <Image src="/icons/location.png" alt="location" width={24} height={24} />
            </button>
            <button className={styles.bookmarkButton}>
              <Image src="/icons/bookmark.png" alt="bookmark" width={24} height={24} />
              <span className={styles.bookmarkCount}>24</span>
            </button>
          </div>
        </div>
        <p className={styles.subtitle}>모던한 분위기의 감도높은 숙소</p>
        <p className={styles.tags}>#6인 이하 #건식 사우나 #애견동반 가능</p>
      </div>

      <div className={styles.gap24}></div>

      {/* voucherInfo 영역 */}
      <div className={styles.voucherInfo}>
        <div className={styles.mainImage}>
          <Image
            src="/images/voucher_list.png"
            alt="main"
            width={640}
            height={480}
            className={styles.mainImageImg}
          />
        </div>
        <div className={styles.thumbnailContainer}>
          <div className={styles.thumbnailWrapper}>
            <div className={styles.thumbnail}>
              <Image
                src="/images/voucher_list.png"
                alt="thumbnail 1"
                width={180}
                height={136}
                className={styles.thumbnailImg}
              />
            </div>
            <div className={styles.thumbnail}>
              <Image
                src="/images/thumbnail 2.jpg"
                alt="thumbnail 2"
                width={180}
                height={136}
                className={styles.thumbnailImg}
              />
            </div>
            <div className={styles.thumbnail}>
              <Image
                src="/images/img-3.png"
                alt="thumbnail 3"
                width={180}
                height={136}
                className={styles.thumbnailImg}
              />
            </div>
            <div className={styles.thumbnail}>
              <Image
                src="/images/img.png"
                alt="thumbnail 4"
                width={180}
                height={136}
                className={styles.thumbnailImg}
              />
            </div>
          </div>
          <div className={styles.gradientOverlay}></div>
        </div>
        <div className={styles.purchaseInfo}>
          <div className={styles.purchaseCard}>
            <div className={styles.priceSection}>
              <div className={styles.priceWrapper}>
                <span className={styles.price}>32,500</span>
                <span className={styles.priceUnit}>원</span>
              </div>
              <div className={styles.priceDescription}>
                <p className={styles.descriptionText}>
                  숙박권은 트립트립에서 포인트 충전 후 구매하실 수 있습니다.
                </p>
                <p className={styles.descriptionTextLight}>
                  상세 설명에 숙박권 사용기한을 꼭 확인해 주세요.
                </p>
              </div>
            </div>
            <button className={styles.purchaseButton}>구매하기</button>
          </div>
          <div className={styles.sellerSection}>
            <h3 className={styles.sellerTitle}>판매자</h3>
            <div className={styles.sellerProfile}>
              <div className={styles.profileImage}>
                <Image
                  src="/images/profile-1.png"
                  alt="profile"
                  width={40}
                  height={40}
                  className={styles.profileImg}
                />
              </div>
              <span className={styles.sellerName}>김상훈</span>
              <Image src="/icons/down_arrow.png" alt="arrow" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.gap}></div>
      <div className={styles.divider}></div>

      <div className={styles.gap}></div>

      {/* voucherDetail 영역 */}
      <div className={styles.voucherDetail}>
        <h2 className={styles.detailTitle}>상세 설명</h2>
        <p className={styles.detailText}>
          살어리 살어리랏다 쳥산(靑山)애 살어리랏다 멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애 살어리랏다
          얄리얄리 얄랑셩 얄라리 얄라 우러라 우러라 새여 자고 니러 우러라 새여 널라와 시름 한 나도
          자고 니러 우니로라 리얄리 얄라셩 얄라리 얄라 가던 새 가던 새 본다 믈 아래 가던 새 본다
          잉무든 장글란 가지고 믈 아래 가던 새 본다 얄리얄리 얄라셩 얄라리 얄라
          <br />
          <br />
          이링공 뎌링공 ᄒᆞ야 나즈란 디내와손뎌
          <br />
          오리도 가리도 업슨 바므란 ᄯᅩ 엇디 호리라
          <br />
          얄리얄리 얄라셩 얄라리 얄라
          <br />
          <br />
          어듸라 더디던 돌코 누리라 마치던 돌코
          <br />
          믜리도 괴리도 업시 마자셔 우니노라
          <br />
          얄리얄리 얄라셩 얄라리 얄라
          <br />
          <br />
          살어리 살어리랏다 바ᄅᆞ래 살어리랏다
          <br />
          ᄂᆞᄆᆞ자기 구조개랑 먹고 바ᄅᆞ래 살어리랏다
          <br />
          얄리얄리 얄라셩 얄라리 얄라
          <br />
          <br />
          가다가 가다가 드로라 에졍지 가다가 드로라
          <br />
          사ᄉᆞ미 지ᇝ대예 올아셔 ᄒᆡ금(奚琴)을 혀거를 드로라
          <br />
          얄리얄리 얄라셩 얄라리 얄라
          <br />
          <br />
          가다니 ᄇᆡ브른 도긔 설진 강수를 비조라
          <br />
          조롱곳 누로기 ᄆᆡ와 잡ᄉᆞ와니 내 엇디 ᄒᆞ리잇고
          <br />
          얄리얄리 얄라셩 얄라리 얄라
        </p>
      </div>

      <div className={styles.gap}></div>
      <div className={styles.divider}></div>

      <div className={styles.gap}></div>

      {/* voucherLocation 영역 */}
      <div className={styles.voucherLocation}>
        <h2 className={styles.locationTitle}>상세 위치</h2>
        <div className={styles.mapContainer}>
          <Image
            src="/images/Mask group.png"
            alt="map"
            width={844}
            height={280}
            className={styles.mapImage}
          />
          <div className={styles.mapBackground}></div>
        </div>
      </div>

      <div className={styles.gap}></div>

      {/* question 영역 */}
      <div className={styles.question}>
        <div className={styles.questionHeader}>
          <Image src="/icons/chat.png" alt="chat" width={24} height={24} />
          <h3 className={styles.questionTitle}>문의하기</h3>
        </div>
        <div className={styles.questionForm}>
          <div className={styles.questionInput}>
            <textarea
              className={styles.textarea}
              placeholder="문의사항을 입력해 주세요."
              maxLength={100}
            />
            <p className={styles.inputCount}>0/100</p>
          </div>
          <button className={styles.submitButton}>문의 하기</button>
        </div>
        <p className={styles.noQuestionText}>등록된 문의사항이 없습니다.</p>
      </div>

      <div className={styles.gap}></div>
    </div>
  );
}
