import Header from "./Header"

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      excercises: 7
    },
    {
      name: 'State of a component',
      excercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}>
    </div>
  )
}

export default App