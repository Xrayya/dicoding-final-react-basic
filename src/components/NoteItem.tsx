import { Note } from "@/model";

type NoteTitleProps = {
  title: Note["title"];
};

type NoteDateProps = {
  date: Note["createdAt"];
  locale?: Intl.LocalesArgument;
  options?: Intl.DateTimeFormatOptions;
};

type NoteBodyProps = {
  body: Note["body"];
};

type NoteButton = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

type NoteButtonGroup = {
  children?: React.ReactNode;
};

type NoteItemProps = {
  children?: React.ReactNode;
};

export function Title({ title }: NoteTitleProps) {
  return <h6>{title}</h6>;
}

export function DateString({ date, locale, options }: NoteDateProps) {
  return <div>{date.toLocaleDateString(locale, options)}</div>;
}

export function Body({ body }: NoteBodyProps) {
  return <p>{body}</p>;
}

export function Button({ label, onClick }: NoteButton) {
  return <button onClick={onClick}>{label}</button>;
}

export function ButtonGroup({ children }: NoteButtonGroup) {
  return <div>{children}</div>;
}

export function Item({ children }: NoteItemProps) {
  return <div>{children}</div>;
}
