// src/Filter.js
import React from 'react';

const Category = ({ categories, selectedCategory, setSelectedCategory }) => {

    const Changehandler =(e)=>{
        setSelectedCategory(e.target.value)
    }
  return (
    <div>
    Category : 
      <select
        value={selectedCategory}
        onChange={Changehandler}
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;
