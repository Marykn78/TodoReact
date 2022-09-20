import './InputSearch.style.css'

const InputSearch = ({setSearch}) => {
    const searchHandler = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div>
            <div className="searchContainer">
                <input className='search' placeholder='Search...' type={"search"} onChange={searchHandler} />
            </div>
        </div>
    )
}

export default InputSearch;