import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {


  return (
    <ul>
      {props.notes.map(note => <NoteItem key={note.id} note={note} handleClickDetail={props.handleClickDetail} /> )}
    </ul>
  );
}

export default NoteList;
