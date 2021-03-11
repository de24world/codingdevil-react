import { useRef, useHistory } from "react";
import useFetch from "../hooks/useFetch";
export default function CreateWord() {
  const days = useFetch("http:.//localhost:3001/days");
  const history = useHistory();

  function onSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3001/words/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        day: dayRef.current.value,
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false
      })
    }).then((res) => {
      if (res.ok) {
        alert("created completed");
        history.push(`/day/${dayRef.current.value}`);
      }
    });
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onbSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placehoder="computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placehoder="컴퓨터" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              1
            </option>
          ))}
          <option>1</option>
          <option>2</option>
        </select>
      </div>
      <button>저장</button>
    </form>
  );
}
