import React from 'react';

const Header = (props) => {
  const { search, submit } = props;

  return (
    <div
      className="header"
    >
      <form
        className="form-container"
      >
        <input
          className="search-bar"
          type="text"
          placeholder="Search.."
          onChange={search}
        />
        <button
          className="search"
          type="submit"
          onClick={submit}
        >
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
  )
}

export default Header;