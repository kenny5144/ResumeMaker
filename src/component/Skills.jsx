import React from "react";

const Skills = ({ skillsContent, setSkillsContent }) => {
  const handleChange = (e, i) => {
    console.log("p", e.target);

    let { name, value } = e.target;
    let onchangeVal = [...skillsContent];
    onchangeVal[i][name] = value;
    setSkillsContent(onchangeVal);
  };
  const Add = () => {
    console.log("you have added this section ");
    const data = [
      ...skillsContent,
      {
        Skills: "",
      },
    ];
    setSkillsContent(data);
  };
  const Remove = (i) => {
    console.log("you have removed this section ");
    const removematch = [...skillsContent];

    removematch.splice(i, 1);
    setSkillsContent(removematch);
  };
  return (
    <>
      <div className="cv-form-row-title">
        <h3>skills</h3>
      </div>

      <div className="row-separator repeater">
        {skillsContent.map((data, i) => {
          return (
            <div className="repeater" data-repeater-list="group-e">
              <div data-repeater-item>
                <div className="cv-form-row cv-form-row-skills">
                  <div className="form-elem">
                    <label htmlFor="" className="form-label">
                      Skill
                    </label>
                    <input
                      value={data.Skills}
                      onChange={(e) => handleChange(e, i)}
                      name="Skills"
                      type="text"
                      className="form-control skill"
                    />
                    <span className="form-text"></span>
                  </div>

                  <button
                    data-repeater-delete
                    type="button"
                    onClick={() => Remove(i)}
                    className="repeater-remove-btn"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <button
          type="button"
          data-repeater-create
          value="Add"
          onClick={Add}
          className="repeater-add-btn"
        >
          +
        </button>
      </div>
    </>
  );
};

export default Skills;
