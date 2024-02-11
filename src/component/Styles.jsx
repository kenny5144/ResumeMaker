import styled from "styled-components";
// import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.6rem;
`;
export const OutputDivs = styled.div`
  margin: 3rem 0;
`;

export const Cvformrowtitle = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  margin-bottom: 2rem;
  border-radius: 8px;
  h3 {
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 18px;
  }
`;
export const Cvformrow = styled.div`
  padding: 3rem 2rem 0 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;
  position: relative;
  border-radius: 10px;
`;
export const FormElem = styled.div`
  margin-bottom: 3rem;
  position: relative;
`;
export const Formlabel = styled.label`
  display: block;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  margin-bottom: 0.5rem;
`;
export const Formcontrol = styled.input`
  border: 2px solid #fff;
  border-radius: 10px;
  font-size: 14px;
  padding: 0.8rem 1.6rem;
  font-family: inherit;
  width: 100%;
  outline: 0;
  transition: all 300ms ease-in-out;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 15px;

  &:focus {
    border-color: #fff;
  }
`;
export const formtext = styled.span`
  color: #ca0b00;
  font-size: 12px;
  position: absolute;
  letter-spacing: 0.5px;
  top: calc(100% + 2px);
  left: 0;
  width: 100%;
  margin-top: 3px;
`;
export const Removebtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 999;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1.6rem;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
`;
export const Cols3 = styled.div`
  display: grid;
`;
export const Cols2 = styled.div`
  display: grid;
`;

export const Addbtn = styled.button`
  width: 30px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.1);
  font-size: 18px;
  color: #fff;
  margin: 1rem 0;
  border: 2px solid #fff;
  align-items: center;
  justify-content: center;
`;

export const PreviewcntL = styled.div`
  padding: 3rem 3rem 2rem 3rem;
  .preview-cnt-l .preview-blk:nth-child(1) {
    text-align: center;
  }
`;
export const PreviewcntR = styled.div`
  padding: 3rem 3rem 3rem 4rem;
`;
export const PreviewImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: auto;
  margin-left: auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Previewitemname = styled.div`
  font-size: 2.4rem;
  font-weight: 600;
  margin: 1.8rem 0;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    bottom: -10px;
    width: 50px;
    height: 1.5px;
    background-color: rgba(255, 255, 255, 0.5);
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Previewblk = styled.div`
  padding: 1rem 0;
  margin-bottom: 1rem;
`;
export const Previewblktitle = styled.div`
  margin-bottom: 1rem;
  h3 {
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.08);
    padding-bottom: 0.5rem;
  }
`;
export const previewblklist = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
  opacity: 0.95;
`;
export const previewitem = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
  opacity: 0.95;
`;
export const Repeateraddbtn = styled.button`
  width: 30px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.1);
  font-size: 18px;
  color: #fff;
  margin: 1rem 0;
  border: 2px solid #fff;
  align-items: center;
  justify-content: center;
`;
export const RepeaterRemovebtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 999;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1.6rem;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
`;

export const PreviewCnt = styled.div`
  border-radius: 5px;
  display: grid;
  grid-template-columns: 32% auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  overflow: hidden;
`;
export const PreviewCntL = styled.div`
  padding: 3rem 3rem 2rem 3rem;
`;

export const previewcntr = styled.div`
  padding: 3rem 3rem 3rem 4rem;
`;

// .preview-cnt-r .export const {
//     color:#1e25= styled.div`2;
// }
// .preview-cnt-r .preview-blk-list .preview-item{
//     margin-top: 1.8rem;
// }

// .achievements-items.preview-blk-list .preview-item span:first-child,
// .educations-items.preview-blk-list .preview-item span:first-child,
// .experiences-items.preview-blk-list .preview-item span:first-child{
//     display: block;
//     font-weight: 600;
//     margin-bottom: 1rem;
//     background-color: rgba(0, 0, 0, 0.03);
// }

// .educations-items.preview-blk-list .preview-item span:nth-child(2),
// .experiences-items.preview-blk-list .preview-item span:nth-child(2){
//     font-weight: 600;
//     margin-right: 1rem;
// }

// .educations-items.preview-blk-list .preview-item span:nth-child(3),
// .experiences-items.preview-blk-list .preview-item span:nth-child(3){
//     font-style: italic;
//     margin-right: 1rem;
// }

// .educations-items.preview-blk-list .preview-item span:nth-child(4),
// .educations-items.preview-blk-list .preview-item span:nth-child(5),
// .experiences-items.preview-blk-list .preview-item span:nth-child(4),
// .experiences-items.preview-blk-list .preview-item span:nth-child(5){
//     margin-right: 1rem;
//     background-color: #084C41;
//     color: #fff;
//     padding: 0 1rem;
//     border-radius: 0.6rem;
// }
// /* educations-items.preview-blk-list .preview-item */
// export const Eduandprev = styled.div`
//     font-size: 13.5px;
//     display: block;
//     opacity: 0.8;
//     margin-top: 1rem;
// `
//  span:nth-child(6),
// .experiences-items.preview-blk-list .preview-item span:nth-child(6){
//     font-size: 13.5px;
//     display: block;
//     opacity: 0.8;
//     margin-top: 1rem;
// }
// .projects-items.preview-blk-list .preview-item span{
//     display: block;

// }
// .experience{
//     display: flex;
//     gap: 1rem;
//     justify-content: space-around;
// }

// .date{
//     display: flex;
//     justify-content: space-around;
//     gap: 1rem;
// }
// .expD{
//     justify-content: space-around;
//     text-align: center;

// }
