import React from 'react';

const Header = () => (
  <div className="header">
    <form className="form-container">
      <input className="search-bar" type="text" placeholder="Search.."/>
      <button name="seach" className="search" type="submit"><i className="fa fa-search"></i></button>
    </form>
  </div>
)

export default Header;