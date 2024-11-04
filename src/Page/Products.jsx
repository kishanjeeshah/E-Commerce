import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Category from '../components/Category';
import Sorting from '../components/Sorting';
import PostLists from '../components/PostLists';

const Products = ({IsLoggedIn}) => {
  const posts = useSelector((state) => state.posts);
  const categories = [...new Set(posts.map((p) => p.category))];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [Sort, setSort] = useState("");


  const filterPosts = selectedCategory
    ? posts.filter((product) => product.category === selectedCategory) : posts;

  const sortedPosts = [...filterPosts].sort((a, b) => {
    if (Sort === 'lowest') {
      return a.price - b.price; // Sort from low to high
    } else if (Sort === 'highest') {
      return b.price - a.price; // Sort from high to low
    }
    return 0; // Default no sorting
  });


  return (
    <div>

      <div className="font-semibold text-3xl px-2 pt-12 underline mt-12 text-orange-700">
        All Products
      </div>

      <div className="flex justify-around items-center mt-20 text-1xl text-blue-700">
        <div>
          <Category 
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div>
          <Sorting
          Sort={Sort}
          setSort={setSort}
          />
        </div>
      </div>

      <div className="w-8/12 pt-2 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
        {sortedPosts.map((post) => (
          <PostLists key={post.id} post={post} IsLoggedIn={IsLoggedIn}/>
        ))}
      </div>

    </div>
  );
};

export default Products;
