import React from 'react';
import getFormElement from './util';

class Flexi extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    debugger;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    if(this.state) {
        console.log(this.state)
    }

      event.preventDefault();
    }

  render() {
  console.log("State" , this.state)
  const config = this.props.config.items;
  const formItems = [];
  config.forEach(item => {
        const addProps = {
            handleInputChange: this.handleInputChange
        }
        const formitem =  getFormElement(item, addProps);
        formItems.push(formitem);
  })
    return (
       <div class="col-xs-1 text-center">
      <form onSubmit={this.handleSubmit}>
         {formItems}
              <input type="submit" className="btn btn-primary" value="Submit" />
       </form>
       </div>
    );
  }
}

export default Flexi;