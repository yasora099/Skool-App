import React from 'react'
import SearchBox from '../SearchBar/SearchBox';
import './Header.css';

type HeaderProps = {
    handleShow: () => void;
    handleSearch: (e: any) => void
    inputValue: any
    };

const Header: React.FC<HeaderProps> = ({ handleSearch, inputValue, handleShow }) => {
   return (
    <div className="header">
      
      <h1>School Dashboard</h1>
      <div className="header-left">
      <button type="button" onClick={handleShow}>
        Add School
      </button>
      
      <div className="search">
      <SearchBox setKey={handleSearch} val={inputValue} />
      </div>
      </div>
    </div>
  );
};
export default Header;