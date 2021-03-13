import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../consts'

function submit(values, url) {
  return dispatch => {
    console.log(values);
    axios.post(url, values)
      .then(resp => {
        toastr.success('Sucesso', 'Login efetuado com sucesso!')
        dispatch([
          { type: 'USER_FETCHED', payload: resp.data }
        ])
      })
      .catch(e => {
          e.response.data.forEach(err => toastr.error('Erro', err.message))
      });
  }
}

export function login(values) {
  return submit(values, `${consts.OAPI_URL}/login`)
}

export function validateToken(token) {
  return dispatch => {
    if (token) {
      axios.post(`${consts.OAPI_URL}/check-token`, { token })
        .then(resp => {
          dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.valid })
        })
        .catch(e => dispatch({ type: 'TOKEN_VALIDATED', payload: false }))
    }
  }
}