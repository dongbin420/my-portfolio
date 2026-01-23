import styles from '../../src/app/(menu)/projects/(projects)/joahair/page.module.css';
import Image from 'next/image';

export const problemSolvingText = [
  {
    title: '복잡한 예약 도메인을 UI 데이터 모델로 설계하기',
    first: [
      <p key="1" className={styles['description-new']}>
        실제 비즈니스에 사용되는 예약 시스템 설계에서 가장 깊게 고민했던 부분은 비즈니스의 운영
        상황을 고려해 &#34;이 날짜와 시간이 실제로 예약이 가능한 상태인가?&#34;를 UI에 어떻게 반영할
        것인가에 대한 문제였습니다. 예약 가능 여부는 다음과 같은 여러 조건이 동시에 작용하여
        결정되었습니다.
      </p>,
      <ul key="2" className={`${styles['description-new']} ${styles['desc-bullet']}`}>
        <li>영업일/휴무일 여부</li>
        <li>예약 현황</li>
        <li>선택한 서비스의 소요 시간 등</li>
        {/* <li>현재 시간 기준, 예약 예정 시간까지 남은 시간</li>
        <li>관리자가 임의로 막은 시간</li> */}
      </ul>,
      <p key="3" className={styles['description-new']}>
        처음 설계 단계에서는 이 조건들을 서버로부터 받아 프론트엔드에서 직접 계산하는 방식을
        고려했습니다. 하지만, 이 방식으로 구현할 경우, 다음과 같은 문제들이 생길 가능성이 높다고
        판단했습니다.
      </p>,
      <ul key="4" className={`${styles['description-new']} ${styles['desc-bullet']}`}>
        <li>프론트엔드 코드 내에 비즈니스 규칙이 계속 쌓이며 조건 분기가 급격히 증가</li>
        <li>날짜/시간 상태 계산 로직이 컴포넌트에 섞여 가독성과 유지보수성 저하</li>
        <li>실제 서버가 붙는 경우, 구조를 전면 수정해야 할 가능성</li>
      </ul>,
      <p key="5" className={styles['description-new']}>
        결과적으로 코드가 점점 복잡해지고, UI 코드가 예약 도메인 로직에 종속되는 구조가 되어 갈
        것이라 예측했습니다.
      </p>,
    ],
    second: [
      <p key="1" className={styles['description-new']}>
        앞서 예측한 리스크들을 고려했을때, 도메인 관련 로직을 서버가 담당하고, 프론트엔드는 정제된
        데이터를 UI로 표현하는 데 집중하는 것이 UI와 도메인 로직의 책임을 명확히 분리할 수 있는
        구조라 판단했습니다.
      </p>,
      <p key="2" className={styles['description-new']}>
        먼저, 예약 상태에 따라 UI를 다르게 표현하기만하면 되는 단순한 형태로 예약/시간에 대한 상태
        모델을 다음과 같이 정의했고, 이에 맞춰 API 응답 구조를 설계했습니다.
      </p>,
      <ul key="3" className={`${styles['description-new']} ${styles['desc-bullet']}`}>
        <li>날짜: open / closed / unavailable</li>
        <li>시간: open(selectable/unselectable) / booked / block</li>
      </ul>,
      <p key="4" className={styles['description-new']}>
        서버 측에서 정제된 응답 데이터 생성을 위해 비즈니스 요구사항을 반영한 주요 도메인 로직은
        다음과 같습니다.
      </p>,
      <ul key="5" className={`${styles['description-new']} ${styles['desc-bullet']}`}>
        <li>
          문제: 현재 시간으로부터 1시간 이내는 너무 가까운 시간이기에 예약을 확정하기에 위험이 있음
          <ul className={`${styles['description-new']} ${styles['desc-bullet']}`}>
            <li>
              해결: 날짜가 &#39;오늘&#39;인 경우, 현재 시간 기준 1시간 이하로 남은 예약 시간은
              block(슬롯 hidden) 처리
            </li>
          </ul>
        </li>
        <li>
          문제: 사용자가 선택한 서비스의 총합 시간 동안은 다른 예약을 받을 수 없음
          <ul className={`${styles['description-new']} ${styles['desc-bullet']}`}>
            <li>
              해결: 사용자가 선택한 서비스 시간의 총합을 고려해서, 해당 시간 만큼의 연속된 open 시간
              슬롯이 부족하면 selectable을 false로 처리
            </li>
          </ul>
        </li>
      </ul>,
      <p key="6" className={styles['description-new']}>
        최종적으로, 정제된 응답 데이터를 이용해 다음과 같이 비즈니스 요구사항이 반영된 UI를
        구성했습니다.
      </p>,
      <p key="7" className={styles['description-new']}></p>,
      <div key="8">
        <a href="/img/joahair/reservation.png" target="_blank" rel="noreferrer">
          <Image
            className={styles['project-capture']}
            src="/img/joahair/reservation.png"
            width={1100}
            height={650}
            alt="projectCapture"
          />
        </a>
        <ul className={`${styles['description-new']} ${styles['desc-bullet']}`}>
          <li>
            날짜
            <ul className={`${styles['description-new']} ${styles['desc-bullet']}`}>
              <li>상태가 closed 혹은 과거 날짜일 경우, 회색으로 비활성화</li>
              <li>상태가 open인 경우, 초록 원 아이콘 표시</li>
              <li>상태가 unavailable인 경우, 빨간 x 아이콘 표시</li>
            </ul>
          </li>
          <li>
            시간
            <ul className={`${styles['description-new']} ${styles['desc-bullet']}`}>
              <li>open+selectable(true)인 시간은 슬롯 활성화</li>
              <li>open+selectable(false)인 시간은 슬롯 hidden</li>
              <li>booked인 시간은 슬롯 비활성화</li>
              <li>block인 시간은 슬롯 hidden</li>
            </ul>
          </li>
        </ul>
      </div>,
      <p key="9" className={styles['description-new']}></p>,
      <p key="10" className={styles['description-new']}>
        실제 서버는 구축하지 않았지만, Mock Service Worker를 사용해 서버 동작을 가정한 API를
        구현했습니다. 프론트엔드 코드는 실제 서버가 구축된 경우 API endpoint만 변경하면 바로 동작할
        수 있게 구현을 완료했습니다.
      </p>,
    ],
    third: [
      <p key="1" className={styles['description-new']}>
        이렇게 구현을 완료한 이후, 컴포넌트는 &#34;왜 이 날짜/시간이 선택 불가능한지&#34;를 계산하지
        않게 되었고, 순수하게 UI를 표현하는 역할만 담당하게 되었습니다.
      </p>,
      <p key="2" className={styles['description-new']}>
        또한, 예약 정책이 변경되더라도 이 정책은 도메인 로직에 적용되는 부분이기 때문에, 프론트엔드
        코드를 전혀 수정할 필요가 없게 되어 확장에도 유리한 구조가 되었습니다.
      </p>,
      <p key="3" className={styles['description-new']}>
        가장 크게 배운 점은, 프론트엔드는 이미 정의된 데이터 구조에 따라 UI를 수동적으로 개발하는
        역할이 아니라, 비즈니스 요구사항을 바탕으로 UI 구성에 효율적인 데이터 구조를 먼저 생각하고,
        기획자와 백엔드 개발자 등과의 소통에서 &#34;어떤 데이터가, 어떤 과정을 거쳐서, 어떻게
        전달되어야 하는지&#34;를 프론트엔드 관점에서 적극적으로 제안하는 것이 중요하다고 생각하게
        되었습니다.
      </p>,
      <div key="4" className={styles['separation-border']}></div>,
    ],
    smallTitle: { first: '문제 상황', second: '의사 결정', third: '결과' },
  },
  {
    title: '사용자 데이터 기반 UI/UX 및 서비스 운영 개선',
    first: [
      <p key="1" className={styles['description-new']}>
        실 사용자가 있는 헤어살롱 웹서비스를 개발하면서, 서비스가 실제 사용자 환경에서 어떻게
        운영되고 있는지를 지속적으로 확인하고, 이를 바탕으로 UI/UX와 서비스 개선 방향을 점검하는
        것이 중요하다고 느꼈습니다.
      </p>,
      <p key="2" className={styles['description-new']}>
        이를 위해 Google Analytics를 도입하여 사용 패턴, 사용자 분포 등의 데이터를 확인했고, 해당
        데이터를 통해 개선 인사이트를 얻고자 했습니다.
      </p>,
    ],
    second: [
      <p key="1" className={styles['description-new']}>
        헤어살롱 서비스의 특성상 짧은 시간 안에 서비스의 분위기와 주요 정보를 파악하고, 예약
        버튼으로 이어지는 흐름이 가장 중요하다고 판단했습니다.
      </p>,
      <p key="2" className={styles['description-new']}>
        따라서 텍스트로 정보를 전달하기보다는, 사용자 상호작용 UI와 이미지, 색, 폰트 등과 같은
        시각적 요소를 통해 서비스, 가격, 스타일 이미지, 위치 등 핵심 정보를 빠르고 직관적으로 훑을
        수 있도록 UI 설계 및 배치를 신경썼습니다.
      </p>,
      <p key="3" className={styles['description-new']}>
        구체적으로 다음과 같은 작업들을 수행했습니다.
      </p>,
      <ul key="4" className={`${styles['description-new']} ${styles['desc-bullet-big']}`}>
        <li>
          더 편리한 사용을 위해, 캐러셀, 아코디언, 캘린더, 3-step 예약 폼 등 사용자와 상호작용하는
          컴포넌트 구현
        </li>
        <li>
          디자인의 안정감/일관성이 떨어지지 않도록 디자인 시스템을 제작해 간격/색/폰트 등 규칙을
          통일
        </li>
        <li>로딩 속도 개선(인프라, 이미지, 번들)</li>
        <li>
          중복 클릭 방지
          <ul className={`${styles['description-new']} ${styles['desc-bullet']}`}>
            <li>
              인스타그램 게시물 로딩 중, 사용자가 load more 버튼을 여러 번 클릭할 경우 발생하던 중복
              요청 문제를 방지
            </li>
          </ul>
        </li>
      </ul>,
      <p key="3" className={styles['description-new']}>
        이러한 UI/UX 관련 개선 작업과 함께, 다음과 같은 사용자 성과 지표를 얻을 수 있었습니다.
      </p>,
      <p key="4" className={styles['description-new']}></p>,
      <div key="5">
        <a href="/img/joahair/users.png" target="_blank" rel="noreferrer">
          <Image
            className={styles['project-capture']}
            src="/img/joahair/users.png"
            width={1100}
            height={650}
            alt="projectCapture"
          />
        </a>
        <p className={styles['text-md']}>누적 방문자 11,000+명, 참여율 약 60% 이상</p>
      </div>,
      <p key="6" className={styles['description-new']}></p>,
      <div key="7">
        <a href="/img/joahair/search.png" target="_blank" rel="noreferrer">
          <Image
            className={`${styles['project-capture']} ${styles['last-capture']}`}
            src="/img/joahair/search.png"
            width={1300}
            height={650}
            alt="projectCapture"
          />
        </a>
        <p className={styles['text-md']}>검색 엔진 노출 96,000+회</p>
      </div>,
      <p key="8" className={styles['description-new']}></p>,
      <p key="9" className={styles['description-new']}>
        UI/UX 개선 전/후의 지표 비교 분석은 아니었기에 정확한 인과관계를 단정하기는 어렵지만, 초기
        설계 단계에서 목표로한 &#34;빠르게 훑는 구조&#34;가 실제 사용자 행동과 크게 어긋나지
        않았음을 지표로 확인할 수 있었고, UI/UX 설계 방향이 서비스에 적합했음을 간접적으로나마
        검증할 수 있었습니다.
      </p>,
    ],
    third: [
      <p key="1" className={styles['description-new']}>
        Google Analytics를 통해 확인한 주요 사용자 특성은 다음과 같았습니다.
      </p>,
      <div key="2">
        <a href="/img/joahair/country.png" target="_blank" rel="noreferrer">
          <Image
            className={styles['project-capture']}
            src="/img/joahair/country.png"
            width={1100}
            height={650}
            alt="projectCapture"
          />
        </a>
        <ul className={`${styles['description-new']} ${styles['desc-bullet-big']}`}>
          <li>
            헤어살롱이 호주에 위치함에 따라, 서비스 사용자의 약 95%가 호주에 집중되어 있었습니다.
            <ul className={`${styles['description-new']} ${styles['desc-bullet']}`}>
              <li>
                따라서, AWS 인프라와 Firebase 리전을 호주로 설정하고, CDN(AWS CloudFront)을 구성하여
                글로벌 서비스의 로딩 속도 개선 작업을 수행했습니다.
              </li>
            </ul>
          </li>
        </ul>
      </div>,
    ],
    smallTitle: {
      first: '문제 상황',
      second: '사용자 흐름을 고려한 UI/UX 설계 및 성과 지표 검증',
      third: '사용자 분포 분석 및 운영 개선',
    },
  },
];
