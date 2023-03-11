import React from 'react'

const DisplayItem = (props) => {
  return (
    <li>{props.user.name} ({props.user.age} years old)</li>
  )
}
export default DisplayItem