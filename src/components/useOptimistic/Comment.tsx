import { useState, useCallback } from "react";
import CommentForm from "./CommentFrom";
import { postComment } from "./postComment";

export type Comments = {
  id: number;
  text: string;
  sending: boolean;
};

export default function Comment() {
  const [comments, setComments] = useState<Comments[]>([
    {
      id: 1,
      text: "첫번째 댓글입니다.",
      sending: false,
    },
  ]);

  const postCommentAction = useCallback(async (formData: FormData) => {
    const newComment = await postComment(formData.get("comment") as string);

    setComments((prev) => [newComment, ...prev]);
  }, []);

  console.log("parent");

  return (
    <CommentForm comments={comments} postCommentAction={postCommentAction} />
  );
}
