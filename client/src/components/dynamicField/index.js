import React, { Component } from "react";

class DynamicField extends Component {
  render() {
    let input;
    switch (this.props.field.type) {
      case "text":
        input = (
          <input value={this.props.value} onChange={this.props.onChange} />
        );
        break;
      case "textarea":
        input = (
          <textarea value={this.props.value} onChange={this.props.onChange} />
        );
        break;
      default:
    }
    return (
      <div className={"input-container " + this.props.field.type}>
        <label>
          {this.props.field.label}
          <br />
          {input}
        </label>
      </div>
    );
  }
}

export default DynamicField;
