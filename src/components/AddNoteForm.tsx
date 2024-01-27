import React from "react";
import { Input, TextArea } from "./Form";

class AddNoteForm extends React.Component {
  render() {
    return (
      <div className="fixed inset-0 m-auto w-1/2 h-fit">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input
            type="text"
            id="note-title"
            name="note-title"
            pattern="[A-Za-z]{3}"
            title="Note Title"
            label="Title"
          />
          <TextArea
            id="note-body"
            name="note-body"
            title="Note Body"
            label="Body"
          />
          <Input type="submit" />
        </form>
      </div>
    );
  }
}

export default AddNoteForm;
