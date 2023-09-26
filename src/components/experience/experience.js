import React from "react";
import Title from "../title/title";
import data from "../../data/data";

class Experience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Title title="Experience" />

        {data.experiences.map((experience, index) => (
          <div key={index} className="list-group-item list-group-item-action text-light">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                {experience.role} | <i>{experience.companyName}</i>
              </h5>
              <small className="text-grey" style={{width:"150px", textAlign: "right" }}>{experience.date}</small>
            </div>
            <p className="mb-1 text-grey">{experience.location}</p>
          </div>
        ))}
      </>
    );
  }
}

export default Experience;
