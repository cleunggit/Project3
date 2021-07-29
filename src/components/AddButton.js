import { FaPlus, FaCheck } from 'react-icons/fa';
import { useState } from 'react';

const AddButton = () => {

  const [ added, setAdded ] = useState(false)

  const toggleHandler = () => {
    setAdded(!added)
  }

  let toggleButton;
  let message;
  
  if (added) {
    toggleButton = <button className="movie__add" onClick={toggleHandler}><FaCheck className="movie__add-icon" /></button>
    message = <p className="movie__add-text">Remove From My List</p>
  } else {
    toggleButton = <button className="movie__add" onClick={toggleHandler}><FaPlus className="movie__add-icon" /></button>
    message = <p className="movie__add-text">Add To My List</p>
  }

  return (
    <div>
      {toggleButton}
      {message}
    </div>
  ) 
}

export default AddButton;
