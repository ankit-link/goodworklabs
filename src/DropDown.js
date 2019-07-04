import React from 'react';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '1'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
      this.setState({
          value: e.target.value
      })
      this.props.submitFunc.handleInputChange(e)
    }


  render() {
  const options = this.props.config.values.map(val => {
          return <option value={val}>{val}</option>
        });
    return (
     <div class="form-group col-md-4">
    <label>{this.props.config.label} </label>
      <select value={this.state.value} name={this.props.config.name} onChange={this.handleChange}>
      <option value='1' disabled>Select {this.props.config.label}</option>
      {options}

      </select>

    </div>

    );
  }
}

export default DropDown;


