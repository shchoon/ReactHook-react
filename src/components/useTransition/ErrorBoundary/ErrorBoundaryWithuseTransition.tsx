import { memo, useState, useTransition } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { start } from "repl";

type Webtoon = {
  title: string;
  rating: number;
};

type WebtoonList = {
  day: Webtoon[];
  reco: Webtoon[];
};

const webtoons: WebtoonList = {
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
};

export function ErrorBoundaryWithuseTransition() {
  return (
    <div>
      <WebtoonCom webtoons={webtoons} />
    </div>
  );
}

function Fallback({
  title,
  reload,
}: {
  title: string;
  reload: (type: "day" | "reco") => void;
}) {
  let type: "day" | "reco";
  if (title === "추천") {
    type = "reco";
  } else {
    type = "day";
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <strong>{title} 웹툰을 불러오는데 오류가 발생했습니다.</strong>
      <button onClick={() => reload(type)}> 다시 불러오기</button>
    </div>
  );
}

function WebtoonCom({ webtoons }: { webtoons: WebtoonList }) {
  const [webtoonList, setWebtoonList] = useState(webtoons);
  const [pending, startTransition] = useTransition();
  //   const [isClicked, setIsClicked] = useState(false);
  //   const [errType, setErrType] = useState<"reco" | "day">();

  const handleReload = (type: "day" | "reco") => {
    setWebtoonList((prev) => ({
      ...prev,
      [type]: webtoons[type],
    }));
  };

  console.log(webtoonList);

  return (
    <div style={{ display: "flex" }}>
      {/* 요일별 웹툰 */}
      <section style={{ width: "50%", border: "1px solid blue" }}>
        <ErrorBoundary
          fallbackRender={({ error, resetErrorBoundary }) => (
            <Fallback
              title="수요"
              reload={() => {
                handleReload("day");
                resetErrorBoundary();
              }}
            />
          )}
        >
          <RenderWebtoon webtoons={webtoonList.day} title="수요" />
          <button
            onClick={async () => {
              const data = (await getWebtoon("day")) as any;
              setWebtoonList((prev) => ({
                ...prev,
                day: [...prev.reco, data],
              }));
            }}
          >
            더보기
          </button>
        </ErrorBoundary>
      </section>
      {/* 추천 웹툰 */}
      <section style={{ width: "50%", border: "1px solid blue" }}>
        <ErrorBoundary
          fallbackRender={({ error, resetErrorBoundary }) => (
            <Fallback
              title="추천"
              reload={() => {
                handleReload("reco");
                resetErrorBoundary();
              }}
            />
          )}
        >
          <RenderWebtoon webtoons={webtoonList.reco} title="추천" />
          <button
            disabled={pending}
            onClick={async () => {
              const data = (await getWebtoon("reco")) as any;
              startTransition(() => {
                setWebtoonList((prev) => ({
                  ...prev,
                  reco: [...prev.reco, data],
                }));
              });
            }}
          >
            더보기
          </button>
        </ErrorBoundary>
      </section>
    </div>
  );
}

const RenderWebtoon = memo(function RenderWebtoon({
  webtoons,
  title,
}: {
  webtoons: { title: string; rating: number }[];
  title: string;
}) {
  return (
    <div style={{ marginBottom: "30px" }}>
      <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>{title}웹툰</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {webtoons.map((toon, index) => {
          const startTime = Date.now();
          while (Date.now() - startTime < 100) {
            // 의도적인 지연
          }
          return (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px 12px",
                marginBottom: "6px",
                border: "1px solid #ddd",
                borderRadius: "6px",
              }}
            >
              <span>{toon.title}</span>
              <span>⭐ {toon.rating.toFixed(2)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

const getWebtoon = async (type: "day" | "reco") => {
  let title = type === "day" ? "수요" : "추천";
  return { title: "나 혼자만 레벨업", rating: null };
  //   return { error: `${title} 웹툰을 불러오는데 오류가 발생했습니다.` };
  // await new Promise(r => setTimeout(r, 1000))
  //   throw new Error(`${title} 웹툰을 불러오는데 오류가 발생했습니다.`);
};
