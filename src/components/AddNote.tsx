import React, { createRef } from "react";
import { Input, TextArea } from "./FormElements";

type addNoteFormProps = {
  onAddNote: (noteTitle: string, noteBody: string) => any;
  maxTitleChar?: number;
};

type addNoteFormState = {
  noteTitle: string;
  noteBody: string;
  showForm: boolean;
};

export class AddNote extends React.Component<
  addNoteFormProps,
  addNoteFormState
> {
  constructor(props: addNoteFormProps) {
    super(props);

    this.state = {
      noteTitle: "",
      noteBody: "",
      showForm: false,
    };
  }

  private titleRef = createRef<HTMLInputElement>();
  private calcTitleLengthPercentage = (): number => {
    if (
      this.titleRef.current?.value.length === undefined ||
      this.props.maxTitleChar === undefined
    ) {
      return 0;
    }

    return this.titleRef.current?.value.length / this.props.maxTitleChar;
  };

  private handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      this.props.maxTitleChar &&
      e.target.value.length > this.props.maxTitleChar
    ) {
      return;
    }

    this.setState((prev) => {
      return { ...prev, noteTitle: e.target.value };
    });
  };

  private handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState((prev) => {
      return { ...prev, noteBody: e.target.value };
    });
  };

  private handleShowForm = () => {
    this.setState((prev) => {
      return {
        ...prev,
        showForm: true,
      };
    });
  };

  private handleHideForm = () => {
    this.setState((prev) => {
      return {
        ...prev,
        showForm: false,
      };
    });
  };

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onAddNote(this.state.noteTitle, this.state.noteBody);
    this.setState({ noteTitle: "", noteBody: "", showForm: false });
  };

  render() {
    return (
      <>
        <Input
          type="button"
          onClick={this.handleShowForm}
          className="mb-8 bg-primary cursor-pointer text-xl font-bold text-slate-50"
          value={"Add Note"}
        />
        <div
          className={`${!this.state.showForm && "hidden"} fixed inset-0 m-auto w-1/2 h-fit`}
        >
          <form
            className="p-4 rounded-lg bg-slate-300"
            onSubmit={this.handleSubmit}
          >
            <div className="flex flex-row">
              <h2 className="flex-1 text-2xl font-bold text-secondary">
                Add Note
              </h2>
              <button
                className="flex justify-center items-center text-4xl rounded-md bg-slate-200 h-8 w-8 box-border"
                onClick={this.handleHideForm}
              >
                ×
              </button>
            </div>
            <div className="relative">
              <Input
                type="text"
                id="note-title"
                name="note-title"
                ref={this.titleRef}
                required
                title="Note Title"
                label="Title"
                value={this.state.noteTitle}
                onChange={this.handleTitleChange}
                className="bg-slate-50 text-slate-600"
              />
              {this.props.maxTitleChar ? (
                <div
                  className={`absolute right-2 bottom-2 w-fit ${
                    this.calcTitleLengthPercentage() < 0.75
                      ? "text-slate-600"
                      : this.calcTitleLengthPercentage() < 1
                        ? "text-warning"
                        : "text-error"
                  }`}
                >
                  {`${this.titleRef.current?.value.length}/${this.props.maxTitleChar}`}
                </div>
              ) : null}
            </div>
            <TextArea
              id="note-body"
              name="note-body"
              title="Note Body"
              required
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
      </>
    );
  }
}
