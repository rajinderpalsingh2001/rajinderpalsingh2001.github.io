import React from "react";
import data from "../../data/data";
import "./home.css";
import myImage from "../../assets/mypicture.png";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>        
          <div className="startSection">            
            <img className="myImage" src={myImage} />
            <p className="greet">Hi I'm</p>
            <p className="name">{data.name}</p>
          </div>            
      </>
    );
  }
}

export default Home;
