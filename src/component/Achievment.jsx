import React from "react";
import Removebtn from "./Removebtn";
 import { useState } from "react";
 import {Cvformrow,Cvformrowtitle,FormElem,Formcontrol, Formlabel} from  "./Styles"

const Achievment = ({ acheivmentContent, setAcheivmentContent }) => {
  const achievmentValuesOnchange = (e, i) => {
    console.log("l", e.target);

    let { name, value } = e.target;
    let onchangeVal = [...acheivmentContent];
    onchangeVal[i][name] = value;
    setAcheivmentContent(onchangeVal);
    // if (name === validType.){

    //   if (!emailRegex.test(  value)) {
    //     console.log(...user.Email)
    //     console.log(user.Email)
    //     setMessage(
    //      { Email:"the email is invalid"})
    //   }else {
    //     setMessage(
    //       { Email:""})
    //   } 
    // }
  };

  const removeSection = (i) => {
    console.log("you have removed this section ");
    const removematch = [...acheivmentContent];
    removematch.splice(i,1);
    setAcheivmentContent(removematch);
    
    
  };
  return (
    <>
    {acheivmentContent.map((data, i) => {
      return (
        <div key={i} className="row-separator repeater">
          <div className="repeater" data-repeater-list="group-a">
            <div data-repeater-item>
              <Cvformrow>
                <div className="cols-2">
                  <FormElem>
                    <Formlabel>Title</Formlabel>
                    <Formcontrol
                      value={data.title}
                      onChange={(e) => achievmentValuesOnchange(e, i)}
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
                      onChange={(e) => achievmentValuesOnchange(e, i)}
                      name="description"
                      type="text"
                      className="form-control achieve_description"
                      id=""
                      // onkeyup="generateCV()"
                    />
                    <span className="form-text"></span>
                  </FormElem>
                  <button
                    data-repeater-delete
                    onClick={()=>removeSection(i)}
                    type="button"
                    className="repeater-remove-btn"
                  >
                    -
                  </button>
                </div>
              </Cvformrow>
            </div>
          </div>
        </div>
      );
    })}
    </>
  );
};

export default Achievment;
