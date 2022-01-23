import "./App.css";
import data from "./data";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function App() {
  const [slide, setSlide] = useState(0);
  const slidesData = data.length;

  const handlePrev = () => {
    setSlide(slide === 0 ? slidesData - 1 : slide - 1);
  };

  const handleNext = () => {
    setSlide(slide === slidesData - 1 ? 0 : slide + 1);
  };

  console.log(slide);

  return (
    <div className="app">
      <div className="container">
        <button onClick={handlePrev} className="prev">
          <ArrowBackIosIcon></ArrowBackIosIcon>
        </button>
        <button onClick={handleNext} className="next">
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </button>
        {data.map((item, index) => {
          return (
            <div
              className={index === slide ? "slide-active" : "slide"}
              key={item.id}
            >
              {index === slide && <h2 className="title">{item.title}</h2>}
              {index === slide && <img src={item.img} className="image"></img>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
