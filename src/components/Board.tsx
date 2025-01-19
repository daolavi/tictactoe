import {Square} from "./Square.tsx";

interface BoardProps {
  squares: (string | null)[]
  onClick: (i: number) => void
}

export const Board = (props: BoardProps) => {
  const {
    squares,
    onClick,
  } = props

  const renderSquare = (i: number) => {
    return (
      <Square index={i} value={squares[i]} onClick={() => onClick(i)}/>
    )
  }

  return (
    <div>
      <div className="board-row"> {renderSquare(0)} {renderSquare(1)} {renderSquare(2)} </div>
      <div className="board-row"> {renderSquare(3)} {renderSquare(4)} {renderSquare(5)} </div>
      <div className="board-row"> {renderSquare(6)} {renderSquare(7)} {renderSquare(8)} </div>
    </div>)
}