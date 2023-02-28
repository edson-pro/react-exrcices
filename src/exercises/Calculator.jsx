import { useEffect, useState } from "react";

export default function Calculator() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setPreState("");
    }
    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);

  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (curState === "") return;
    if (preState !== "") {
      equals();
    } else {
      setPreState(curState);
      setCurState("");
    }
  };

  const equals = () => {
    if (total) {
      setTotal(false);
      return;
    }
    if (curState === "" || preState === "" || operator === null) return;
    let cal;
    switch (operator) {
      case "/":
        if (curState === "0") {
          cal = "NaN";
        } else {
          cal = String(parseFloat(preState) / parseFloat(curState));
        }
        break;

      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "x":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      default:
        return;
    }
    setInput("");
    setPreState(cal);
    setCurState("");
  };

  const minusPlus = () => {
    if (curState.charAt(0) === "-") {
      setCurState(curState.substring(1));
    } else {
      setCurState("-" + curState);
    }
  };
  const percent = () => {
    preState
      ? setCurState(String((parseFloat(curState) / 100) * preState))
      : setCurState(String(parseFloat(curState) / 100));
  };

  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
    setOperator(null);
  };

  return (
    <section className="px-4 w-full mt-5">
      <div className="max-w-[26rem] mx-auto bg-neutral-300">
        {/* Place holder will be here */}
        <div className="grid py-4 bg-gray-500">
          <p className="ml-auto px-4 text-4xl text-white">
            {input !== "" || input === "0" ? input : preState}
          </p>
        </div>
        {/* numbers will be here */}
        <div className="grid grid-cols-4">
          <div className="flex flex-col items-stretch">
            <div
              onClick={reset}
              className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
            >
              AC
            </div>
            <div
              onClick={inputNum}
              className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
            >
              7
            </div>
            <div
              onClick={inputNum}
              className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
            >
              4
            </div>
            <div
              onClick={inputNum}
              className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
            >
              1
            </div>
          </div>
          <div className="flex flex-col items-stretch">
            <div
              onClick={minusPlus}
              className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
            >
              +/-
            </div>
            <div
              onClick={inputNum}
              className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
            >
              8
            </div>
            <div
              onClick={inputNum}
              className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
            >
              5
            </div>
            <div
              onClick={inputNum}
              className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
            >
              2
            </div>
          </div>
          <div className="flex flex-col items-stretch">
            <div
              onClick={percent}
              className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
            >
              %
            </div>
            <div
              onClick={inputNum}
              className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
            >
              9
            </div>
            <div
              onClick={inputNum}
              className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
            >
              6
            </div>
            <div
              onClick={inputNum}
              className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
            >
              3
            </div>
          </div>
          <div
            onClick={operatorType}
            className="flex flex-col items-stretch text-white bg-orange-400"
          >
            <div className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500">
              /
            </div>
            <div
              onClick={operatorType}
              className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
            >
              x
            </div>
            <div
              onClick={operatorType}
              className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
            >
              -
            </div>
            <div
              onClick={operatorType}
              className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
            >
              +
            </div>
          </div>
        </div>
        {/* Footer and the stuff will be here */}
        <div className="grid grid-cols-4">
          <div
            onClick={inputNum}
            className="col-span-2 border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
          >
            0
          </div>
          <div className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500">
            .
          </div>
          <div
            onClick={equals}
            className=" border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
          >
            =
          </div>
        </div>
      </div>
    </section>
  );
}
