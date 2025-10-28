"use server";

export async function action(prevState: any, queryData: any) {
  const itemId = queryData.get("itemId");
  console.log(itemId, typeof itemId);

  if (Number(itemId) === 11) {
    return "장바구니에 추가되었습니다.";
  } else {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return "해당 상품은 품절되었습니다.";
  }
}
