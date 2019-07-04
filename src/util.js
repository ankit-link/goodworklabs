import React from 'react';
import TextField from './TextField';
import DropDown from './DropDown';

const getFormElement = (item, addProps) => {
       switch(item.type) {
        case 'TextField':
            return <TextField config={item} submitFunc={addProps}/>
        case 'DropDown':
            return <DropDown config={item} submitFunc={addProps}/>
         default:
          return '';
       }

}

export default getFormElement;