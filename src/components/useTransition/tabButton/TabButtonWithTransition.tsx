import React, { useState, memo, useTransition, ReactNode } from "react";

type Webtoon = {
  title: string;
  rating: number;
};

type WebtoonList = {
  day: Webtoon[];
  reco: Webtoon[];
};

type Category = "day" | "reco" | "recent";

const webtoons: WebtoonList & { recent: Webtoon[] } = {
  day: [
    { title: "신의 탑", rating: 9.75 },
    { title: "유미의 세포들", rating: 9.62 },
    { title: "참교육", rating: 9.53 },
    { title: "전지적 독자 시점", rating: 9.82 },
    { title: "화산귀환", rating: 9.69 },
  ],
  reco: [
    { title: "나 혼자만 레벨업", rating: 9.84 },
    { title: "외모지상주의", rating: 5.4 },
    { title: "뷰티풀 군바리", rating: 9.44 },
    { title: "더 게이머", rating: 9.21 },
    { title: "열렙전사", rating: 9.58 },
  ],
  recent: [
    { title: "신의 탑", rating: 9.75 },
    { title: "더 게이머", rating: 9.21 },
    { title: "나 혼자만 레벨업", rating: 9.84 },
  ],
};

const recoWebtoon = Array.from({ length: 500 }, (_, i) => ({
  title: "나 혼자만 레벨업",
  rating: 9.84,
}));

function Explain() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>
        useTransition을 활용한 즉각적인 Tab 버튼 반응성(feat. 진행중인 렌더링
        중단)
      </h3>
      <div style={{ textAlign: "start" }}>
        <strong>
          예시 상황: 추천탭 클릭 → 렌더링이 진행되는 동안 다른 탭 클릭
        </strong>
        <p>로직 설명</p>
        <ul>
          <li>
            탭 클릭 이벤트 → 탭의 상태 변경 함수를 <b>긴급한 작업</b>으로 지정 &
            웹툰 리스트의 리렌더링을 유발하는 웹툰 상태 변경 함수를
            <b>startTransition으로 감싸 덜 긴급한 작업</b>으로 지정
          </li>
          <li>
            긴급한 작업인 탭 상태 변경을 먼저 진행하여 클릭한 탭 활성화 &
            useTransition의 pending을 통한 렌더링이 진행중인 상황 표시
          </li>
          <li>
            렌더링이 진행중일 때, 요일 또는 최근 본 탭 클릭 → js 엔진이 덜
            긴급한 렌더링을 진행중일 때, <b>새로운 이벤트 감지</b> → 긴급한 탭
            상태 변경 & 덜 긴급한 웹툰 리스트 렌더링
          </li>
          <li>
            js 엔진은 이전 렌더링 작업이 완료되지 않았지만 긴급한 작업이
            들어왔으므로 즉시 <b>이전 렌더링을 중단</b> → 긴급한 작업(탭 버튼
            변경)을 끝내고 새로운 웹툰 리스트 렌더링 시작
          </li>
        </ul>
        <b>
          얻을 수 있는 효과 : 상태 업데이트를 '긴급'과 '덜 긴급'으로 분리하여,
          느린 렌더링 중에도 UI의 즉각적인 반응성을 보장하고, 불필요한 중간
          렌더링은 중단시켜 보다 향상된 사용자 경험 제공
        </b>
        <br />
        <b style={{ display: "block", marginTop: "10px" }}>주의 사항!</b>
        <p>
          useTransition은 React의 **동시성 렌더링(Concurrent Rendering)**을
          기반으로 동작합니다. 렌더링을 효과적으로 중단시키려면, React
          스케줄러가 렌더링 과정 중간에 제어권을 되찾아와 더 긴급한 작업이
          있는지 확인할 수 있는 *틈*을 주어야 합니다. 즉, 하나의 컴포넌트 안에서
          중단 불가능한 거대한 동기적 작업(예: 수만 개의 배열을 map으로 처리)을
          실행하는 것보다, 여러 개의 독립적인 자식 컴포넌트를 렌더링하는 구조가
          useTransition의 효과를 극대화합니다. React는 각 자식 컴포넌트를
          렌더링하는 사이에 잠시 멈추고 다른 작업을 확인할 수 있기 때문입니다.
        </p>
      </div>
    </div>
  );
}

export function TabButtonWithTransition() {
  const btnMap: {
    title: string;
    category: Category;
  }[] = [
    {
      title: "요일",
      category: "day",
    },
    {
      title: "추천",
      category: "reco",
    },
    {
      title: "최근 본",
      category: "recent",
    },
  ];
  const [selectedBtn, setSelectedBtn] = useState<Category>("day");
  const [webtoonList, setWebtoonList] = useState(webtoons.day);
  const [pending, startTransition] = useTransition();

  const handleClick = async (category: Category) => {
    setSelectedBtn(category);

    startTransition(async () => {
      if (category === "reco") {
        setWebtoonList(recoWebtoon);
      } else {
        setWebtoonList(webtoons[category]);
      }
    });
  };

  return (
    <div>
      <Explain />
      <div style={{ display: "flex", gap: "20px" }}>
        {btnMap.map((item) => (
          <button
            key={item.category}
            style={{
              fontWeight: selectedBtn === item.category ? "bold" : "normal",
            }}
            onClick={() => handleClick(item.category)}
          >
            {item.title} {item.category === "reco" && `(Slow)`}
          </button>
        ))}
      </div>

      <div style={{ opacity: pending ? 0.5 : 1, marginTop: "20px" }}>
        {pending && <p>목록을 불러오는 중...</p>}
        <RenderWebtoon webtoons={webtoonList} />
      </div>
    </div>
  );
}

const WebtoonItem = memo(function WebtoonItem({
  webtoon,
}: {
  webtoon: { title: string; rating: number };
}) {
  const startTime = Date.now();
  while (Date.now() - startTime < 4) {}
  return (
    <li
      key={webtoon.title}
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 12px",
        marginBottom: "6px",
        border: "1px solid #ddd",
        borderRadius: "6px",
      }}
    >
      <span>{webtoon.title}</span>
      <span>⭐ {webtoon.rating.toFixed(2)}</span>
    </li>
  );
});

const RenderWebtoon = memo(function RenderWebtoon({
  webtoons,
}: {
  webtoons: { title: string; rating: number }[];
}) {
  return (
    <div style={{ marginBottom: "30px" }}>
      <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>{}웹툰</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {webtoons.map((toon) => {
          return <WebtoonItem webtoon={toon} />;
        })}
      </ul>
    </div>
  );
});
