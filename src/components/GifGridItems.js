import React from 'react';

const GifGridItems = ({ title, url }) => {
  return (
    <div className='card animate__animated animate__fadeIn'>
      <div className='card-img'>
        <img src={ url } alt={ title } />
      </div>
      <p>{ title }</p>
    </div>
  );
}

export default GifGridItems;
