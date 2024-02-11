import React from 'react'

const Addbtn = ({AddSection}) => {
  return (
    <>
      <button type = "button" onClick={AddSection} data-repeater-create value = "Add" className = "repeater-add-btn">+</button>
    </>
  )
}

export default Addbtn
