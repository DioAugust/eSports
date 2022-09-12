
interface ButtonProps {
  title: string;
}


function Button(props: ButtonProps) {

  return (
    <div>
      <button>{props.title}</button>
    </div>
  )
}


function App() {

  return (
    <div>
      <Button title="teste1" />
    </div>
  )
}

export default App
