// import React, { useState } from "react";
// import StarRating from "./starRating";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/*
function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </>
  );
}
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating color="red" size={24} className="test" defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
