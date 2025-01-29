// import './App.css';
import { useState, useEffect } from "react";

function Home({todos, setTodos}) {

 const [value, setValue] = useState('3');
 const [input2, setInput2] = useState('3');
 const [output, setOutput] = useState('');

 
useEffect(() => {
    console.log("Mount");
    return(()=> {
        console.log("unmount")
    })
}, []);

useEffect(() => {
    setOutput(parseInt(value) + parseInt(input2));
}, [value, input2]);

 const onChange = (event) => {
    setValue(event.target.value);
  };
  const onChange2 = (event) => {
    setInput2(event.target.value);
  };

  return (
    <div className="home-container">
      <div>Input value: {value}</div>
      <input value={value} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
      <input defaultValue={output}/>
      <h6>todos</h6>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;