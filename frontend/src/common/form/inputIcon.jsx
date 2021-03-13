import React from 'react'

const InputIcon = props => (
  <div className="input-group mb-3">
    <input {...props.input}
        className='form-control'
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type} />
    <div className="input-group-append">
      <div className="input-group-text">
        <span className={ `fas fa-${props.icon}` }></span>
      </div>
    </div>
  </div>
)

export default InputIcon