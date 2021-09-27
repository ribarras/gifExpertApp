import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItems from './GifGridItems';

const GifGrid = ({ category }) => {
  const {data:images, loading} =  useFetchGifs(category)

  return (
    <>   
      <h3 className='animate__animated animate__fadeIn'>{ category }</h3>
      <h1 className='charge animate__animated animate__flash'>{loading && 'Cargando...'}</h1>
      <div className='card-grid animate__animated'>
          {
            images.map( img => (
                <GifGridItems 
                  key={ img.id }
                  { ...img } 
                />
            ))
          }
      </div>
    </>  
  );
}

export default GifGrid;
