import "./App.css";
import Header from "./Mycomponents/Header"
import {Todos} from "./Mycomponents/Todos"
import {Footer} from "./Mycomponents/Footer"
import React, {useState} from 'react';

function App() {

  const onDelete =(todo) =>{
    console.log("I have been called",todo)

    setTodos(todos.filter((e) =>{
      return e!==todo;
    }))
  }
  
  const [todos , setTodos] = useState( [
    {
      sno: 1,
      title : "Go to the Market",
      desc: "You need to go to the market to get his job done 1"
    },
    {
      sno: 2,
      title : "Go to the Mall",
      desc: "You need to go to the market to get his job done 2"
    },
    {
      sno: 3,
      title : "Go to the School",
      desc: "You need to go to the market to get his job done 3"
    },
    {
      sno: 4,
      title : "Go to the Office",
      desc: "You need to go to the market to get his job done 4"
    }

  ]);

  return (
    <>
      <Header title="My Todos List" searchBar={true}/>
      <Todos todos ={todos} onDelete={onDelete} />
      <Footer/>
    </>
  );
}

export default App;
