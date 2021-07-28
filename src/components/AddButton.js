import { FaPlus, FaCheck } from 'react-icons/fa';
import { useState } from 'react';

const AddButton = () => {

  const [ added, setAdded ] = useState(false)

  const toggleHandler = () => {
    setAdded(!added)
  }

  let toggleButton;
  
  if (added) {
    toggleButton = <button className="movie__add" onClick={toggleHandler}><FaCheck className="movie__add-icon" /></button>
  } else {
    toggleButton = <button className="movie__add" onClick={toggleHandler}><FaPlus className="movie__add-icon" /></button>
  }

  return (
    <div>
      {toggleButton}
    </div>
  ) 
}

export default AddButton;
