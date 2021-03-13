import React from 'react'
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

const message = props => (
  <ReduxToastr 
    timeOut={4000}
    newestOnTop={true}
    preventDuplicates={true}
    position="top-right"
    transitionIn="fadeIn"
    transitionOut="fadeOut"
    progressBar
  />
)

export default message