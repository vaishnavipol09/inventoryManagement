import React, { useState } from "react";

function SearchPage() {
  const [filters, setFilters] = useState({
    q: "",
    category: "",
    minPrice: "",
    maxPrice: ""
  });

  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    const query = new URLSearchParams(filters).toString();

    const res = await fetch(`http://localhost:5000/search?${query}`);
    const data = await res.json();

    setResults(data);
  };

  return (
    <div className="container">
      <h2 className="title">Inventory Search</h2>

      <div className="search-box">

        <input
          name="q"
          placeholder="Search product"
          onChange={handleChange}
        />

        <select name="category" onChange={handleChange}>
          <option value="">All</option>
          <option value="Metal">Metal</option>
          <option value="Plastic">Plastic</option>
        </select>

        <input
          name="minPrice"
          placeholder="Min Price"
          onChange={handleChange}
        />

        <input
          name="maxPrice"
          placeholder="Max Price"
          onChange={handleChange}
        />

        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>

      </div>

      {results.length === 0 ? (
        <p className="no-result">No results found</p>
      ) : (
        <table className="result-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {results.map((item) => (
              <tr key={item.id}>
                <td>{item.product_name}</td>
                <td>{item.category}</td>
                <td>₹ {item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SearchPage;