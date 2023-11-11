import logo from './logo.svg';
import './App.css';

function App() {
  const subFunc=(e)=>{
e.preventDefault();
console.log(e.formData;);
  }
  return (
    <div className="App">
   <form onSubmit={subFunc}>
    <input type="text" name='name' />
    <br/>
    <input type="text" name='surename' />
    <br/>
    <input type="submit" value={'submit'} />
   </form>
    </div>
  );
}

export default App;
