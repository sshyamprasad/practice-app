
import React from 'react'

const ErrorModal = (props) => {
  return (
    <div>
        <h2>{props.title}</h2>
        <p style={{color:'red'}}>{props.error}</p>
        <footer>
            <button type='button' onClick={props.closeError} >Close</button>
        </footer>
    </div>
  )
}

export default ErrorModal