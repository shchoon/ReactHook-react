export async function postComment(comment: string) {
  await new Promise((r) => setTimeout(r, 1000));

  const randomFail = Math.random() < 0.5;

  if (randomFail) {
    throw new Error("서버 오류");
  }

  return {
    id: Date.now(),
    text: comment,
    sending: false,
  };
}
