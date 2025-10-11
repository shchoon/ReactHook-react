export default async function Calculate(account: number) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(account), 2000);
  });
}
