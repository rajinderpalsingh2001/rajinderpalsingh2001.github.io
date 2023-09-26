import React from "react";
import "./skills.css";
import Title from "../title/title";
import data from "../../data/data";

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Title title="Skills" />
        <div className="my-container">
          {Object.entries(data.skills).map(([category, skills]) => (
            <div className="skill-container" key={category}>
              <table>
                <tbody>
                  <tr>
                    <td className="skill-header" width={"100px"}>
                      <span className="skill-category">{category}</span>
                    </td>
                    <td >
                      {skills.map((skill, index) => (
                        <span className="skill" key={index}>
                          {skill}
                        </span>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Skills;
