/**
 * <HeaderBar />
 */

import React from "react";
import Grip from "../multi-column/grip";

export default class HeaderBar extends React.Component {
  render() {
    return (
      <div
        className={"toolbar-header"}
      >
        <span className="badge badge-secondary">{this.props.data.text}</span>
        {this.props.hasClicked && <div className="toolbar-header-buttons">
          {this.props.data.element !== "LineBreak" && (
            <div
              className="btn is-isolated"
              onClick={this.props.editModeOn.bind(
                this.props.parent,
                this.props.data
              )}
            >
              <i className="is-isolated fas fa-edit"></i>
            </div>
          )}
          <div
            className="btn is-isolated"
            onClick={this.props.onDestroy.bind(this, this.props.data)}
          >
            <i className="is-isolated fas fa-trash"></i>
          </div>
        </div>}
      </div>
    );
  }
}
