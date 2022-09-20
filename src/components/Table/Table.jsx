import './Table.style.css'
import Avatar from 'avataaars';
import { generateRandomAvatarOptions } from './avatar';

const Table = ({ user, setUser, setForm, setMode, filter, search }) => {
    const deleteHandler = (id) => {
        setUser(user.filter(item => item.id !== id))
    }
    const checkFavorHandler = (id) => {
        setUser(user.map(item => (
            item.id === id ? { ...item, favorite: !item.favorite } : item
        )))
    }
    const updateHandler = (item) => {
        setForm(item)
        setMode('update')
    }
    return (
        <div>
            <div  >
                <table className='table box' >
                    <thead>
                        <tr>
                            <th>id</th>
                            <th className='hidden'>profile</th>
                            <th>name</th>
                            <th className='hidden'>email</th>
                            <th>age</th>
                            <th>phone</th>
                            <th>country</th>
                            <th>favorite</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filter.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td className='hidden'>
                                    <>
                                        <Avatar 
                                            style={{ width: '80px', height: '80px' }}
                                            avatarStyle='Circle'
                                            {...generateRandomAvatarOptions()} />
                                    </>
                                </td>
                                <td>{item.name}</td>
                                <td className='hidden'>{item.email}</td>
                                <td>{item.age}</td>
                                <td>{item.phone}</td>
                                <td>{item.country}</td>
                                <td onClick={() => checkFavorHandler(item.id)} >{item.favorite ? (<iconify-icon
                                    icon="material-symbols:favorite" width="30" height="30"
                                    style={{ color: "rgb(174, 131, 214)" }}
                                ></iconify-icon>
                                ) : (
                                    <iconify-icon
                                        icon="ic:twotone-favorite-border" width="30" height="30"
                                        style={{ color: " rgb(174, 131, 214)" }}
                                    ></iconify-icon>
                                )}</td>
                                <td>
                                    <button className='button btn-table' onClick={() => deleteHandler(item.id)}>
                                        <iconify-icon icon="fluent:delete-28-regular" width="18" height="18"></iconify-icon>
                                    </button>
                                    <button className='button' onClick={() => updateHandler(item)}>
                                        <iconify-icon icon="carbon:edit" width="18" height="18"></iconify-icon>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;
