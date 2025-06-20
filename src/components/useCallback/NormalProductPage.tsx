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
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}
