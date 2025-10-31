import { useState } from "react";
import calculate from "../calculate";
import CalculationInput from "../_components/CalcaulationInput";
import CalculatatedAccount from "../_components/CalculatedAcount";

export default function Block() {
  const [account, setAccount] = useState(1);
  const [isPending, setIsPending] = useState(false);

  const onUpdateAccount = async (account: number) => {
    setIsPending(true);
    const updateAccount = (await calculate(account)) as number;
    setIsPending(false);
    setAccount(updateAccount);
  };

  return (
    <div>
      <h4>Blocking</h4>
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
        startTransition을 적용하지 않았으므로 달러를 계산하는 작업이 모두 긴급한
        일이라고 판단
        <img style={{ width: "20px" }} src="/down-arrow.png" alt="down" />
        <br />
        1, 2, 3에 대해 모두 계산하고 모든 결과값을 렌더링
        <img style={{ width: "20px" }} src="/down-arrow.png" alt="down" />
        <br />
        결과값이 연속으로 3번 렌더링되므로 사용자가 버벅거리는 느낌을 받을 수
        있음
        <br />
        <strong>
          만약 계산이 오래걸리는 작업이라면 여러번 리렌더링을 유발하고 사용자는
          순간적으로 멈추거나 입력이 끊기는 듯한 버벅거림을 경험하게 됨
        </strong>
      </p>
    </div>
  );
}
