import { useState, useCallback, useMemo } from "react";
import { ChileArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("app");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickUp = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), []);

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickUp}>表示</button>
      <ChileArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
