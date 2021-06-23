import React, { Component } from "react";
import ComponentHeader from "./component-header";
import ComponentLabel from "./component-label";

class CustomElement extends Component {
  constructor(props) {
    super(props);
    this.inputField = React.createRef();
    this.state = {
      hasClicked: false,
    };
  }

  render() {
    const props = {};
    props.name = this.props.data.field_name;
    props.defaultValue = this.props.defaultValue;
    // props.hasClicked = this.state.hasClicked;
    console.log("this.state.hasClicked", this.state.hasClicked);
    if (this.props.mutable && this.props.data.forwardRef) {
      props.ref = this.inputField;
    }

    if (this.props.read_only) {
      props.disabled = "disabled";
    }

    // Return if component is invalid.
    if (!this.props.data.component) return null;
    const Element = this.props.data.component;

    let baseClasses = "SortableItem rfb-item";
    if (this.props.data.pageBreakBefore) {
      baseClasses += " alwaysbreak";
    }

    return (
      <div
        className={baseClasses}
        onClick={() => this.setState({ hasClicked: !this.state.hasClicked })}
      >
        <ComponentHeader {...this.props} hasClicked={this.state.hasClicked} />
        <div className="form-group">
          <ComponentLabel className="form-label" {...this.props} />
          <Element
            data={this.props.data}
            {...this.props.data.props}
            {...props}
          />
        </div>
      </div>
    );
  }
}

CustomElement.propTypes = {};

export default CustomElement;
