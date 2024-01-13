import { Note } from "@/model";
import React from "react";
import AddNoteForm from "./AddNoteForm";
import NoteDetail from "./NoteDetail";
import NoteGrid from "./NoteGrid";
import * as NoteItem from "./NoteItem";

type MainProps = {};
type MainState = {
  notes: Note[];
};

class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);

    this.state = {
      notes: [],
    };
  }

  private handleItemDelete = (e: React.MouseEvent<HTMLButtonElement>) => {};
  private handleItemArchive = (e: React.MouseEvent<HTMLButtonElement>) => {};
  private handleItemUnarchive = (e: React.MouseEvent<HTMLButtonElement>) => {};
  render() {
    const { notes } = this.state;
    return (
      <div>
        <AddNoteForm />
        <NoteDetail />
        <NoteGrid label={"Active Notes"}>
          {notes
            .filter((note) => !note.archived)
            .map((note) => (
              <NoteItem.Item key={note.id}>
                <NoteItem.Title title={note.title} />
                <NoteItem.DateString
                  date={note.createdAt}
                  locale={"en-US"}
                  options={{ day: "numeric", month: "long", year: "numeric" }}
                />
                <NoteItem.Body body={note.body} />
                <NoteItem.ButtonGroup>
                  <NoteItem.Button
                    label={"Delete"}
                    onClick={this.handleItemDelete}
                  />
                  <NoteItem.Button
                    label={"Archive"}
                    onClick={this.handleItemArchive}
                  />
                </NoteItem.ButtonGroup>
              </NoteItem.Item>
            ))}
        </NoteGrid>
        <NoteGrid label={"Archived Notes"}>
          {notes
            .filter((note) => note.archived)
            .map((note) => (
              <NoteItem.Item key={note.id}>
                <NoteItem.Title title={note.title} />
                <NoteItem.DateString
                  date={note.createdAt}
                  locale={"en-US"}
                  options={{ day: "numeric", month: "long", year: "numeric" }}
                />
                <NoteItem.Body body={note.body} />
                <NoteItem.ButtonGroup>
                  <NoteItem.Button
                    label={"Delete"}
                    onClick={this.handleItemDelete}
                  />
                  <NoteItem.Button
                    label={"Unarchive"}
                    onClick={this.handleItemUnarchive}
                  />
                </NoteItem.ButtonGroup>
              </NoteItem.Item>
            ))}
        </NoteGrid>
      </div>
    );
  }
}

export default Main;
