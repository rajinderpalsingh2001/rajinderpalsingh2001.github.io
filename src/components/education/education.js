import React from "react";
import Title from "../title/title";
import data from "../../data/data";
import './education.css';
class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Title title="Education" />
        {data.educations.map((education, index) => (
          <div key={index} className="list-group-item list-group-item-action text-light">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{education.institute}</h5>
              <small className="text-grey" style={{width:"100px", textAlign: "right" }}>
                {education.date}
              </small>
            </div>
            <div className="d-flex w-100 justify-content-between">
              <p className="mb-1 text-grey">{education.course}</p>
              <small className="text-orange" style={{ textAlign: "right" }}>
                {education.marks}
              </small>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Education;
