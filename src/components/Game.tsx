import {Board} from "./Board.tsx";
import {useEffect, useState} from "react";

export const Game = () => {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null))
  const [currenPlayer, setCurrenPlayer] = useState('X')
  const [winner, setWinner] = useState<string | null>(null)

  useEffect(() => {
    const winner = checkWinner(squares)
    console.log(winner)
    setWinner(winner)
  }, [squares])

  return (<>
    <div className="game">
      <div className="game-board">
        <Board squares={squares} onClick={(i: number) => {
          if (!winner && !squares[i]) {
            squares[i] = currenPlayer
            setSquares([...squares])
            setCurrenPlayer(currenPlayer == 'X' ? 'O' : 'X')
          }
        }}/>
      </div>
      <div className="game-info">
        <div>Current player: {currenPlayer}</div>
        <div>Winner: {winner}</div>
        <div>
          <button onClick={() => {
            setSquares(Array(9).fill(null))
            setCurrenPlayer('X')
            setWinner(null)
          }}>Reset Game</button>
        </div>
      </div>
    </div>
  </>)
}

const checkWinner = (squares: (string | null)[]) => {
  const cases = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
  ]

  for (let i = 0; i < cases.length; i++) {
    const [a, b, c] = cases[i]
    if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
      return squares[a]
    }
  }

  return null
}