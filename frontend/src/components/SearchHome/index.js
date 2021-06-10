import React, { useState } from 'react'

const SearchHome = () => {

    const [searchValue, setSearchValue] = useState('');
    
    return (
        <form className="d-flex" id='form-header' action={`/pesquisa/${searchValue}`}>
            <input
                id='form-header-input'
                className="form-control mr-2"
                type="search"
                name='searchValue'
                placeholder="Produtos"
                aria-label="Produtos"
                required 
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="btn btn-outline-success">Pesquisar</button>
        </form>
    )
}

export default SearchHome