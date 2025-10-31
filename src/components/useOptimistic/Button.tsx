import { useOptimistic, useState, useTransition } from "react";
import { toggleLike } from "./toggleLike";

export default function Button() {
  const [liked, setLiked] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [optimisticLiked, updateOptimisticLiked] = useOptimistic(
    liked,
    (state, newValue: boolean) => newValue
  );

  const handleClick = () => {
    updateOptimisticLiked(!optimisticLiked);

    startTransition(async () => {
      try {
        const newValue = await toggleLike(liked);
        setLiked(newValue);
      } catch (err: any) {
        // alert(err);
      }
    });
  };

  return (
    <>
      <button onClick={handleClick}>{optimisticLiked ? "👍" : "👎"}</button>
      {isPending && <p>loading...</p>}
      {!isPending && <p>{liked ? "좋아요 ❤️ " : "싫어요 💔"}</p>}
    </>
  );
}
