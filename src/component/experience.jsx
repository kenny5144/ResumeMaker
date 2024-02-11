import React from "react";

const Experience = ({ experienceContent, setExperienceContent }) => {
  const handlechange = (e, i) => {
    console.log("p", e.target);

    let { name, value } = e.target;
    let onchangeVal = [...experienceContent];
    onchangeVal[i][name] = value;
    setExperienceContent(onchangeVal);
  };
  const Add = () => {
    console.log("you have added this section ");
    const data = [...experienceContent,  
       {
        Title: "",
        Company: "",
        Location: "",
        Startdate: "",
        Enddate: "",
        Description: "",
      },
    ];
    setExperienceContent(data);
  };
  const Remove =(i)=>{
    console.log("you have removed this section ");
    const removematch = [...experienceContent];
 
      removematch.splice(i, 1);
      setExperienceContent(removematch);
   
  }

  return (
    <>
      <div className="cv-form-row-title">

        <h3>experience</h3>
      </div>

      <div className="row-separator repeater">
        <div className="repeater" data-repeater-list="group-b">
          <div data-repeater-item>
            {experienceContent.map((data, i) => {
              return (
                <div key={i} className="cv-form-row cv-form-row-experience">
                  <div className="cols-3">
                    <div className="form-elem">
                      <label htmlFor="" className="form-label">
                        Title
                      </label>
                      <input
                        name="Title"
                        type="text"
                        value={data.Title}
                        onChange={(e) => handlechange(e, i)}
                        className="form-control exp_title"
                        id=""
                        // onkeyup="generateCV()"
                      />
                      <span className="form-text"></span>
                    </div>
                    <div className="form-elem">
                      <label htmlFor="" className="form-label">
                        Company / Organization
                      </label>
                      <input
                        name="Company"
                        value={data.Company}
                        onChange={(e) => handlechange(e, i)}
                        type="text"
                        className="form-control exp_organization"
                        id=""
                        // onkeyup="generateCV()"
                      />
                      <span className="form-text"></span>
                    </div>
                    <div className="form-elem">
                      <label htmlFor="" className="form-label">
                        Location
                      </label>
                      <input
                        name="Location"
                        value={data.Location}
                        onChange={(e) => handlechange(e, i)}
                        type="text"
                        className="form-control exp_location"
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
                        onChange={(e) => handlechange(e, i)}
                        name="Startdate"
                        type="date"
                        className="form-control exp_start_date"
                        id=""
                        // onkeyup="generateCV()"
                      />
                      <span className="form-text"></span>
                    </div>
                    <div className="form-elem">
                      <label htmlFor="" className="form-label">
                        End Date
                      </label>
                      <input
                        value={data.Enddate}
                        onChange={(e) => handlechange(e, i)}
                        name="Enddate"
                        type="date"
                        className="form-control exp_end_date"
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
                        value={data.Desription}
                        onChange={(e) => handlechange(e, i)}
                        name="Description"
                        type="text"
                        className="form-control exp_description"
                        id=""
                        // onkeyup="generateCV()"
                      />
                      <span className="form-text"></span>
                    </div>
                  </div>

                  <button
                    data-repeater-delete
                    type="button"
                    className="repeater-remove-btn"
                    onClick={()=>Remove(i)}
                  >
                    -
                  </button>
                </div>
              );
            })}
          </div>
        </div>
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

export default Experience;
