import { useEffect, useState } from "react";

export default function Calculator() {
  function evaluateExpression(arr) {
    console.log(arr);
    let result = arr[0]; // Initialize result to the first number in the array

    for (let i = 1; i < arr.length; i += 2) {
      const operator = arr[i];
      const operand = arr[i + 1];

      console.log(operator);

      switch (operator) {
        case "+":
          result += operand;
          break;
        case "-":
          result -= operand;
          break;
        case "x":
        case "*":
          result *= operand;
          break;
        case "/":
          result /= operand;
          break;
        default:
          throw new Error("Invalid operator: " + operator);
      }
    }

    return result;
  }

  const [inputs, setinputs] = useState([0]);
  const handleNumber = (e) => {
    const lastInd = inputs.length - 1;
    const newL = inputs;
    const lastVal = inputs[lastInd] || 0;

    if (typeof lastVal === "number" || lastVal.split("").includes(".")) {
      const newVal =
        typeof e === "string" ||
        (e === 0 && lastVal && lastVal.toString().split("").includes("."))
          ? (lastVal.toString() || "0") + e.toString()
          : parseFloat(lastVal.toString() + e.toString());

      newL[lastInd] =
        typeof newVal === "number" ||
        newVal.split("").filter((e) => e === ".").length === 1
          ? newVal
          : lastVal;

      setinputs([...newL]);
    } else if (e === ".") {
      setinputs([...inputs, "0."]);
    } else {
      setinputs([...inputs, e]);
    }
  };

  const handleKey = (e) => {
    if (typeof e === "string") {
      const lastInd = inputs.length - 1;
      const lastVal = inputs[lastInd] || 0;
      if (e === "AC") {
        setinputs([0]);
      } else if (e === "=") {
        if (inputs.length % 2 === 0) {
          const val = inputs[inputs.length - 2];
          const op = inputs[inputs.length - 1];
          console.log(val);
          function calculate(obj) {
            switch (obj.op) {
              case "x":
                return obj.val * 2;
              case "+":
                return obj.val + obj.val;
              case "/":
                return obj.val / 2;
              default:
                return null; // or throw an error, depending on your needs
            }
          }
          const myObj = { op: op, val: val };
          const result = calculate(myObj);

          setinputs([result, op]);
        } else {
          setinputs([evaluateExpression(inputs)]);
        }
      } else if (e === ".") {
        handleNumber(".");
      } else if (e === "+/-") {
        const newA = inputs;
        newA[lastInd] = lastVal > 0 ? -lastVal : Math.abs(lastVal);
        setinputs([...newA]);
      } else if (e === "%") {
        const newA = inputs;
        newA[lastInd] = Math.round(lastVal / 100);
        setinputs([...newA]);
      } else {
        if (
          typeof lastVal === "string" &&
          lastVal.split("")[lastVal.split("").length - 1] === "."
        ) {
          const newA = inputs;
          newA[lastInd] = 0;
          setinputs([...newA, e]);
        } else {
          const newA = inputs;
          if (!["+", "-", "x", "/"].includes(e)) {
            newA[lastInd] = Number(lastVal);
          }
          if (typeof lastVal === "number") {
            console.log(newA);
            setinputs([...newA, e]);
          }
        }
      }
    } else if (typeof e === "number") {
      handleNumber(e);
    }
  };
  console.log(inputs);
  return (
    <section className="px-4 w-full mt-5">
      <div className="max-w-[26rem] mx-auto bg-neutral-300">
        {/* Place holder will be here */}
        <div className="grid py-4 bg-gray-500">
          {inputs.join(" ")}
          <p className="ml-auto px-4 text-4xl text-white">
            {
              inputs.filter(
                (e) => typeof e === "number" || e.split("").includes(".")
              )[
                inputs.filter(
                  (e) => typeof e === "number" || e.split("").includes(".")
                ).length - 1
              ]
            }
          </p>
        </div>
        {/* numbers will be here */}
        <div className="grid grid-cols-4">
          <div className="flex flex-col items-stretch">
            {["AC", 7, 4, 1].map((e) => (
              <Key onClick={() => handleKey(e)}>{e}</Key>
            ))}
          </div>
          <div className="flex flex-col items-stretch">
            {["+/-", 4, 5, 2].map((e) => (
              <Key onClick={() => handleKey(e)}>{e}</Key>
            ))}
          </div>
          <div className="flex flex-col items-stretch">
            {["%", 9, 6, 3].map((e) => (
              <Key onClick={() => handleKey(e)}>{e}</Key>
            ))}
          </div>
          <div className="flex flex-col items-stretch text-white bg-orange-400">
            {["/", "x", "-", "+"].map((e) => (
              <Key onClick={() => handleKey(e)}> {e}</Key>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-4">
          {[0, ".", "="].map((e) => (
            <Key onClick={() => handleKey(e)}> {e}</Key>
          ))}
        </div>
      </div>
    </section>
  );
}

function Key({ onClick, children }) {
  return (
    <div
      onClick={onClick}
      className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
    >
      {children}
    </div>
  );
}
