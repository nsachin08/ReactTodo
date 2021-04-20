import React from 'react'
import {useState} from 'react';

export const AddTodo = ({addTodo}) => {

  const [Title, setTitle] = useState("");

  const [desc, setdesc] = useState("");
  
  const submit = (e) =>{

      e.preventDefault();
      console.log(Title , desc)
      if(!Title || !desc)
      {
        alert("Title / Description cannot be blank");
      }

      addTodo(Title,desc);

  }

    return (
        <div className="container my-3">
            <h3 className="text-center">Add a Todo</h3>
            <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="Title" className="form-label">Todo Title</label>
    <input type="text" value={Title} onChange ={(e) =>{setTitle(e.target.value)} } className="form-control" id="Title" aria-describedby="emailHelp" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Desc</label>
    <input type="text" value={desc} onChange={(e)=>setdesc(e.target.value)} className="form-control" id="desc" />
  </div>
  
  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
        </div>
    )
}
