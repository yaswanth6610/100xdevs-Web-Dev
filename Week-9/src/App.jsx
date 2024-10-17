import { set } from "mongoose";
import { useState, useEffect } from "react";

//condintional renderening
function App() {
  // const [visible, isVisible] = useState(true);
  const [count, setCount] = useState(0);

  // useEffect(function () {
  //   setInterval(function () {
  //     isVisible((v) => !v);
  //   }, 5000);
  // }, []);

  function increase() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <h1>Hi There!</h1>
      <Counter count={count}></Counter>
      <button onClick={increase}> increase Count</button>
    </div>
  );
}

function Counter(props) {
  // const [count, setCount] = useState(0);

  //hooking into the life cycle events of react

  // setInterval(function () {
  //   setCount(count + 1);
  // }, 1000);

  // useEffect(function () {
  //   let clock = setInterval(function () {
  //     console.log("inside interval");
  //     setCount((count) => count + 1);
  //   }, 1000);

  //   return function () {
  //     console.log("un mounted");
  //     clearInterval(clock);
  //   };
  // }, []); //dependency array

  // function increaseCount() {
  //   setCount(count + 1);
  // }

  useEffect(function () {
    console.log("mount");

    return function () {
      console.log("unmount");
    };
  }, []);

  useEffect(
    function () {
      console.log("re-render");

      return function () {
        console.log("clean up");
      };
    },
    [props.count]
  );

  return (
    <div>
      <h1>counter {props.count}</h1>
      <br></br>
    </div>
  );
}

export default App;
