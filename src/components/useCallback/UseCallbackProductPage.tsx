import ShippingForm from "./ShippingForm";
import { useCallback } from "react";

type props = {
  theme: "dark" | "light";
  productId: number;
};

const post = (url: string, data: any) => {
  // post 요청을 보낸다고 가정...
  console.log(url);
  console.log(data);
};

export default function UseCallbackProductPage({ theme, productId }: props) {
  const handleSubmit = useCallback(
    (orderDetail: any) => {
      post("/product" + productId + "/buy", {
        orderDetail,
      });
    },
    [productId]
  );

  return (
    <div
      className="theme"
      style={{ backgroundColor: `${theme === "dark" ? "gray" : "white"}` }}
    >
      <h4>Product Component</h4>
      <img
        style={{ width: "30px", padding: "10px 0" }}
        src="/down-arrow.png"
        alt="down"
      />
      <p>props: form action</p>
      <p>
        theme가 변경되어 리렌더링될 때,
        <br />
        form action이 useCallback으로 감싸져 있어 form action이 새로 생성 ❌
        <br />
        memo로 감싸져 있는 From Component는 props이 변경되지 않아 리렌더링 ❌
      </p>
      <img
        style={{ width: "30px", padding: "10px 0" }}
        src="/down-arrow.png"
        alt="down"
      />
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}
