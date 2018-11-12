import React, { Component } from "react";
import NoteList from "./NoteList";

class Sidebar extends Component {


  render() {
    return (
      <div className="master-detail-element sidebar">
        <NoteList
          notes={this.props.notes}
          handleClickDetail={this.props.handleClickDetail}
        />
        <button onClick={this.props.newNote}>New</button>
      </div>
    );
  }
} //end of class
export default Sidebar;
