import ShippingForm from "./ShippingForm";

type props = {
  theme: "dark" | "light";
  productId: number;
};

const post = (url: string, data: any) => {
  // post 요청을 보낸다고 가정...
  console.log(url);
  console.log(data);
};

export default function NormalProductPage({ theme, productId }: props) {
  const handleSubmit = (orderDetail: any) => {
    post("/product" + productId + "/buy", {
      orderDetail,
    });
  };
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
        form action 함수가 매번 새로 생성되어 From Component도 리렌더링
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
