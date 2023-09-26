import React from "react";
import './title.css';

class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>            
        <div className="main-text">
            {this.props.title}
        </div>
      </>
    );
  }
}

export default Title;
