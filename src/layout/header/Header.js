import React from "react";
import { FaCartPlus, FaSearch } from "react-icons/fa";
import "./Header.css";

const Header = ({ searchTerm, handleSearch }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 logo-container">
            <img src="/image/logo.png" alt="logo" className="header_logo" />
          </div>
          <div className="col-lg-7 header_search_bar ">
            <div className="input-group">
              <input
                type="search"
                placeholder="Search here..."
                value={searchTerm}
                onChange={handleSearch}
                className="header_search_bar_input "
              />
              <button className="bg-primary search_icon">
                <span className="text-white">
                  <FaSearch />
                </span>
              </button>
            </div>
          </div>
          <div className="col-lg-3 d-flex justify-content-center align-items-center">
            <div className="d-flex align-items-center">
              <FaCartPlus className="text-primary fs-6" />
              <span className="ms-2 fs-6">
                <strong>Cart</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
