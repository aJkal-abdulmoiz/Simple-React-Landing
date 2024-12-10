import React from "react";
import LikeButton from "../components/LikeButton";
import PropsDemo from "../components/PropsDemo";

function Home() {
  return (
    <div className="section message">
    <container className="container">
        <PropsDemo message="Please Like Button Thok do!" />
        <LikeButton />
        
    </container>

    </div>
  );
}

export default Home;
