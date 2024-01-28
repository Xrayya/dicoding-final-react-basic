import React from "react";
import { Input, TextArea } from "./Form";

type addNoteProps = {
  onPost: (noteTitle: string, noteBody: string) => any;
};

type addNoteStates = {
  noteTitle: string;
  noteBody: string;
};

class AddNoteForm extends React.Component<addNoteProps, addNoteStates> {
  constructor(props: addNoteProps) {
    super(props);
    this.state = {
      noteTitle: "",
      noteBody: "",
    };
  }

  private handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((prev) => {
      return { ...prev, noteTitle: e.target.value };
    });
  };

  private handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState((prev) => {
      return { ...prev, noteBody: e.target.value };
    });
  };

  render() {
    return (
      <div className="fixed inset-0 m-auto w-1/2 h-fit">
        <form
          className="p-4 rounded-lg bg-slate-300"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onPost(this.state.noteTitle, this.state.noteBody);
          }}
        >
          <h2 className="text-2xl font-bold text-secondary">Add Note</h2>
          <Input
            type="text"
            id="note-title"
            name="note-title"
            pattern="[A-Za-z]{3}"
            title="Note Title"
            label="Title"
            value={this.state.noteTitle}
            onChange={this.handleTitleChange}
            className="bg-slate-50 text-slate-600"
          />
          <TextArea
            id="note-body"
            name="note-body"
            title="Note Body"
            label="Body"
            value={this.state.noteBody}
            onChange={this.handleBodyChange}
            className="h-32 bg-slate-50 text-slate-600"
          />
          <Input
            type="submit"
            value={"Post"}
            className="w-fit mt-4 cursor-pointer bg-secondary text-slate-50"
          />
        </form>
      </div>
    );
  }
}

export default AddNoteForm;
