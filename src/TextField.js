import React from 'react';

class TextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
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
    return (
    <div class="form-group">
    <label className="col-sm-2 col-form-label">{this.props.config.label}</label>
    <div class="col-sm-10">
      <input type="text" className="form-control" value={this.state.value} name={this.props.config.name} onChange={this.handleChange} />
    </div>
    </div>

    );
  }
}

export default TextField;


