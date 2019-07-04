import {UPDATE_FORM} from '../actions/formactions';


const initialState =
  {
    person_name: '',
    person_lasname: '',
    state: '1',
    gender: '1'
  }


export default function formReducer(state = initialState, action) {
  switch (action.type) {

    case UPDATE_FORM:
      return {
        ...state,
          person_name: action.name,
          person_lasname: action.lastname,
          state: action.state,
          gender: action.gender

      }

    default:
      return state
  }
}