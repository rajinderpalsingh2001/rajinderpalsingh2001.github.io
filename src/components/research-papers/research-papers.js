import React from "react";
import Title from "../title/title";
import data from "../../data/data";
import { BiRightArrowAlt } from "react-icons/bi";

class ResearchPapers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Title title="Research Papers" />
        {data.researchPapers.map((researchPaper, index) => (
          <a
            key={index}
            href={researchPaper.link}
            className="list-group-item list-group-item-action text-light"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{researchPaper.title}</h5>
              <small
                className="text-light"
                style={{ width: "150px", textAlign: "right" }}
              >
                <BiRightArrowAlt></BiRightArrowAlt>
              </small>
            </div>
          </a>
        ))}
        working on Advanced Papers...
      </>
    );
  }
}

export default ResearchPapers;
