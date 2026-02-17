const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
      Total: {total}
    </div>
  )
}

export default Total
