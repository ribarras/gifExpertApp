import React, { useState, useEffect } from 'react';
import GifGridItems from './GifGridItems';

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([])

  const getGift = async () => {
    const url = 'https://api.giphy.com/v1/gifs/search?q=goku&limit=10&api_key=g6HngUdYLqxqgPZy2qZMK69WPFWrGXrU'
    const resp = await fetch( url )
    const { data } = await resp.json()
    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })
    setImages( gifs )
  }

  useEffect(() => {
    getGift()    
  }, [])

  return (
    <div>
      <h3>{ category }</h3>
        {
          images.map( img => (
              <GifGridItems 
                key={ img.id }
                { ...img } 
              />
          ))
        }
    </div>
  );
}

export default GifGrid;
