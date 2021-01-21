import React from 'react'
import './SearchBox.css'

type Props = {
    setKey: (e: any) => void
    val: any
}

const SearchBox: React.FC<Props> = ({
    setKey,
    val
}) => {

    return (

        <div className='search-bar'>
            <input className="search-box" value={val} type='text' id='search-bar' placeholder="search" onChange={(e)=>setKey(e)}/>
        </div>
    )

}

export default SearchBox;