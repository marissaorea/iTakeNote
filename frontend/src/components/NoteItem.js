import React from 'react';

const NoteItem = (props) => {
//the entire li tag should have a onclick
  return(
        <div key={props.note.id} onClick={() => {props.handleClickDetail(props.note)}}>
          <li>
            <br />
            <h2>{props.note.title}</h2>
            <p>{props.note.body}</p>
            <br />
          </li>
        </div>
        )

}//end of functional component

export default NoteItem;
