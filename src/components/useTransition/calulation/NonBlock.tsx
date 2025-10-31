import { useTransition, useState } from "react";
import calculate from "../calculate";
import CalculationInput from "../_components/CalcaulationInput";
import CalculatatedAccount from "../_components/CalculatedAcount";

export default function NonBlock() {
  const [account, setAccount] = useState(1);
  const [isPending, startTransition] = useTransition();

  const onUpdateAccount = async (account: number) => {
    startTransition(async () => {
      const updateAccount = (await calculate(account)) as number;
      startTransition(() => {
        setAccount(updateAccount);
      });
    });
  };
  return (
    <div>
      <h4>Non-Blocking</h4>
      <span>달러 계산기</span>
      <CalculationInput action={onUpdateAccount} />
      <CalculatatedAccount isPending={isPending} account={account} />
      <p
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        1, 2, 3을 연속으로 입력
        <img style={{ width: "20px" }} src="/down-arrow.png" alt="down" />
        <br />
        startTransition을 적용하여 달러를 계산하는 작업이 모두 긴급하지 않은
        일이라고 판단
        <img style={{ width: "20px" }} src="/down-arrow.png" alt="down" />
        <br />
        1 대한 계산을 백그라운드에서 진행 → 2 입력 → 1에 대한 작업 취소 후 2에
        대한 계산 시작 → ... 반복 → 3에 대한 작업 진행
        <img style={{ width: "20px" }} src="/down-arrow.png" alt="down" />
        <br />
        가장 최근 입력값인 3에 대한 결과만 렌더링 → 보다 향상된 사용자 경험 제공
        <br />
        <strong>
          만약 계산이 오래걸리는 작업이라면 input의 입력이 끊기지 않게
          유지하면서 연속적인 입력에 대해 가장 최근 값에 대한 계산만 진행하므로
          성능 최적화에 기여
        </strong>
      </p>
    </div>
  );
}
