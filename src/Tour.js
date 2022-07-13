import React, { useState } from 'react';

const Tour = (props) => {
  const [isReadMore, setIsReadMore] = useState(false)
  const { removeTour ,id, info, price, name} = props

  // REMEMBER THAT EVERY BTTON WILL NEED ITS OWN HANDLER REGARDLESS OF FUNCTION 
  const readMoreHandler = ()  => { 
    setIsReadMore(prevReadMore => !prevReadMore)
  }

  const deleteButton = () => {
    removeTour(id)
  }

  return <article className='single-tour'>
    
    <footer> 
      <div className='tour-info'> 
       <h4>{name}</h4>
       <h4 className='tour-price'>${price}</h4>
       </div>
       <p>

         {isReadMore? info: `${info.substring(0,200)}...`}

       <button onClick={readMoreHandler}>
         {isReadMore ? "show less" : "show more"}
       </button>

       </p>
       <button className='delete-btn' onClick={deleteButton} >Not Interested</button>
    </footer>
  </article> 
};

export default Tour;
