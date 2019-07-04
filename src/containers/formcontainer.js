import { connect } from 'react-redux'
import { updateForm } from '../actions/formactions'
import Flexi from '../Flexi'
import {getFirstname} from './selectors'


const mapStateToProps = (state) => ({
    name: getFirstname(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => {
    dispatch(updateForm({
    person_name: 'amkie',
        person_lastname: 'pandeh',
        gender: 'male',
        states: 'ddddd'
    }))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Flexi)