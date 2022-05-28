import Button from "./Button";
import Appstyles from "./App.module.css";
import Btnstyles from "./Button.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeword] = useState("");
  const onk = () => setValue((sum) => sum + 1);
  const onChange = (event) => setKeword(event.target.value);

  useEffect(() => {
    console.log("I run only once, like API");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' add five times.", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  return (
    <div>
      <h3 className={Appstyles.title}>Welcome Back!!!!</h3>
      <hr></hr>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
      <h2>{counter}</h2>
      <Button text={"Continue~!"} />
      <button onClick={onk} className={Btnstyles.btn}>
        clickme
      </button>
    </div>
  );
}

export default App;
