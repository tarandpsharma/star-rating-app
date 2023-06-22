import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';

const App = () => {
  const arr =[1,2,3,4,5]
  const [rating, setRating] = useState(0);

  const handleAddRating = () => {
    if (rating < 5) {
      setRating(rating + 1);
    }
  };

  const handleRemoveRating = () => {
    if (rating > 0) {
      setRating(rating - 1);
    }
  };

  return (

    <div>
      {arr.map((val, index) => (
        <StarIcon key={index} style={{ color: index < rating ? 'red': 'black' }} />

      ))}
      <div>
      <Button variant="outlined" onClick={handleAddRating}>Add</Button>
      <Button variant="outlined" onClick={handleRemoveRating}>Remove</Button>
      </div>
    </div>
  );
};

export default App;
