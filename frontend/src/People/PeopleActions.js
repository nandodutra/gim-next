import axios from "axios";
import { toastr } from "react-redux-toastr";
import contants from '../consts'

export function getPeopleById(id) {
  return dispatch => {
    axios.get(`${contants.API_URL}/people/${id}`)
      .then(resp => {
        dispatch([
          { type: 'PEOPLE_FETCHED', payload: resp.data }
        ])
      })
      .catch(e => {
          e.response.data.forEach(err => toastr.error('Erro', err.message))
      });
  }
}