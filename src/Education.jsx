import React from "react";

const Education = ({ educationContent, setEducationContent }) => {
  const handleChange = (e, i) => {
    console.log("p", e.target);

    let { name, value } = e.target;
    let onchangeVal = [...educationContent];
    onchangeVal[i][name] = value;
    setEducationContent(onchangeVal);
  };
  const Add = () => {
    console.log("you have added this section ");
    const data = [
      ...educationContent,
      {
        School: "",
        Degree: "",
        City: "",
        Startdate: "",
        Graduationdate: "",
        Description: "",
      },
    ];
    setEducationContent(data);
  };
  const Remove = (i) => {
    console.log("you have removed this section ");
    const removematch = [...educationContent];

    removematch.splice(i, 1);
    setEducationContent(removematch);
  };
  return (
    <>
      <div className="cv-form-row-title">
        <h3>education</h3>
      </div>
      {/* education */}
      <div className="row-separator repeater">
      {educationContent.map((data, i) => {
        return (
              <div key={i} className="repeater" data-repeater-list="group-c">
                <div data-repeater-item>
                  <div className="cv-form-row cv-form-row-experience">
                    <div className="cols-3">
                      <div className="form-elem">
                        <label htmlFor="" className="form-label">
                          School
                        </label>
                        <input
                          value={data.School}
                          onChange={(e) => handleChange(e, i)}
                          name="School"
                          type="text"
                          className="form-control edu_school"
                          id=""
                          // onkeyup="generateCV()"
                        />
                        <span className="form-text"></span>
                      </div>
                      <div className="form-elem">
                        <label htmlFor="" className="form-label">
                          Degree
                        </label>
                        <input
                          value={data.Degree}
                          onChange={(e) => handleChange(e, i)}
                          name="Degree"
                          type="text"
                          className="form-control edu_degree"
                          id=""
                          // onkeyup="generateCV()"
                        />
                        <span className="form-text"></span>
                      </div>
                      <div className="form-elem">
                        <label htmlFor="" className="form-label">
                          City
                        </label>
                        <input
                          value={data.City}
                          onChange={(e) => handleChange(e, i)}
                          name="City"
                          type="text"
                          className="form-control edu_city"
                          id=""
                          // onkeyup="generateCV()"
                        />
                        <span className="form-text"></span>
                      </div>
                    </div>

                    <div className="cols-3">
                      <div className="form-elem">
                        <label htmlFor="" className="form-label">
                          Start Date
                        </label>
                        <input
                          value={data.Startdate}
                          onChange={(e) => handleChange(e, i)}
                          name="Startdate"
                          type="date"
                          className="form-control edu_start_date"
                          id=""
                          // onkeyup="generateCV()"
                        />
                        <span className="form-text"></span>
                      </div>
                      <div className="form-elem">
                        <label htmlFor="" className="form-label">
                          Graduation Date
                        </label>
                        <input
                          value={data.Graduationdate}
                          onChange={(e) => handleChange(e, i)}
                          name="Graduationdate"
                          type="date"
                          className="form-control edu_graduation_date"
                          id=""
                          // onkeyup="generateCV()"
                        />
                        <span className="form-text"></span>
                      </div>
                      <div className="form-elem">
                        <label htmlFor="" className="form-label">
                          Description
                        </label>
                        <input
                          value={data.Description}
                          onChange={(e) => handleChange(e, i)}
                          name="Description"
                          type="text"
                          className="form-control edu_description"
                          id=""
                          // onkeyup="generateCV()"
                        />
                        <span className="form-text"></span>
                      </div>
                    </div>

                    <button
                      data-repeater-delete
                      type="button"
                      onClick={()=>Remove(i)}
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

export default Education;
