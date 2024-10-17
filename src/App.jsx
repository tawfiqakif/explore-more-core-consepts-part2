
import './App.css'
import Team from './team';

function App() {
  function handleClick (){
    alert('button clicked');
  }
  const handleClick2 = () => {
    alert ('button2 clicked');
  }

  return (
    <>
      
      <h1> React core consepts 2</h1>
      <Team></Team>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>Click me 2</button>
     
    </>
  )
}

export default App
