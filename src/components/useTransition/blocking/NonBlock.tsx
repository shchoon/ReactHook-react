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
      setAccount(updateAccount);
    });
  };
  return (
    <div>
      <h4>Non-Blocking</h4>
      <span>달러 계산기</span>
      <CalculationInput action={onUpdateAccount} />
      <CalculatatedAccount isPending={isPending} account={account} />
    </div>
  );
}
