import './App.css';
import React, { useState } from 'react'
import Form from './components/Form/Form';
import InputSearch from './components/InputSearch/InputSearch';
import Table from './components/Table/Table';
import FilterItem from './components/FilterItem/FilterItem';


function App() {
  const [user, setUser] = useState([
    { id: 1, userimage: 'img', name: 'Jack', email: 'jack@gmail.com', age: '34', phone: 457801, country: 'England', favorite: false },
    { id: 2, userimage: 'img', name: 'Jain', email: 'jain@gmail.com', age: '67', phone: 678543, country: 'German', favorite: true },
    { id: 3, userimage: 'img', name: 'Katy', email: 'katy@gmail.com', age: '21', phone: 334567, country: 'Japan', favorite: false }
  ])
  const [form, setForm] = useState({
    id: "0",
    userProfile: "img",
    name: "",
    email: "",
    phone: "",
    age: "",
    country: "",
    favorite: false,
  })
  const [mode, setMode] = useState('add');
  const [status, setStatus] = useState('all');
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div>
      <Form user={user} form={form} mode={mode} setUser={setUser} setForm={setForm} setMode={setMode} />
      <InputSearch setSearch={setSearch} />
      <FilterItem setStatus={setStatus} status={status} user={user} setFilter={setFilter} />
      <Table user={user} setUser={setUser} setForm={setForm} setMode={setMode} filter={filter} search={search} />
    </div >
  );
}
export default App;