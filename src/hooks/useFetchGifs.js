import { useState, useEffect } from "react";
import { getGift } from "../helpers/getGifs";


const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data:[],
    loading: true
  })
  
  useEffect(() => {
    getGift(category).then(imgs => (
      setstate({
        data: imgs,
        loading: false
      })
    )) 
  }, [category])
  
  return state

}

export default useFetchGifs;
