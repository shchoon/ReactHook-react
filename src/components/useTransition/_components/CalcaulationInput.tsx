type Props = {
  action: (num: number) => Promise<void>;
};

export default function CalculationInput({ action }: Props) {
  const handleChange = async (event: any) => {
    await action(event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        defaultValue={1}
        placeholder="원화를 입력해주세요"
        onChange={handleChange}
      />
    </div>
  );
}
