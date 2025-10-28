import { useActionState } from "react";
import { action } from "./action";

function AddToCartForm({ item, itemId }: { item: string; itemId: number }) {
  const [message, formaAction, isPending] = useActionState(action, null);

  return (
    <form action={formaAction}>
      <h2>{item}</h2>
      <input type="hidden" name="itemId" value={itemId} />
      <button type="submit">add to cart</button>
      <br />
      {isPending ? "loading..." : message}
    </form>
  );
}

export default function ActionStateform() {
  return (
    <>
      <AddToCartForm item="청바지(블랙)" itemId={11} />
      <AddToCartForm item="청바지(진청)" itemId={12} />
    </>
  );
}
