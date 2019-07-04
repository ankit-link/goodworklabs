import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Flexi from './Flexi';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import formReducer from './reducers/formreducer'
import FlexiContainer from './containers/formcontainer'
const flexiconfig =  {
                    items: [

                        {
                            name: "person_name",
                            label: "firstname",
                            type: "TextField"
                        },

                        {
                            name: "person_lasname",
                            label: "lastname",
                            type: "TextField"
                        },

                        {
                            name: "states",
                            label: "state",
                            type: "DropDown",
                            values: ["Maharashtra", "Kerala", "Tamil Nadu"]
                        },

                        {
                            name: "Gender",
                            label: "gender",
                            type: "DropDown",
                            values: ["Male","female","other"]
                        }
                    ]
};

const store = createStore(formReducer)

window.store = store;

ReactDOM.render(
<Provider store={store}>
    <FlexiContainer config={flexiconfig}/>
  </Provider>, document.getElementById('root'));

