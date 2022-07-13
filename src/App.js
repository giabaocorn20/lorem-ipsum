import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const [isLoading, setIsLoading] = useState(true) 
  const [tours, setTours] = useState([])

  //create a remove handler, pass it down 2 levels 
  const removeHandler = (id) => { 
  
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }
  //create fetch tour function, can be use for refreshing

  const fetchTours = async () => { 
    setIsLoading(true) 
    try {
    const res = await fetch(url) 
    const tours = await res.json()

    setTours(tours)
    setIsLoading(false)
  }
  catch(error) {
    setIsLoading(false) 
    console.log(error)
  }
  }
  //refresh by fetching it again
  const refreshHandler =  () => {
    fetchTours()
  }
  useEffect(() => { 
    fetchTours()
  }, [])

  if(isLoading) {
    return <Loading/> 
  }
  if (tours.length === 0) {
    return <main> 
      <button onClick={refreshHandler}> Refresh </button>
    </main>
  }
  return (
    <main> 
      <Tours removeTour = {removeHandler} tours = {tours} />
    </main>
  )
}

export default App
