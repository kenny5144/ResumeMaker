import { useState } from "react";
import styled from "styled-components";
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
} from "../src/component/Styles";
import Education from "./Education";
import Project from "./component/Project";
import Skills from "./component/Skills";
import Achievment from "./component/Achievment";
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
    TEXT: "text",
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
   console.log(value)
    if (name === validType.EMAIL){

      if (!emailRegex.test(  value)) {
        console.log(...user.Email)
        console.log(user.Email)
        setMessage(
         { Email:"the email is invalid"})
      }else {
        setMessage(
          { Email:""})
      } 
    }
    if (name === validType.PHONENO){

      if (!phoneRegex.test(value )) {
        setMessage(
         { PhoneNo:"the Phone number is invalid"})
      }else {
        setMessage(
          { PhoneNo:""})
      } 
    }
    if (name === validType.TEXT){
      console.log("g", name)

      if (!strRegex.test(  user.FirstName)) {
        setMessage(
         { Text:"the Phone number is invalid"})
      }else {
        setMessage(
          { Text:"worked"})
      } 
    }
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  }
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

 
  const AddSection = () => {
    console.log("you have added this section ");
    const data = [...acheivmentContent, { title: "", description: "" }];
    setAcheivmentContent(data);
  };
  //  formvalidATION
  function formValidation() {
    console.log(user.Email);
    if (emailRegex.test(user.Email)) {
      setMessage({
        Email: "Email is valid",
      });
    } else if (!emailRegex.test(user.Email) && user.Email !== "") {
      setMessage({
        Email: "Email is not  valid",
      });
    } else {
      setMessage({
        Email: "",
      });
    }
  }
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
                <div className="cols-3">
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
                </div>

                <div className="cols-3">
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
                </div>

                <div className="cols-3">
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
                </div>
              </Cvformrow>
            </OutputDivs>
            {/* acheivment  */}
            <OutputDivs>
              <Cvformrowtitle>
                <h3>achievements</h3>
              </Cvformrowtitle>

              <Achievment acheivmentContent={acheivmentContent} setAcheivmentContent={setAcheivmentContent}/>
              {/* {setAcheivmentContent(<Achievment removeSection={removeSection}/>)} */}
              <Addbtn AddSection={AddSection} />
            </OutputDivs>

            {/* experience */}
            <OutputDivs>
              <Experience
                experienceContent={experienceContent}
                setExperienceContent={setExperienceContent}
              />
            </OutputDivs>

            <OutputDivs>
              <Education
                educationContent={educationContent}
                setEducationContent={setEducationContent}
              />
            </OutputDivs>
            {/* projects  */}
            <OutputDivs>
              <Project
                projectContent={projectContent}
                setProjectContent={setProjectContent}
              />
            </OutputDivs>
            {/* skills  */}
            <OutputDivs>
              <Skills
                skillsContent={skillsContent}
                setSkillsContent={setSkillsContent}
              />
            </OutputDivs>
          </form>
        </div>
        <Container />
      </section>
      {/* resume template edit  */}
      <section id="preview-sc" className="print_area">
        <div className="container">
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
                      {user.PhoneNo}
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
        </div>
      </section>

      <section className="print-btn-sc">
        <div className="container">
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
        </div>
      </section>

      {/* <script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E=" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.repeater/1.2.1/jquery.repeater.js" integrity="sha512-bZAXvpVfp1+9AUHQzekEZaXclsgSlAeEnMJ6LfFAvjqYUVZfcuVXeQoN5LhD7Uw0Jy4NCY9q3kbdEXbwhZUmUQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        
        <script src="app.js"></script> */}
    </>
  );
}

export default App;