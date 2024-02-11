import { useState } from "react";
import "./App.css";
// import Achievment from "./component/Achievment";
import Addbtn from "./component/Addbtn";
import Experience from "./component/experience";
import {
  Container,
  OutputDivs,
  Cvformrowtitle,
  Cvformrow,
  FormElem,
  Formlabel,
  Formcontrol,
  Repeateraddbtn,
  RepeaterRemovebtn,
  Cols2,
  Cols3,
} from "../src/component/Styles";
function App() {
  const [img, setImg] = useState();
  const [message, setMessage] = useState({ Email: "", Text: "", PhoneNo: "" });
  // regex for validation
  const strRegex = /^[a-zA-Z\s]*$/; // containing only letters
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  /* supports following number formats - (123) 456-7890, (123)456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, 075-63546725 */
  const digitRegex = /^\d+$/;

  const validType = {
    TEXT: {},
    TEXT_EMP: "text_emp",
    EMAIL: "Email",
    DIGIT: "digit",
    PHONENO: "Phoneno",
    ANY: "any",
  };

  const [user, setUser] = useState({
    FirstName: "",
    LastName: "",
    MiddleName: "",
    Designation: "",
    Address: "",
    Email: "",
    Phoneno: "",
    Summary: "",
  });

  function handleChange(e) {
    // console.log("o", e.target.value);
    const { name, value } = e.target;
    console.log(value);
    if (name === validType.EMAIL) {
      if (!emailRegex.test(value)) {
        console.log(...user.Email);
        console.log(user.Email);
        setMessage({ Email: "the email is invalid" });
      } else {
        setMessage({ Email: "" });
      }
    }
    if (name === validType.PHONENO) {
      if (!phoneRegex.test(value)) {
        setMessage({ PhoneNo: "the Phone number is invalid" });
      } else {
        setMessage({ PhoneNo: "" });
      }
    }
    if (name === validType.TEXT) {
      console.log("g", name);

      if (!strRegex.test(user.FirstName)) {
        setMessage({ Text: "the Phone number is invalid" });
      } else {
        setMessage({ Text: "worked" });
      }
    }
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  }
  // this is for all the other section but the begining
  const sectionsHandlechange = (e, i, state, setState) => {
    console.log("p", e.target);

    let { name, value } = e.target;
    let onchangeVal = [...state];
    onchangeVal[i][name] = value;
    setState(onchangeVal);
  };
  // achievment states

  const [acheivmentContent, setAcheivmentContent] = useState([
    {
      title: "",
      description: "",
    },
  ]);
  const [experienceContent, setExperienceContent] = useState([
    {
      Title: "",
      Company: "",
      Location: "",
      Startdate: "",
      Enddate: "",
      Description: "",
    },
  ]);
  const [educationContent, setEducationContent] = useState([
    {
      School: "",
      Degree: "",
      City: "",
      Startdate: "",
      Graduationdate: "",
      Description: "",
    },
  ]);
  const [projectContent, setProjectContent] = useState([
    {
      Title: "",
      Projectlink: "",
      Description: "",
    },
  ]);
  const [skillsContent, setSkillsContent] = useState([
    {
      Skills: "",
    },
  ]);

  const AddSection = (states, setState) => {
    console.log("you have added this section ");
    const data = [...states, states];
    setState(data);
  };
  const removeSection = (i, state, setState) => {
    console.log("you have removed this section ");
    const removematch = [...state];
    removematch.splice(i, 1);
    setState(removematch);
  };

  function Download() {
    window.print();
  }
  function previewImage(e) {
    console.log(e.target.files);
    const data = new FileReader();
    data.addEventListener("load", () => {
      setImg(data.result);
    });
    data.readAsDataURL(e.target.files[0]);
  }
  // console.log(FirstName);
  // EXPERIENCE STORAGE STATE
  const experienceHandlechange = (e, i) => {
    console.log("p", e.target);

    let { name, value } = e.target;
    let onchangeVal = [...experienceContent];
    onchangeVal[i][name] = value;
    setExperienceContent(onchangeVal);
  };
  return (
    <>
      {/* about page  */}
      <section id="about-sc">
        <Container />
        {/* className="container" */}
        <div className="about-cnt">
          <form action="" className="cv-form" id="cv-form">
            <OutputDivs>
              <Cvformrowtitle>
                <h3>about</h3>
              </Cvformrowtitle>
              <Cvformrow>
                <Cols3>
                  <FormElem>
                    <Formlabel htmlFor="firstname ">First Name</Formlabel>
                    <Formcontrol
                      name="FirstName"
                      value={user.FirstName}
                      onChange={handleChange}
                      type="text"
                      className="form-control firstname"
                      // onkeyup="generateCV()"
                    />
                    <span className="form-text">{message.Text}</span>
                  </FormElem>
                  <FormElem>
                    <Formlabel>
                      Middle Name <span className="opt-text">(optional)</span>
                    </Formlabel>
                    <Formcontrol
                      name="MiddleName"
                      onChange={handleChange}
                      value={user.MiddleName}
                      type="text"
                      className="form-control middlename"
                      id=""
                      // onkeyup="generateCV()"
                    />
                    <span className="form-text">{message.Text}</span>
                  </FormElem>
                  <FormElem>
                    <Formlabel>Last Name</Formlabel>
                    <Formcontrol
                      name="LastName"
                      type="text"
                      value={user.LastName}
                      onChange={handleChange}
                      className="form-control lastname"
                      id=""
                      // onkeyup="generateCV()"
                    />
                    <span className="form-text">{message.Text}</span>
                  </FormElem>
                </Cols3>

                <Cols3>
                  <FormElem>
                    <Formlabel>Your Image</Formlabel>
                    <Formcontrol
                      name="Image"
                      type="file"
                      className="form-control image"
                      id=""
                      accept="image/*"
                      onChange={(e) => previewImage(e)}
                    />
                  </FormElem>
                  <FormElem>
                    <Formlabel>Designation</Formlabel>
                    <Formcontrol
                      name="Designation"
                      value={user.Designation}
                      onChange={handleChange}
                      type="text"
                      className="form-control designation"
                      // onkeyup="generateCV()"
                    />
                    <span className="form-text">{message.Text}</span>
                  </FormElem>
                  <FormElem>
                    <Formlabel>Address</Formlabel>
                    <Formcontrol
                      name="Address"
                      value={user.Address}
                      onChange={handleChange}
                      type="address"
                      className="form-control address"
                      id=""
                      // onkeyup="generateCV()"
                    />
                    <span className="form-text"></span>
                  </FormElem>
                </Cols3>

                <Cols3>
                  <FormElem>
                    <Formlabel>Email</Formlabel>
                    <Formcontrol
                      name="Email"
                      value={user.Email}
                      onChange={handleChange}
                      type="Email"
                      className="form-control email"
                      id=""
                      // onkeyup="generateCV()"
                    />
                    <span className="form-text">{message.Email}</span>
                  </FormElem>
                  <FormElem>
                    <Formlabel>Phone No:</Formlabel>
                    <Formcontrol
                      name="Phoneno"
                      value={user.Phoneno}
                      onChange={handleChange}
                      type="Phoneno"
                      className="form-control phoneno"
                      id=""
                      // onkeyup="generateCV()"
                    />
                    <span className="form-text">{message.PhoneNo}</span>
                  </FormElem>
                  <FormElem>
                    <Formlabel>Summary</Formlabel>
                    <Formcontrol
                      name="Summary"
                      type="text"
                      value={user.Summary}
                      onChange={handleChange}
                      className="form-control summary"
                      id=""
                      // onkeyup="generateCV()"
                    />
                    <span className="form-text">{message.Text}</span>
                  </FormElem>
                </Cols3>
              </Cvformrow>
            </OutputDivs>
            {/* acheivment  */}
            <OutputDivs>
              <Cvformrowtitle>
                <h3>achievements</h3>
              </Cvformrowtitle>

              {acheivmentContent.map((data, i) => {
                return (
                  <div key={i} className="row-separator repeater">
                    <div className="repeater" data-repeater-list="group-a">
                      <div data-repeater-item>
                        <Cvformrow>
                          <Cols2>
                            <FormElem>
                              <Formlabel>Title</Formlabel>
                              <Formcontrol
                                value={data.title}
                                onChange={(e) => {
                                  sectionsHandlechange(
                                    e,
                                    i,
                                    acheivmentContent,
                                    setAcheivmentContent
                                  );
                                }}
                                name="title"
                                type="text"
                                className="form-control achieve_title"

                                // onkeyup="generateCV()"
                              />
                              <span className="form-text"></span>
                            </FormElem>
                            <FormElem>
                              <Formlabel>Description</Formlabel>
                              <Formcontrol
                                value={data.description}
                                onChange={(e) => {
                                  sectionsHandlechange(
                                    e,
                                    i,
                                    acheivmentContent,
                                    setAcheivmentContent
                                  );
                                }}
                                name="description"
                                type="text"
                                className="form-control achieve_description"
                                id=""
                                // onkeyup="generateCV()"
                              />
                              <span className="form-text"></span>
                            </FormElem>
                            <RepeaterRemovebtn
                              data-repeater-delete
                              onClick={() => {
                                removeSection(
                                  i,
                                  acheivmentContent,
                                  setAcheivmentContent
                                );
                              }}
                              type="button"
                              
                            >
                              -
                            </RepeaterRemovebtn>
                          </Cols2>
                        </Cvformrow>
                      </div>
                    </div>
                  </div>
                );
              })}

              <Repeateraddbtn
                type="button"
                data-repeater-create
                value="Add"
                onClick={() => {
                  AddSection(acheivmentContent, setAcheivmentContent);
                }}
                
              >
                +
              </Repeateraddbtn>
            </OutputDivs>

            {/* experience */}
            <OutputDivs>
              <Cvformrowtitle>
                <h3>experience</h3>
              </Cvformrowtitle>

              <div className="row-separator repeater">
                <div className="repeater" data-repeater-list="group-b">
                  <div data-repeater-item>
                    {experienceContent.map((data, i) => {
                      return (
                        <Cvformrow
                          key={i}
                          className="cv-form-row cv-form-row-experience"
                        >
                          <Cols3>
                            <FormElem>
                              <Formlabel >
                                Title
                              </Formlabel >
                              <input
                                name="Title"
                                type="text"
                                value={data.Title}
                                onChange={(e) => {
                                  sectionsHandlechange(
                                    e,
                                    i,
                                    experienceContent,
                                    setAcheivmentContent
                                  );
                                }}
                                className="form-control exp_title"
                                id=""
                                // onkeyup="generateCV()"
                              />
                              <span className="form-text"></span>
                            </FormElem>
                            <FormElem>
                              <Formlabel >
                                Company / Organization
                              </Formlabel>
                              <input
                                name="Company"
                                value={data.Company}
                                onChange={(e) => {
                                  sectionsHandlechange(
                                    e,
                                    i,
                                    experienceContent,
                                    setAcheivmentContent
                                  );
                                }}
                                type="text"
                                className="form-control exp_organization"
                                id=""
                                // onkeyup="generateCV()"
                              />
                              <span className="form-text"></span>
                            </FormElem>
                            <FormElem>
                              <Formlabel>
                                Location
                              </Formlabel>
                              <input
                                name="Location"
                                value={data.Location}
                                onChange={(e) => {
                                  sectionsHandlechange(
                                    e,
                                    i,
                                    experienceContent,
                                    setAcheivmentContent
                                  );
                                }}
                                type="text"
                                className="form-control exp_location"
                                id=""
                                // onkeyup="generateCV()"
                              />
                              <span className="form-text"></span>
                            </FormElem>
                          </Cols3>

                          <Cols3>
                            <FormElem>
                              <Formlabel >
                                Start Date
                              </Formlabel>
                              <input
                                value={data.Startdate}
                                onChange={(e) => {
                                  sectionsHandlechange(
                                    e,
                                    i,
                                    experienceContent,
                                    setAcheivmentContent
                                  );
                                }}
                                name="Startdate"
                                type="date"
                                className="form-control exp_start_date"
                                id=""
                                // onkeyup="generateCV()"
                              />
                              <span className="form-text"></span>
                            </FormElem>
                            <FormElem>
                              <Formlabel >
                                End Date
                              </Formlabel>
                              <input
                                value={data.Enddate}
                                onChange={(e) => {
                                  sectionsHandlechange(
                                    e,
                                    i,
                                    experienceContent,
                                    setAcheivmentContent
                                  );
                                }}
                                name="Enddate"
                                type="date"
                                className="form-control exp_end_date"
                                id=""
                                // onkeyup="generateCV()"
                              />
                              <span className="form-text"></span>
                            </FormElem>
                            <FormElem>
                              <Formlabel>
                                Description
                              </Formlabel>
                              <input
                                value={data.Description}
                                onChange={(e) => {
                                  sectionsHandlechange(
                                    e,
                                    i,
                                    experienceContent,
                                    setAcheivmentContent
                                  );
                                }}
                                name="Description"
                                type="text"
                                className="form-control exp_description"
                                id=""
                                // onkeyup="generateCV()"
                              />
                              <span className="form-text"></span>
                            </FormElem>
                          </Cols3>

                          <RepeaterRemovebtn
                            data-repeater-delete
                            type="button"
                            
                            onClick={() =>
                              removeSection(
                                i,
                                experienceContent,
                                setExperienceContent
                              )
                            }
                          >
                            -
                          </RepeaterRemovebtn>
                        </Cvformrow>
                      );
                    })}
                  </div>
                </div>
                <Repeateraddbtn
                  type="button"
                  data-repeater-create
                  value="Add"
                  onClick={() => {
                    AddSection(educationContent, setExperienceContent);
                  }}
                  
                >
                  +
                </Repeateraddbtn>
              </div>
            </OutputDivs>

            <OutputDivs>
              <Cvformrowtitle >
                <h3>education</h3>
              </Cvformrowtitle>
              {/* education */}
              <div className="row-separator repeater">
                {educationContent.map((data, i) => {
                  return (
                    <div
                      key={i}
                      className="repeater"
                      data-repeater-list="group-c"
                    >
                      <div data-repeater-item>
                        <Cvformrow>
                          <Cols3>
                            <FormElem>
                              <Formlabel >
                                School
                              </Formlabel>
                              <input
                                value={data.School}
                                onChange={(e) => {
                                  sectionsHandlechange(
                                    e,
                                    i,
                                    educationContent,
                                    setEducationContent
                                  );
                                }}
                                name="School"
                                type="text"
                                className="form-control edu_school"
                                id=""
                                // onkeyup="generateCV()"
                              />
                              <span className="form-text"></span>
                            </FormElem>
                            <FormElem>
                              <Formlabel >
                                Degree
                              </Formlabel>
                              <input
                                value={data.Degree}
                                onChange={(e) => {
                                  sectionsHandlechange(
                                    e,
                                    i,
                                    educationContent,
                                    setEducationContent
                                  );
                                }}
                                name="Degree"
                                type="text"
                                className="form-control edu_degree"
                                id=""
                                // onkeyup="generateCV()"
                              />
                              <span className="form-text"></span>
                            </FormElem>
                            <FormElem>
                              <Formlabel >
                                City
                              </Formlabel>
                              <input
                                value={data.City}
                                onChange={(e) => {
                                  sectionsHandlechange(
                                    e,
                                    i,
                                    educationContent,
                                    setEducationContent
                                  );
                                }}
                                name="City"
                                type="text"
                                className="form-control edu_city"
                                id=""
                                // onkeyup="generateCV()"
                              />
                              <span className="form-text"></span>
                            </FormElem>
                          </Cols3>

                          <Cols3>
                            <FormElem>
                              <Formlabel >
                                Start Date
                              </Formlabel>
                              <input
                                value={data.Startdate}
                                onChange={(e) => {
                                  sectionsHandlechange(
                                    e,
                                    i,
                                    educationContent,
                                    setEducationContent
                                  );
                                }}
                                name="Startdate"
                                type="date"
                                className="form-control edu_start_date"
                                id=""
                                // onkeyup="generateCV()"
                              />
                              <span className="form-text"></span>
                            </FormElem>
                            <FormElem>
                              <Formlabel>
                                Graduation Date
                              </Formlabel>
                              <input
                                value={data.Graduationdate}
                                onChange={(e) => {
                                  sectionsHandlechange(
                                    e,
                                    i,
                                    educationContent,
                                    setEducationContent
                                  );
                                }}
                                name="Graduationdate"
                                type="date"
                                className="form-control edu_graduation_date"
                                id=""
                                // onkeyup="generateCV()"
                              />
                              <span className="form-text"></span>
                            </FormElem>
                            <FormElem>
                              <Formlabel>
                                Description
                              </Formlabel>
                              <input
                                value={data.Description}
                                onChange={(e) => {
                                  sectionsHandlechange(
                                    e,
                                    i,
                                    educationContent,
                                    setEducationContent
                                  );
                                }}
                                name="Description"
                                type="text"
                                className="form-control edu_description"
                                id=""
                                // onkeyup="generateCV()"
                              />
                              <span className="form-text"></span>
                            </FormElem>
                          </Cols3>

                          <RepeaterRemovebtn
                            data-repeater-delete
                            type="button"
                            onClick={() => {
                              removeSection(
                                i,
                                educationContent,
                                setEducationContent
                              );
                            }}
                            
                          >
                            -
                          </RepeaterRemovebtn>
                        </Cvformrow>
                      </div>
                    </div>
                  );
                })}
                <Repeateraddbtn
                  type="button"
                  data-repeater-create
                  value="Add"
                  onClick={() =>
                    AddSection(educationContent, setEducationContent)
                  }
                  
                >
                  +
                </Repeateraddbtn>
              </div>
            </OutputDivs>
            {/* projects  */}
            <OutputDivs>
              <Cvformrowtitle>
                <h3>projects</h3>
              </Cvformrowtitle>
              <div className="row-separator repeater">
                {projectContent.map((data, i) => {
                  return (
                    <div
                      key={i}
                      className="repeater"
                      data-repeater-list="group-d"
                    >
                      <div data-repeater-item>
                        <Cvformrow>
                          <Cols3>
                            <FormElem>
                              <Formlabel>
                                Project Name
                              </Formlabel>
                              <input
                                value={data.Title}
                                onChange={(e) => {
                                  sectionsHandlechange(
                                    e,
                                    i,
                                    projectContent,
                                    setProjectContent
                                  );
                                }}
                                name="Title"
                                type="text"
                                className="form-control proj_title"
                              />
                              <span className="form-text"></span>
                            </FormElem>
                            <FormElem>
                              <Formlabel >
                                Project link
                              </Formlabel>
                              <input
                                value={data.Projectlink}
                                onChange={(e) => {
                                  sectionsHandlechange(
                                    e,
                                    i,
                                    projectContent,
                                    setProjectContent
                                  );
                                }}
                                name="Projectlink"
                                type="text"
                                className="form-control proj_link"
                              />
                              <span className="form-text"></span>
                            </FormElem>
                            <FormElem>
                              <Formlabel >
                                Description
                              </Formlabel>
                              <input
                                value={data.Description}
                                onChange={(e) => {
                                  sectionsHandlechange(
                                    e,
                                    i,
                                    projectContent,
                                    setProjectContent
                                  );
                                }}
                                name="Description"
                                type="text"
                                className="form-control proj_description"
                              />
                              <span className="form-text"></span>
                            </FormElem>
                          </Cols3>
                          <RepeaterRemovebtn
                            data-repeater-delete
                            type="button"
                            onClick={() => {
                              removeSection(
                                i,
                                projectContent,
                                setProjectContent
                              );
                            }}
                            
                          >
                            -
                          </RepeaterRemovebtn>
                        </Cvformrow>
                      </div>
                    </div>
                  );
                })}
                <Repeateraddbtn
                  type="button"
                  data-repeater-create
                  value="Add"
                  onClick={() => AddSection(projectContent, setProjectContent)}
                  
                >
                  +
                </Repeateraddbtn>
              </div>
            </OutputDivs>
            {/* skills  */}
            <OutputDivs>
              <Cvformrowtitle>
                <h3>skills</h3>
              </Cvformrowtitle>

              <div >
                {skillsContent.map((data, i) => {
                  return (
                    <div className="repeater" data-repeater-list="group-e">
                      <div data-repeater-item>
                        <Cvformrow>
                          <FormElem>
                            <Formlabel>
                              Skill
                            </Formlabel>
                            <input
                              value={data.Skills}
                              onChange={(e) => {
                                sectionsHandlechange(
                                  e,
                                  i,
                                  skillsContent,
                                  setSkillsContent
                                );
                              }}
                              name="Skills"
                              type="text"
                              className="form-control skill"
                            />
                            <span className="form-text"></span>
                          </FormElem>

                          <RepeaterRemovebtn
                            data-repeater-delete
                            type="button"
                            onClick={() => {
                              removeSection(
                                i,
                                skillsContent,
                                setSkillsContent
                              );
                            }}
                            
                          >
                            -
                          </RepeaterRemovebtn>
                        </Cvformrow>
                      </div>
                    </div>
                  );
                })}
                <Repeateraddbtn
                  type="button"
                  data-repeater-create
                  value="Add"
                  onClick={()=>AddSection(skillsContent,setSkillsContent)}
                  
                >
                  +
                </Repeateraddbtn>
              </div>
            </OutputDivs>
          </form>
        </div>
        <Container />
      </section>
      {/* resume template edit  */}
      <section id="preview-sc" className="print_area">
        <Container>
          <div className="preview-cnt">
            <div className="preview-cnt-l bg-green text-white">
              <div className="preview-blk">
                <div className="preview-image">
                  <img src={img} alt="" id="image_dsp" />
                </div>
                <div className="preview-item preview-item-name">
                  <span className="preview-item-val fw-6" id="fullname_dsp">
                    {user.FirstName +
                      " " +
                      user.MiddleName +
                      " " +
                      user.LastName}
                  </span>
                </div>
                <div className="preview-item">
                  <span
                    className="preview-item-val text-uppercase fw-6 ls-1"
                    id="designation_dsp"
                  >
                    {" "}
                    {user.Designation}
                  </span>
                </div>
              </div>

              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>about</h3>
                </div>
                <div className="preview-blk-list">
                  <div className="preview-item">
                    <span className="preview-item-val" id="phoneno_dsp">
                      {user.Phoneno}
                    </span>
                  </div>
                  <div className="preview-item">
                    <span className="preview-item-val" id="email_dsp">
                      {user.Designation}
                    </span>
                  </div>
                  <div className="preview-item">
                    <span className="preview-item-val" id="address_dsp">
                      {user.Address}
                    </span>
                  </div>
                  <div className="preview-item">
                    <span className="preview-item-val" id="summary_dsp">
                      {user.Summary}
                    </span>
                  </div>
                </div>
              </div>
              {/* skillsDIsplay */}
              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>skills</h3>
                </div>
                <div className="skills-items preview-blk-list" id="skills_dsp">
                  {/* <!-- skills list here --> */}
                  {skillsContent.map((output, i) => {
                    return (
                      <div
                        className="experiences-items preview-blk-list"
                        id="Skills_dsp"
                      >
                        <span>
                          <p className="fw_6">{output.Skills}</p>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* achievment output */}
            <div className="preview-cnt-r bg-white">
              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>Achievements</h3>
                </div>
                {acheivmentContent.map((items) => {
                  return (
                    <div
                      className="achievements-items preview-blk-list"
                      id="achievements_dsp"
                    >
                      <span className="achievmentD ">
                        <p className="fw-6">
                          {items.title}
                          {}
                        </p>
                        <p>{items.description}</p>
                        {/* console.log(acheivmentContent) */}
                      </span>
                    </div>
                  );
                })}
              </div>
              {/* education out */}
              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>educations</h3>
                </div>
                {educationContent.map((output, i) => {
                  return (
                    <div
                      className="experiences-items preview-blk-list"
                      id="educations_dsp"
                    >
                      <span className="experience">
                        <p className="fw_6">{output.School}</p>
                        <p>{output.Degree}</p>
                        <p>{output.City}</p>
                      </span>
                      <span className="date">
                        <p>{output.Startdate}</p>
                        <p>{output.Graduationdate}</p>
                      </span>
                      <span className="expD">
                        <p>{output.Description}</p>
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>experiences</h3>
                </div>
                {experienceContent.map((output, i) => {
                  return (
                    <div
                      className="experiences-items preview-blk-list"
                      id="experiences_dsp"
                    >
                      <span className="experience">
                        <p className="fw_6">{output.Title}</p>
                        <p>{output.Company}</p>
                        <p>{output.Location}</p>
                      </span>
                      <span className="date">
                        <p>{output.Startdate}</p>
                        <p>{output.Enddate}</p>
                      </span>
                      <span className="expD">
                        <p>{output.Description}</p>
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>projects</h3>
                </div>
                {projectContent.map((output, i) => {
                  return (
                    <div
                      className="educations-items preview-blk-list"
                      id="projects_dsp"
                    >
                      <span>
                        <p className="fw_6">
                          {output.Title + "-" + output.Projectlink}
                        </p>
                        <p>{output.Description}</p>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="print-btn-sc">
        <Container>
          <button
            onClick={Download}
            id="download-btn"
            className="print-btn btn btn-primary"
          >
            <p>Download</p>
            <svg
              width="26"
              height="26"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
            </svg>
          </button>
        </Container>
      </section>

      {/* <script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E=" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.repeater/1.2.1/jquery.repeater.js" integrity="sha512-bZAXvpVfp1+9AUHQzekEZaXclsgSlAeEnMJ6LfFAvjqYUVZfcuVXeQoN5LhD7Uw0Jy4NCY9q3kbdEXbwhZUmUQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        
        <script src="app.js"></script> */}
    </>
  );
}

export default App;
