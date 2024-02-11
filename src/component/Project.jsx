import React from "react";

const Project = ({ projectContent, setProjectContent }) => {
    const handleChange = (e, i) => {
        console.log("p", e.target);
    
        let { name, value } = e.target;
        let onchangeVal = [...projectContent];
        onchangeVal[i][name] = value;
        setProjectContent(onchangeVal);
      };
      const Add = () => {
        console.log("you have added this section ");
        const data = [...projectContent,    {
            Title: "",
            Projectlink:"",
            Description: "",
          },];
        setProjectContent(data);
      };
      const Remove =(i)=>{
        console.log("you have removed this section ");
        const removematch = [...projectContent];
     
          removematch.splice(i, 1);
          setProjectContent(removematch);
       
      }
  return (
    <>
      <div className="cv-form-row-title">
        <h3>projects</h3>
      </div>
      <div className="row-separator repeater">
        {projectContent.map((data , i) => {
          return (
            <div key={i} className="repeater" data-repeater-list="group-d">
              <div data-repeater-item>
                <div className="cv-form-row cv-form-row-experience">
                  <div className="cols-3">
                    <div className="form-elem">
                      <label htmlFor="" className="form-label">
                        Project Name
                      </label>
                      <input
                      value={data.Title}
                      onChange={(e)=>handleChange(e,i)}
                        name="Title"
                        type="text"
                        className="form-control proj_title"
                      />
                      <span className="form-text"></span>
                    </div>
                    <div className="form-elem">
                      <label htmlFor="" className="form-label">
                        Project link
                      </label>
                      <input
                      value={data.Link}
                      onChange={(e)=>handleChange(e,i)}
                        name="Link"
                        type="text"
                        className="form-control proj_link"
                      />
                      <span className="form-text"></span>
                    </div>
                    <div className="form-elem">
                      <label htmlFor="" className="form-label">
                        Description
                      </label>
                      <input
                      value={data.Description}
                      onChange={(e)=>handleChange(e,i)}
                        name="Description"
                        type="text"
                        className="form-control proj_description"
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

export default Project;
