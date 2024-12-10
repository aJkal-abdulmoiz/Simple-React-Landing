import React, { useState } from "react";

function LikeButton() {
    
  const [likes, setLikes] = useState(0);

  return (
    <div className="container" >
      <button onClick={ () => setLikes(likes + 1)}>Like 👍 {likes}</button>
    </div>
    
  );
}

export default LikeButton;
