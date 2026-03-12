import React from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [A, setA] = React.useState(0);
  const [B, setB] = React.useState(0);
  const [Result, setResult] = React.useState("");
  const [Invalid, setInvalid] = React.useState(false);

  /* You will need some function to handle the key pressed and button events */
  function onA(event){
    setA(event.target.value);
   }

   function onB(event){
    setB(event.target.value);
   }

   function onCompute(){
    if (!isNaN(A) && !isNaN(B)) {
      setResult(Number(A) + Number(B));
      setInvalid(true);
    } else {
      setResult("Error: Invalid input");
      setInvalid(false);
    }
   }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input value={Result} disabled />
      <button onClick={onCompute}>Compute</button>
    </main>
  );
}

export default App;
