import React from "react";
import data from "../../data/data";
import "./home.css";
import myImage from "../../assets/mypicture.png";
import Typewriter from "typewriter-effect";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="startSection">
          <div className="text-center">
            <img className="myImage" src={myImage} />
          </div>
          <p className="greet">Hi I'm</p>
          <p className="name">{data.name}</p>
          <div className="typewriter">
            <Typewriter
              options={{
                strings: ["Software Engineer", "YouTuber", "Editor"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
