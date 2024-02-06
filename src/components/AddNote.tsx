import React from "react";
import { Input, TextArea } from "./FormElements";

type addNoteButtonProps = {
  onClick: () => any;
};

type addNoteFormProps = {
  onAddNote: (noteTitle: string, noteBody: string) => any;
  onClose: () => any;
};

type addNoteFormState = {
  noteTitle: string;
  noteBody: string;
};

export function Button({ onClick }: addNoteButtonProps) {
  return (
    <Input
      type="button"
      onClick={onClick}
      className="mb-8 bg-primary cursor-pointer text-xl font-bold text-slate-50"
      value={"Add Note"}
    />
  );
}

export class Form extends React.Component<addNoteFormProps, addNoteFormState> {
  constructor(props: addNoteFormProps) {
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
            this.props.onAddNote(this.state.noteTitle, this.state.noteBody);
            this.setState({ noteTitle: "", noteBody: "" });
            this.props.onClose();
          }}
        >
          <div className="flex flex-row">
            <h2 className="flex-1 text-2xl font-bold text-secondary">
              Add Note
            </h2>
            <button
              className="flex justify-center items-center text-4xl rounded-md bg-slate-200 h-8 w-8 box-border"
              onClick={this.props.onClose}
            >
              ×
            </button>
          </div>
          <Input
            type="text"
            id="note-title"
            name="note-title"
            // pattern="[A-Za-z]{3}"
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
