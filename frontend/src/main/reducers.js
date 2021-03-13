import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import SigninReducer from '../Signin/signinReducer'
import TemplateReducer from '../common/template/templateReducer'
import PeopleReducer from '../People/PeopleReducer'

const rootReducer = combineReducers({
  auth: SigninReducer,
  form: formReducer,
  toastr: toastrReducer,
  template: TemplateReducer,
  people: PeopleReducer
})

export default rootReducer;