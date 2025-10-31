import { useOptimistic, startTransition, useRef, memo } from "react";
import { Comments } from "./Comment";

function CommentForm({
  comments,
  postCommentAction,
}: {
  comments: Comments[];
  postCommentAction: (formData: FormData) => Promise<void>;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [optimisticComment, addOptimisticComment] = useOptimistic(
    comments,
    (currentComments, newComment: string) => {
      const newOptiisticComment = {
        id: Date.now(),
        sending: true,
        text: newComment,
      };

      return [newOptiisticComment, ...currentComments];
    }
  );

  console.log(optimisticComment);
  const formAction = (formData: FormData) => {
    const newComment = formData.get("comment") as string;
    addOptimisticComment(newComment);

    // form 필드 초기화
    if (formRef.current) {
      formRef.current.reset();
    }
    startTransition(async () => {
      try {
        await postCommentAction(formData);
      } catch (err) {
        alert(err);
      }
    });
  };

  return (
    <div>
      <form ref={formRef} action={formAction}>
        <input name="comment" />
        <button type="submit">등록</button>
      </form>
      {optimisticComment.map((comment) => (
        <p key={comment.id}>
          {comment.text} {comment.sending && "pending..."}
        </p>
      ))}
    </div>
  );
}

export default memo(CommentForm);
