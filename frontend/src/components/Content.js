import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

class Content extends Component {
  constructor(props) {
    super(props)

    this.state = {
      click: false
    }
  }

  toggleEdit = () => {
    this.setState({
      click: !this.state.edit
    })
  }

  // if there's a current note, check if edited. if there's no current note, then render instructions.

  renderContent = () => {
    if (this.state.click) {
      return <NoteEditor currentNote={this.props.currentNote} handleUpdate={this.props.handleUpdate}/>;
    } else if (this.props.currentNote) {
      return <NoteViewer notes={this.props.notesToDisplay} currentNote={this.props.currentNote} toggleEdit={this.toggleEdit} />;
    } else {
      return <Instructions />;
    }
  }

  render() {
    // console.log(this.props)
    return (
      <div className='master-detail-element detail' onClick={this.props.handleClickDetail}>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
