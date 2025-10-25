import { useEffect, useState } from "react";
import { Toast } from "../components/Toast";

export default function ToppingForm() {
  const [isOpenToast, setIsOpenToast] = useState(false);
  const [toastMess, setToastMess] = useState("");
  const [toppingList, setToppingList] = useState([
    { title: "츠지 추가", price: 500, chekced: false },
    { title: "계란 추가", price: 1000, chekced: false },
    { title: "차슈 추가", price: 1500, chekced: false },
    { title: "면 추가", price: 1000, chekced: false },
    { title: "파 추가", price: 300, chekced: false },
    { title: "마늘 추가", price: 200, chekced: false },
    { title: "매운소스 추가", price: 400, chekced: false },
  ]);

  const handleCheck = (title: string) => {
    const updateToppingList = toppingList.map((item) => {
      if (item.title === title) {
        return {
          ...item,
          chekced: !item.chekced,
        };
      } else {
        return item;
      }
    });
    console.log(updateToppingList);

    setToppingList(updateToppingList);
  };

  const showToast = (message: string) => {
    setIsOpenToast(true);
    setToastMess(message);
  };

  const addCart = () => {
    const overTopping = toppingList.filter((item) => item.chekced).length > 3;

    if (overTopping) {
      showToast("최대 3개까지 선택 가능합니다.");
    } else {
      showToast("해당 상품을 장바구니에 담았습니다.");
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <div style={{ height: "2000px" }}>
        <h2>Toast</h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            width: "200px",
            margin: "0 auto",
          }}
        >
          <div>
            <strong>토핑</strong> 최대 3개
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              textAlign: "left",
            }}
          >
            {toppingList.map((item) => (
              <label
                id={item.title}
                // onClick={() => {
                //   handleCheck(item.title);
                // }}
              >
                <input
                  type="checkbox"
                  onChange={() => handleCheck(item.title)}
                />
                {item.title} +{item.price}
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            console.log("addCart");
            addCart();
          }}
        >
          장바구니 담기
        </button>
      </div>
      {isOpenToast && (
        <Toast
          id={1}
          message={toastMess}
          isOpen={isOpenToast}
          onClose={() => {
            setIsOpenToast(false);
          }}
          duration={2000}
        />
      )}
    </>
  );
}
