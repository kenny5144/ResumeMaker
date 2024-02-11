import React from 'react'

const Removebtn = ({removeSection, i}) => {
  return (
    <>
      <button data-repeater-delete onClick={removeSection}type = "button" className = "repeater-remove-btn">-</button>
    </>
  )
}

export default Removebtn
