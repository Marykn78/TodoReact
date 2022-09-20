import React, { useEffect } from 'react'
import './FilterItem.style.css'

const FilterItem = ({setStatus,status,user,setFilter}) => {
    useEffect(() => { filterHandler() }, [user, status]);
    const filterHandler = () => {
      switch (status) {
        case 'like':
          setFilter(user.filter(item => item.favorite === true))
          break;
        case 'dislike':
          setFilter(user.filter(item => item.favorite === false))
          break;
        default:
          setFilter(user)
          break;
      }
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <div>
            <div className='filterinput'>
                <select className='selectfilter' onChange={statusHandler} name="filter" >
                    <option name="all" value={"all"}>all</option>
                    <option name="like" value={"like"}>like</option>
                    <option name="dislike" value={"dislike"}>dislike</option>
                </select>
            </div>
        </div>
    )
}

export default FilterItem;