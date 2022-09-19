import './App.css';
import React , { useState } from 'react'

function App() {

  const [todo, setTodo] = useState([{ id: 1, title:'buy', state: true, des: 'start' }, 
  { id: 2, title: 'buy', state: true, des: 'new' }, 
  { id: 3, title: 'buy', state: false, des: 'old' }
  ]);
  const [form,setForm] =useState({title:"",des:""});
  const [mode,setMode] =useState('add');
  const deleteHandler=(id)=>{
    setTodo(todo.filter(item => item.id !== id));
  }
  const checkHandler =(id)=>{
    setTodo(todo.map(todo =>(
      todo.id === id ? {...todo,state:!todo.state}:todo
    )))
  }
  const inputHandler =(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const addHandler =(e)=>{
    e.preventDefault();
    if(mode==='add'){
      setTodo([...todo,{id:Math.floor(Math.random()*1000),title:form.title,des:form.des,state:false}])
    }
    else{
      setTodo(todo.map(todo => todo.id === form.id ? form : todo))
    }
    setForm({
      title:'',
      des:''
    })
    setMode('add');
  }
  const updateHandler =(todo)=>{
    setForm(todo);
    setMode('update');
  }
  return (
    <div>
        <form>
          <input onChange={inputHandler} name='title'/>
          <input onChange={inputHandler} name='des'/>
          <button type={"submit"} onClick={addHandler}>submit</button>
        </form>
        {todo.map(todo =>(
          <div style={{border:"1px solid green",margin:"20px", padding:"10px"}}>
            <div>
              id:{todo.id}
            </div>
            <div>
             title:{todo.title}
            </div>
            <div onClick={()=>checkHandler(todo.id)}>
             state:{todo.state ? 'done':'Notdone'}
            </div>
            <div>
              des:{todo.des}
            </div>
            <button onClick={()=>deleteHandler(todo.id)}>delete</button>
            <button onClick={()=>updateHandler(todo.id)}>update</button>
          </div>
        ))}
    </div>
  );
}

export default App;
