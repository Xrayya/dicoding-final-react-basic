import { getInitialData } from "@/fixtures/dummy-data";
import { Note } from "@/model";
import { filterByPattern } from "@/utils/fuzzyMatch";
import React from "react";
import { AddNote } from "./AddNote";
import NoteDetail from "./NoteDetail";
import NoteGrid from "./NoteGrid";
import * as NoteItem from "./NoteItem";
import SearchBar from "./SearchBar";

type mainProps = {};
type mainState = {
  notes: Note[];
  focusedNote?: Note;
  searchStr?: string;
};

class Main extends React.Component<mainProps, mainState> {
  constructor(props: mainProps) {
    super(props);

    this.state = {
      notes: getInitialData(),
      focusedNote: undefined,
      searchStr: undefined,
    };
  }

  private handleAddNote = (noteTitle: string, noteBody: string) => {
    this.setState(({ notes }) => {
      return {
        notes: [
          ...notes,
          {
            id: notes[notes.length - 1].id + 1,
            title: noteTitle,
            body: noteBody,
            archived: false,
            createdAt: new Date(),
          },
        ],
      };
    });
  };

  private handleSearch = (searchStr?: string) => {
    this.setState(({ ...prev }) => {
      return {
        ...prev,
        searchStr: searchStr,
      };
    });
  };

  private handleItemDelete = (noteId: Note["id"]) => {
    this.setState(({ notes, ...rest }) => {
      return {
        ...rest,
        notes: [...notes.filter((note) => note.id !== noteId)],
      };
    });
  };

  private handleItemArchive = (noteId: Note["id"]) => {
    this.setState(({ notes, ...rest }) => {
      notes[notes.findIndex((note) => note.id === noteId)].archived = true;
      return {
        ...rest,
        notes: [...notes],
      };
    });
  };

  private handleItemUnarchive = (noteId: Note["id"]) => {
    this.setState(({ notes, ...rest }) => {
      notes[notes.findIndex((note) => note.id === noteId)].archived = false;
      return {
        ...rest,
        notes: [...notes],
      };
    });
  };

  private handleNoteItemClick = (noteId: Note["id"]) => {
    this.setState(({ focusedNote, notes, ...rest }) => {
      return {
        ...rest,
        notes: notes,
        focusedNote: notes[notes.findIndex((note) => note.id === noteId)],
      };
    });
  };

  private handleDetailClose = () => {
    this.setState((prev) => {
      return {
        ...prev,
        focusedNote: undefined,
      };
    });
  };

  render() {
    const { notes } = this.state;
    return (
      <div className="p-32 pt-16">
        <AddNote onAddNote={this.handleAddNote} maxTitleChar={50} />
        <SearchBar onSearch={this.handleSearch} />
        <NoteDetail
          note={this.state.focusedNote}
          onClose={this.handleDetailClose}
        />
        <NoteGrid label={"Active Notes"}>
          {notes
            .filter(
              (note) =>
                !note.archived &&
                (this.state.searchStr
                  ? filterByPattern(this.state.searchStr, note.title, 0.05) ||
                    filterByPattern(this.state.searchStr, note.body, 0.05)
                  : true),
            )
            .map((note) => (
              <NoteItem.Item
                key={note.id}
                noteId={note.id}
                onClick={this.handleNoteItemClick}
              >
                <NoteItem.Title title={note.title} />
                <NoteItem.DateString
                  date={note.createdAt}
                  locale={"en-US"}
                  options={{ day: "numeric", month: "short", year: "numeric" }}
                />
                <NoteItem.Body body={note.body} maxWord={20} />
                <NoteItem.ButtonGroup>
                  <NoteItem.Button
                    label="Delete"
                    type="error"
                    noteId={note.id}
                    onClick={this.handleItemDelete}
                  />
                  <NoteItem.Button
                    label="Archive"
                    noteId={note.id}
                    onClick={this.handleItemArchive}
                  />
                </NoteItem.ButtonGroup>
              </NoteItem.Item>
            ))}
        </NoteGrid>
        <NoteGrid label={"Archived Notes"}>
          {notes
            .filter(
              (note) =>
                note.archived &&
                (this.state.searchStr
                  ? filterByPattern(this.state.searchStr, note.title, 0.05) ||
                    filterByPattern(this.state.searchStr, note.body, 0.05)
                  : true),
            )
            .map((note) => (
              <NoteItem.Item
                key={note.id}
                noteId={note.id}
                onClick={this.handleNoteItemClick}
              >
                <NoteItem.Title title={note.title} />
                <NoteItem.DateString
                  date={note.createdAt}
                  locale={"en-US"}
                  options={{ day: "numeric", month: "long", year: "numeric" }}
                />
                <NoteItem.Body body={note.body} maxWord={20} />
                <NoteItem.ButtonGroup>
                  <NoteItem.Button
                    label="Delete"
                    type="error"
                    noteId={note.id}
                    onClick={this.handleItemDelete}
                  />
                  <NoteItem.Button
                    label="Unarchive"
                    noteId={note.id}
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
