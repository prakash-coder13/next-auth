"use client";
import { useState } from "react";
import styles from "./Board.module.css";
const Board = () => {
  const [boardState, setBoardState] = useState(new Array(9).fill(""));
  const [nextPlayer, setNextPlayer] = useState("X");
  const [winner, setWinner] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (index: number) => {
    setBoardState((prev) => {
      const newState = [...prev];
      newState[index] = nextPlayer;
      const winner = getWinner(newState, nextPlayer);
      const gameOver = isGameOver(newState);
      setGameOver(gameOver);

      if (winner) {
        setWinner(winner);
        setGameOver(true);
      }
      setNextPlayer(nextPlayer === "X" ? "O" : "X");
      return newState;
    });
  };

  const isGameOver = (board: string[]) => {
    console.log("isGame over? current board ", board);
    return !board.includes("");
  };

  const resetBoard = () => {
    setBoardState(new Array(9).fill(""));
    setNextPlayer("X");
    setWinner("");
    setGameOver(false);
  };

  const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const getWinner = (board: string[], player: string) => {
    return winningPositions.some((pos) => pos.every((p) => board[p] === player))
      ? player
      : null;
  };

  return (
    <>
      <div className={styles["game-container"]}>
        <h1 className={styles["board-title"]}>Let&apos;s Play Tic Tac Toe</h1>
        {gameOver ? (
          <div className={styles.info}>
            Game Over{" "}
            {winner ? (
              <span className={styles["winner-msg"]}>
                Player {winner} wins!! 🎉
              </span>
            ) : (
              <div> 🤝 It is a tie!</div>
            )}
          </div>
        ) : (
          <div className={styles.info}>Next Player : {nextPlayer}</div>
        )}

        <div className={styles.board}>
          {boardState.map((v, index) => {
            return (
              <button
                key={index}
                className={`${styles.cell} ${
                  boardState[index]
                    ? styles["cell-".concat(boardState[index])]
                    : ""
                }`}
                value={v}
                disabled={!!v || gameOver}
                onClick={() => handleClick(index)}
              >
                {v}
              </button>
            );
          })}
        </div>
        <div className={styles["button-wrapper"]}>
          <button className={styles.reset} onClick={resetBoard}>
            Reset Board
          </button>
        </div>
      </div>
    </>
  );
};

export default Board;
