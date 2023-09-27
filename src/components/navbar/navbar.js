import React from "react";
import "./navbar.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import data from "../../data/data";
import Typewriter from "typewriter-effect";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="myCenterNav">
        <div className="row">
          <div className="col-4 divider-border">
            <a className="my-icon-block" href={`mailto:${data.email}`}>
              <FaEnvelope className="my-icon" />
              <span>Email</span>
            </a>
          </div>
          <div className="col-4 divider-border">
            <a
              className="my-icon-block"
              href={`https://github.com/${data.github}`}
            >
              <FaGithub className="my-icon" />
              <span>GitHub</span>
            </a>
          </div>
          <div className="col-4">
            <a
              className="my-icon-block"
              href={`https://www.linkedin.com/in/${data.linkedin}`}
            >
              <FaLinkedin className="my-icon" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* <div id="typewriter" className="my-description">            
            <Typewriter            
              options={{                              
                strings: ["Software Engineer", "YouTuber" ,"Editor"],
                autoStart: true,
                loop: true,
              }}
            />
          </div> */}
        </div>
      </div>
    );
  }
}

export default Navbar;
