import React from "react";
import { IconFilter, IconSearch } from "./icon.component";

const SearchBoxComponent = () => {
  return (
    <div className="search-box">
      <div className="profile-info">
        Hello, <span>Sukhi</span>
      </div>

      <div className="search-area">
        <label className="form-input-label" htmlFor="forSearch">
          Find your delicious dish
        </label>

        <div className="group">
          <div className="search-icon">
            <IconSearch />
          </div>

          <div className="filter-btn">
            <IconFilter />
          </div>

          <input
            className="custom-input"
            id="forSearch"
            type="text"
            placeholder="Search food"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBoxComponent;
