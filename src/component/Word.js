export default function Word({ word }) {
  return (
    <tr>
      <td>{word.eng}</td>
      <td>{word.kor}</td>
      <td>
        <button> 뜻보기 </button>
        <button class="btn_del">삭제</button>
      </td>
    </tr>
  );
}
