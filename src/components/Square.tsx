interface SquareProps {
  value: string | null
  onClick: () => void
  index: number
}

export const Square = (props: SquareProps) => {
  return (
    <button data-cy={`square-${props.index}`} className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}