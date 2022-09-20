import './Form.style.css'

const Form = ({ form, user, setUser, setForm, setMode, mode }) => {
    const inputHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const addItem = (e) => {
        e.preventDefault();
        if (mode === 'add') {
            setUser([...user, { id: Math.floor(Math.random() * 1000), name: form.name, email: form.email, age: form.age, phone: form.phone, country: form.country, favorite: false }])
        }
        else {
            setUser(user.map(item => (item.id === form.id ? form : item)))
        }
        setForm({
            name: '',
            email: '',
            age: '',
            phone: '',
            country: ''
        })
        setMode('add')
    }
    return (
        <div className='page'>
            <div className='Form box'>
                <div className="profile">
                    <iconify-icon icon="ooui:user-avatar-outline" width="82" height="82"></iconify-icon>
                </div>
                <form action="" className="form " onSubmit={addItem} >
                    <input onChange={inputHandler} value={form.name} type="text" className="input" name="name" placeholder="Name" />
                    <input onChange={inputHandler} value={form.email} type="email" className="input" name="email" placeholder="Email" />
                    <input onChange={inputHandler} value={form.age} type="number" className="input" name="age" placeholder="Age" />
                    <input onChange={inputHandler} value={form.phone} type="text" className="input" name="phone" placeholder="Phone Number" />
                    <input onChange={inputHandler} value={form.country} type="text" className="input" name="country" placeholder="Country" />
                    <button type='submit' className="button">Add Contact</button>
                </form>
            </div>
        </div>
    )
}

export default Form;