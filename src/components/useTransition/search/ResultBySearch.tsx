import { memo } from "react";

function RenderItem({ items }: { items: string[] }) {
  let itemList = [];

  for (let i = 0; i < items.length; i++) {
    let startTime = Date.now();
    while (Date.now() - startTime < 1) {
      // 의도적인 지연
    }
    itemList.push(<li>{items[i]}</li>);
  }

  return <ul>{itemList}</ul>;
}

function ResultBySearch({ items }: { items: string[] }) {
  if (items.length === 0) {
    return <div>검색 결과가 없습니다.</div>;
  }

  return <RenderItem items={items} />;
}
export default memo(ResultBySearch);
