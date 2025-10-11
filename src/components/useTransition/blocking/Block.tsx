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
    </div>
  );
}
