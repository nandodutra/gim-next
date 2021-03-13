import React from "react"

const Input = props => (
  <input { ...props.input }
    type={props.type}
    className="form-control"
    placeholder={props.placeholder}
    />
)

export default Input