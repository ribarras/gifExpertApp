import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Uno'])

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories } />
      <hr />
      <ol>
        {
          categories.map( categorie => (
            <GifGrid key={categorie} category={categorie} />
          ))
        }
      </ol>
    </div>
  );
}

export default GifExpertApp;