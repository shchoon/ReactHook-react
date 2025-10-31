"use server";

export async function toggleLike(curLiked: boolean) {
  await new Promise((r) => setTimeout(r, 1000));

  const shouldFail = Math.random() < 0.5; // 50% 확률로 실패

  if (shouldFail) {
    throw new Error("서버 오류");
  }
  return !curLiked;
}
