import React from "react";
import Title from "../title/title";
import data from "../../data/data";
import './extra-curriculars.css';

class ExtraCurriculars extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Title title="Extra Curriculars" />

        {data.extraCurriculars.map((extraCurricular, index) => (
          <div key={index} className="list-group-item list-group-item-action text-light">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1" style={{display: "insline-block"}}>{extraCurricular.title} | <i>{extraCurricular.position}</i></h5>
              <small
                className="text-grey"
                style={{ width: "200px", textAlign: "right" }}
              >
                {extraCurricular.date}
              </small>
            </div>

            <p className="mb-1 text-grey">{extraCurricular.description}</p>
          </div>
        ))}
      </>
    );
  }
}

export default ExtraCurriculars;
