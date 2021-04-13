
import Title from './components/Title'
import List from './components/List'
import InputField from './components/InputField'
import {useState} from 'react'

function App() {
    const[inputText, setInputText] = useState("");
    const[todos, setTodos] = useState([])
  return (
    <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
       <Title/>
       <InputField setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos} />
       <div className="p-2 mx-4 border-black-25 border-bottom"></div>
       <List todos={todos} setTodos={setTodos}/>
     </div>
  );
}

export default App;
