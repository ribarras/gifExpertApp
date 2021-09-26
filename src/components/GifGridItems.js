import React from 'react';

const GifGridItems = ({ title, url }) => {
  return (
    <div>
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  );
}

export default GifGridItems;
