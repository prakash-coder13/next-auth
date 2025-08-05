"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import styles from "./calculator.module.css";

const CalculatorPage = () => {
  const digits = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  const operations = ["+", "-", "x", "/"];
  const dot = ".";
  const equal = "=";
  const [screen, setScreen] = useState("0");
  const [isOpExpected, setIsOpExpected] = useState(false);
  interface ClickHandlerEvent extends React.MouseEvent<HTMLButtonElement> {}
  const [theStack, setTheStack] = useState<string[]>([]);
  const clickHandler = (e: ClickHandlerEvent): void => {
    setIsOpExpected(true);
    const value = e.currentTarget.value;
    setScreen((prev) => {
      if (prev === "0") {
        return value;
      }
      return prev + value;
    });
    setTheStack((prev) => {
      if (prev.length === 0 && value === "0") return [];
      else {
        return [...prev, value];
      }
    });
  };

  const opHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpExpected(false);
    const value = e.currentTarget.value;
    setScreen((prev) => {
      return prev + value;
    });
    setTheStack((prev) => {
      if (prev.length === 0) return [value];
      else {
        return [...prev, value];
      }
    });
  };

  const delHandler = () => {
    console.log("Delete called ");
    if (theStack.length === 0) {
      return;
    }
    setScreen((prev) => {
      console.log("prev ", prev);
      if (prev === "0") return "0";
      if (prev.length === 1) {
        return "0";
      }
      return prev.substring(0, prev.length - 1);
    });
    setTheStack((prev) => {
      console.log("delete , prev is ", prev);
      const sliced = prev.slice(0, prev.length - 1);
      console.log("sliced ", sliced);
      return sliced;
    });
    const topOfStack = theStack.at(-1);
    if (topOfStack && operations.includes(topOfStack)) {
      setIsOpExpected(true);
    }
  };

  const calculate = () => {
    console.log("Will  pop the stack ");
  };

  const clear = () => {
    setScreen("0");
    setTheStack([]);
  };
  return (
    <>
      <div>STACK {theStack.length}</div>
      
      <div className={styles.container}>
        <div className="appname">A Simple Calculator</div>
        <div className={styles.calculator}>
          <div className={styles.screen}>
            <label className={styles.expression}>{screen}</label>
          </div>
          <div className={styles.inputs}>
            <div className={styles.top}>
              <Button
                className={`${styles.btn} ${styles.borderless} ${styles.uppercase}`}
                onClick={delHandler}
                disabled={theStack.length === 0}
              >
                Delete
              </Button>
              <Button
                className={`${styles.btn} ${styles.borderless} ${styles.uppercase}`}
                onClick={clear}
                disabled={theStack.length === 0}
              >
                Clear
              </Button>
            </div>
            <div className={styles.bottom}>
              <div className={styles.left}>
                {digits.map((digit) => {
                  return (
                    <Button
                      onClick={clickHandler}
                      key={digit}
                      value={digit}
                      className={styles.btn}
                    >
                      {digit}
                    </Button>
                  );
                })}
                <Button className={styles.btn} value="." onClick={clickHandler}>
                  {dot}
                </Button>
                <Button className={styles.btn} value="=" onClick={calculate}>
                  {equal}
                </Button>
              </div>
              <div className={styles.right}>
                {operations.map((op) => {
                  return (
                    <Button
                      onClick={opHandler}
                      key={op}
                      value={op}
                      className={styles.btn}
                      disabled={!isOpExpected || theStack.length === 0}
                    >
                      {op}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatorPage;
