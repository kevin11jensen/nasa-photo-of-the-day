import React from "react";
import "./App.css";

import NasaCard from "./NasaCard";

//https://api.nasa.gov/planetary/apod?api_key=6nUWAMRzhc0rrsUlk91nBYkvxbZJOfORAagX0aPY
function App() {
  return (
    <div className = "App">
    <h1>Nasa's Image of the Day</h1>
     <div className = 'card-container'>
      <NasaCard />
     </div>
    </div>
  );
}

export default App;
