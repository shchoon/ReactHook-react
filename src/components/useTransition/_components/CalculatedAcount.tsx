type Props = {
  isPending: boolean;
  account: number;
};

export default function CalculatatedAccount({ isPending, account }: Props) {
  return (
    <div>
      {isPending ? <div>loading...</div> : <div>💲: {account * 1430}</div>}
    </div>
  );
}
