import { useState } from "react";

export default function Word({ word }) {
  const [isShow, setIsShow] = useState(false);
  function toggleShow() {
    setIsShow(!isShow);
  }

  return (
    <tr>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>
          뜻보기 {isShow ? "숨기기" : "보기"}{" "}
        </button>
        <button class="btn_del">삭제</button>
      </td>
    </tr>
  );
}
