import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Flexi from './Flexi';
import * as serviceWorker from './serviceWorker';

const flexiconfig =  {
                    items: [

                        {
                            name: "person_name",
                            label: "Person's Name",
                            type: "TextField"
                        },

                        {
                            name: "states",
                            label: "Person's state",
                            type: "DropDown",
                            values: ["Maharashtra", "Kerala", "Tamil Nadu"]
                        }
                    ]
};

ReactDOM.render(<Flexi config={flexiconfig}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
